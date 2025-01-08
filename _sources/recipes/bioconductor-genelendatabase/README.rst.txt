:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genelendatabase'
.. highlight: bash

bioconductor-genelendatabase
============================

.. conda:recipe:: bioconductor-genelendatabase
   :replaces_section_title:
   :noindex:

   Lengths of mRNA transcripts for a number of genomes

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/geneLenDataBase.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-genelendatabase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genelendatabase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genelendatabase/meta.yaml>`_

   Length of mRNA transcripts for a number of genomes and gene ID formats\, largely based on UCSC table browser. Data objects are provided as individual pieces of information to be retrieved and loaded. A variety of different gene identifiers and genomes is supported to ensure wide applicability.


.. conda:package:: bioconductor-genelendatabase

   |downloads_bioconductor-genelendatabase| |docker_bioconductor-genelendatabase|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-genelendatabase

   and update with::

      mamba update bioconductor-genelendatabase

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genelendatabase

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genelendatabase:<tag>

   (see `bioconductor-genelendatabase/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genelendatabase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genelendatabase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genelendatabase
   :alt:   (downloads)
.. |docker_bioconductor-genelendatabase| image:: https://quay.io/repository/biocontainers/bioconductor-genelendatabase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genelendatabase
.. _`bioconductor-genelendatabase/tags`: https://quay.io/repository/biocontainers/bioconductor-genelendatabase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genelendatabase";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genelendatabase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genelendatabase/README.html