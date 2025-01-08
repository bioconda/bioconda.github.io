:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qtlizer'
.. highlight: bash

bioconductor-qtlizer
====================

.. conda:recipe:: bioconductor-qtlizer
   :replaces_section_title:
   :noindex:

   Comprehensive QTL annotation of GWAS results

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Qtlizer.html
   :license: GPL-3
   :recipe: /`bioconductor-qtlizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qtlizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qtlizer/meta.yaml>`_

   This R package provides access to the Qtlizer web server. Qtlizer annotates lists of common small variants \(mainly SNPs\) and genes in humans with associated changes in gene expression using the most comprehensive database of published quantitative trait loci \(QTLs\).


.. conda:package:: bioconductor-qtlizer

   |downloads_bioconductor-qtlizer| |docker_bioconductor-qtlizer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-curl: 
   :depends r-httr: 
   :depends r-stringi: 
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

      mamba install bioconductor-qtlizer

   and update with::

      mamba update bioconductor-qtlizer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qtlizer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qtlizer:<tag>

   (see `bioconductor-qtlizer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qtlizer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qtlizer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qtlizer
   :alt:   (downloads)
.. |docker_bioconductor-qtlizer| image:: https://quay.io/repository/biocontainers/bioconductor-qtlizer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qtlizer
.. _`bioconductor-qtlizer/tags`: https://quay.io/repository/biocontainers/bioconductor-qtlizer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qtlizer";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qtlizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qtlizer/README.html