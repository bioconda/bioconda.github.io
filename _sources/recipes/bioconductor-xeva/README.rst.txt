:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xeva'
.. highlight: bash

bioconductor-xeva
=================

.. conda:recipe:: bioconductor-xeva
   :replaces_section_title:
   :noindex:

   Analysis of patient\-derived xenograft \(PDX\) data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Xeva.html
   :license: GPL-3
   :recipe: /`bioconductor-xeva <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xeva>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xeva/meta.yaml>`_

   The Xeva package provides efficient and powerful functions for patient\-drived xenograft \(PDX\) based pharmacogenomic data analysis. This package contains a set of functions to perform analysis of patient\-derived xenograft data. This package was developed by the BHKLab\, for further information please see our documentation.


.. conda:package:: bioconductor-xeva

   |downloads_bioconductor-xeva| |docker_bioconductor-xeva|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-pharmacogx: ``>=3.4.0,<3.5.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bbmisc: 
   :depends r-doparallel: 
   :depends r-downloader: 
   :depends r-ggplot2: 
   :depends r-nlme: 
   :depends r-rmisc: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xeva

   and update with::

      conda update bioconductor-xeva

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xeva:<tag>

   (see `bioconductor-xeva/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xeva| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xeva.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xeva
   :alt:   (downloads)
.. |docker_bioconductor-xeva| image:: https://quay.io/repository/biocontainers/bioconductor-xeva/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xeva
.. _`bioconductor-xeva/tags`: https://quay.io/repository/biocontainers/bioconductor-xeva?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xeva";
        var versions = ["1.16.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xeva/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xeva/README.html