:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deformats'
.. highlight: bash

bioconductor-deformats
======================

.. conda:recipe:: bioconductor-deformats
   :replaces_section_title:
   :noindex:

   Differential gene expression data formats converter

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/DEFormats.html
   :license: GPL-3
   :recipe: /`bioconductor-deformats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deformats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deformats/meta.yaml>`_
   :links: biotools: :biotools:`deformats`, doi: :doi:`10.1038/nmeth.3252`

   Convert between different data formats used by differential gene expression analysis tools.


.. conda:package:: bioconductor-deformats

   |downloads_bioconductor-deformats| |docker_bioconductor-deformats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-checkmate: 
   :depends r-data.table: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-deformats

   and update with::

      mamba update bioconductor-deformats

  To create a new environment, run::

      mamba create --name myenvname bioconductor-deformats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deformats:<tag>

   (see `bioconductor-deformats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deformats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deformats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deformats
   :alt:   (downloads)
.. |docker_bioconductor-deformats| image:: https://quay.io/repository/biocontainers/bioconductor-deformats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deformats
.. _`bioconductor-deformats/tags`: https://quay.io/repository/biocontainers/bioconductor-deformats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deformats";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deformats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deformats/README.html