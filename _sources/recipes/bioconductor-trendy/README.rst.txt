:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trendy'
.. highlight: bash

bioconductor-trendy
===================

.. conda:recipe:: bioconductor-trendy
   :replaces_section_title:
   :noindex:

   Breakpoint analysis of time\-course expression data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/Trendy.html
   :license: GPL-3
   :recipe: /`bioconductor-trendy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trendy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trendy/meta.yaml>`_

   Trendy implements segmented \(or breakpoint\) regression models to estimate breakpoints which represent changes in expression for each feature\/gene in high throughput data with ordered conditions.


.. conda:package:: bioconductor-trendy

   |downloads_bioconductor-trendy| |docker_bioconductor-trendy|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.4-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dt: 
   :depends r-gplots: 
   :depends r-magrittr: 
   :depends r-segmented: 
   :depends r-shiny: 
   :depends r-shinyfiles: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trendy

   and update with::

      conda update bioconductor-trendy

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trendy:<tag>

   (see `bioconductor-trendy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trendy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trendy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trendy
   :alt:   (downloads)
.. |docker_bioconductor-trendy| image:: https://quay.io/repository/biocontainers/bioconductor-trendy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trendy
.. _`bioconductor-trendy/tags`: https://quay.io/repository/biocontainers/bioconductor-trendy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trendy";
        var versions = ["1.14.0","1.12.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trendy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trendy/README.html