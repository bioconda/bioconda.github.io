:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ebsea'
.. highlight: bash

bioconductor-ebsea
==================

.. conda:recipe:: bioconductor-ebsea
   :replaces_section_title:
   :noindex:

   Exon Based Strategy for Expression Analysis of genes

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/EBSEA.html
   :license: GPL-2
   :recipe: /`bioconductor-ebsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ebsea/meta.yaml>`_
   :links: biotools: :biotools:`ebsea`, doi: :doi:`10.1038/nmeth.3252`

   Calculates differential expression of genes based on exon counts of genes obtained from RNA\-seq sequencing data.


.. conda:package:: bioconductor-ebsea

   |downloads_bioconductor-ebsea| |docker_bioconductor-ebsea|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-empiricalbrownsmethod: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-ebsea

   and update with::

      mamba update bioconductor-ebsea

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ebsea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ebsea:<tag>

   (see `bioconductor-ebsea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ebsea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ebsea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ebsea
   :alt:   (downloads)
.. |docker_bioconductor-ebsea| image:: https://quay.io/repository/biocontainers/bioconductor-ebsea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ebsea
.. _`bioconductor-ebsea/tags`: https://quay.io/repository/biocontainers/bioconductor-ebsea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ebsea";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ebsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ebsea/README.html