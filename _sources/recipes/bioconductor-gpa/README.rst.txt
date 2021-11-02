:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gpa'
.. highlight: bash

bioconductor-gpa
================

.. conda:recipe:: bioconductor-gpa
   :replaces_section_title:
   :noindex:

   GPA \(Genetic analysis incorporating Pleiotropy and Annotation\)

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/GPA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gpa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpa/meta.yaml>`_

   This package provides functions for fitting GPA\, a statistical framework to prioritize GWAS results by integrating pleiotropy information and annotation data. In addition\, it also includes ShinyGPA\, an interactive visualization toolkit to investigate pleiotropic architecture.


.. conda:package:: bioconductor-gpa

   |downloads_bioconductor-gpa| |docker_bioconductor-gpa|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-plyr: 
   :depends r-rcpp: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gpa

   and update with::

      conda update bioconductor-gpa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gpa:<tag>

   (see `bioconductor-gpa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gpa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gpa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gpa
   :alt:   (downloads)
.. |docker_bioconductor-gpa| image:: https://quay.io/repository/biocontainers/bioconductor-gpa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gpa
.. _`bioconductor-gpa/tags`: https://quay.io/repository/biocontainers/bioconductor-gpa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gpa";
        var versions = ["1.6.0","1.4.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gpa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gpa/README.html