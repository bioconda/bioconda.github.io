:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylaid'
.. highlight: bash

bioconductor-methylaid
======================

.. conda:recipe:: bioconductor-methylaid
   :replaces_section_title:
   :noindex:

   Visual and interactive quality control of large Illumina DNA Methylation array data sets

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/MethylAid.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-methylaid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylaid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylaid/meta.yaml>`_

   A visual and interactive web application using RStudio\'s shiny package. Bad quality samples are detected using sample\-dependent and sample\-independent controls present on the array and user adjustable thresholds. In depth exploration of bad quality samples can be performed using several interactive diagnostic plots of the quality control probes present on the array. Furthermore\, the impact of any batch effect provided by the user can be explored.


.. conda:package:: bioconductor-methylaid

   |downloads_bioconductor-methylaid| |docker_bioconductor-methylaid|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-minfi: ``>=1.38.0,<1.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-gridbase: 
   :depends r-hexbin: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :depends r-shiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylaid

   and update with::

      conda update bioconductor-methylaid

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylaid:<tag>

   (see `bioconductor-methylaid/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylaid| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylaid.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylaid
   :alt:   (downloads)
.. |docker_bioconductor-methylaid| image:: https://quay.io/repository/biocontainers/bioconductor-methylaid/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylaid
.. _`bioconductor-methylaid/tags`: https://quay.io/repository/biocontainers/bioconductor-methylaid?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylaid";
        var versions = ["1.26.0","1.24.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylaid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylaid/README.html