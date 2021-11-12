:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sojourner'
.. highlight: bash

bioconductor-sojourner
======================

.. conda:recipe:: bioconductor-sojourner
   :replaces_section_title:
   :noindex:

   Statistical analysis of single molecule trajectories

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/sojourner.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sojourner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sojourner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sojourner/meta.yaml>`_

   Single molecule tracking has evolved as a novel new approach complementing genomic sequencing\, it reports live biophysical properties of molecules being investigated besides properties relating their coding sequence\; here we provided \"sojourner\" package\, to address statistical and bioinformatic needs related to the analysis and comprehension of high throughput single molecule tracking data.


.. conda:package:: bioconductor-sojourner

   |downloads_bioconductor-sojourner| |docker_bioconductor-sojourner|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-ebimage: ``>=4.36.0,<4.37.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-fitdistrplus: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-mclust: 
   :depends r-minpack.lm: 
   :depends r-mixtools: 
   :depends r-mltools: 
   :depends r-nls2: 
   :depends r-pixmap: 
   :depends r-plyr: 
   :depends r-r.matlab: 
   :depends r-rcpp: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-sampsurf: 
   :depends r-scales: 
   :depends r-shiny: 
   :depends r-shinyjs: 
   :depends r-sp: 
   :depends r-truncnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sojourner

   and update with::

      conda update bioconductor-sojourner

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sojourner:<tag>

   (see `bioconductor-sojourner/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sojourner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sojourner.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sojourner
   :alt:   (downloads)
.. |docker_bioconductor-sojourner| image:: https://quay.io/repository/biocontainers/bioconductor-sojourner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sojourner
.. _`bioconductor-sojourner/tags`: https://quay.io/repository/biocontainers/bioconductor-sojourner?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sojourner";
        var versions = ["1.8.0","1.6.0","1.4.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sojourner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sojourner/README.html