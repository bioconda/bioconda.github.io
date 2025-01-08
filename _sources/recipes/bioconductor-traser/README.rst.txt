:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-traser'
.. highlight: bash

bioconductor-traser
===================

.. conda:recipe:: bioconductor-traser
   :replaces_section_title:
   :noindex:

   GWAS trait\-associated SNP enrichment analyses in genomic intervals

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/traseR.html
   :license: GPL
   :recipe: /`bioconductor-traser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-traser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-traser/meta.yaml>`_
   :links: biotools: :biotools:`traser`, doi: :doi:`10.1093/bioinformatics/btv741`

   traseR performs GWAS trait\-associated SNP enrichment analyses in genomic intervals using different hypothesis testing approaches\, also provides various functionalities to explore and visualize the results.


.. conda:package:: bioconductor-traser

   |downloads_bioconductor-traser| |docker_bioconductor-traser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
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

      mamba install bioconductor-traser

   and update with::

      mamba update bioconductor-traser

  To create a new environment, run::

      mamba create --name myenvname bioconductor-traser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-traser:<tag>

   (see `bioconductor-traser/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-traser| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-traser.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-traser
   :alt:   (downloads)
.. |docker_bioconductor-traser| image:: https://quay.io/repository/biocontainers/bioconductor-traser/status
   :target: https://quay.io/repository/biocontainers/bioconductor-traser
.. _`bioconductor-traser/tags`: https://quay.io/repository/biocontainers/bioconductor-traser?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-traser";
        var versions = ["1.36.0","1.32.0","1.30.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-traser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-traser/README.html