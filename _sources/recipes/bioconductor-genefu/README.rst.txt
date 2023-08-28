:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genefu'
.. highlight: bash

bioconductor-genefu
===================

.. conda:recipe:: bioconductor-genefu
   :replaces_section_title:
   :noindex:

   Computation of Gene Expression\-Based Signatures in Breast Cancer

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/genefu.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genefu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genefu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genefu/meta.yaml>`_
   :links: biotools: :biotools:`genefu`, doi: :doi:`10.1093/bioinformatics/btv693`

   This package contains functions implementing various tasks usually required by gene expression analysis\, especially in breast cancer studies\: gene mapping between different microarray platforms\, identification of molecular subtypes\, implementation of published gene signatures\, gene selection\, and survival analysis.


.. conda:package:: bioconductor-genefu

   |downloads_bioconductor-genefu| |docker_bioconductor-genefu|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.2-0</code>,  <code>2.22.1-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-1</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.2-0``,  ``2.22.1-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-aims: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-survcomp: ``>=1.50.0,<1.51.0``
   :depends r-amap: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ic10: 
   :depends r-mclust: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-genefu

   and update with::

      mamba update bioconductor-genefu

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genefu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genefu:<tag>

   (see `bioconductor-genefu/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genefu| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genefu.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genefu
   :alt:   (downloads)
.. |docker_bioconductor-genefu| image:: https://quay.io/repository/biocontainers/bioconductor-genefu/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genefu
.. _`bioconductor-genefu/tags`: https://quay.io/repository/biocontainers/bioconductor-genefu?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genefu";
        var versions = ["2.32.0","2.30.0","2.26.0","2.24.2","2.22.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genefu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genefu/README.html