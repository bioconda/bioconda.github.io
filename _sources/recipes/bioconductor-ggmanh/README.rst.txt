:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggmanh'
.. highlight: bash

bioconductor-ggmanh
===================

.. conda:recipe:: bioconductor-ggmanh
   :replaces_section_title:
   :noindex:

   Visualization Tool for GWAS Result

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ggmanh.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ggmanh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggmanh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggmanh/meta.yaml>`_

   Manhattan plot and QQ Plot are commonly used to visualize the end result of Genome Wide Association Study. The \"ggmanh\" package aims to keep the generation of these plots simple while maintaining customizability. Main functions include manhattan\_plot\, qqunif\, and thinPoints.


.. conda:package:: bioconductor-ggmanh

   |downloads_bioconductor-ggmanh| |docker_bioconductor-ggmanh|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-gdsfmt: ``>=1.36.0,<1.37.0``
   :depends bioconductor-seqarray: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-rcolorbrewer: 
   :depends r-rlang: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ggmanh

   and update with::

      conda update bioconductor-ggmanh

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggmanh:<tag>

   (see `bioconductor-ggmanh/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggmanh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggmanh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggmanh
   :alt:   (downloads)
.. |docker_bioconductor-ggmanh| image:: https://quay.io/repository/biocontainers/bioconductor-ggmanh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggmanh
.. _`bioconductor-ggmanh/tags`: https://quay.io/repository/biocontainers/bioconductor-ggmanh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggmanh";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggmanh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggmanh/README.html