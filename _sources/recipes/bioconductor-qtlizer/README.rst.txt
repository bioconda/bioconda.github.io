:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qtlizer'
.. highlight: bash

bioconductor-qtlizer
====================

.. conda:recipe:: bioconductor-qtlizer
   :replaces_section_title:
   :noindex:

   Comprehensive QTL annotation of GWAS results

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Qtlizer.html
   :license: GPL-3
   :recipe: /`bioconductor-qtlizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qtlizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qtlizer/meta.yaml>`_

   This R package provides access to the Qtlizer web server. Qtlizer annotates lists of common small variants \(mainly SNPs\) and genes in humans with associated changes in gene expression using the most comprehensive database of published quantitative trait loci \(QTLs\).


.. conda:package:: bioconductor-qtlizer

   |downloads_bioconductor-qtlizer| |docker_bioconductor-qtlizer|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-curl: 
   :depends r-httr: 
   :depends r-stringi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-qtlizer

   and update with::

      conda update bioconductor-qtlizer

   or use the docker container::

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
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.4.0"];
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