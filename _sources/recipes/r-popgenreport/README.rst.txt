:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-popgenreport'
.. highlight: bash

r-popgenreport
==============

.. conda:recipe:: r-popgenreport
   :replaces_section_title:

   Provides beginner friendly framework to analyse population genetic data. Based on \'adegenet\' objects it uses \'knitr\' to create comprehensive reports on spatial genetic data.  For detailed information how to use the package refer to the comprehensive tutorials or visit \<http\:\/\/www.popgenreport.org\/\>.

   :homepage: https://github.com/green-striped-gecko/PopGenReport
   :license: GPL / GPL
   :recipe: /`r-popgenreport <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-popgenreport>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-popgenreport/meta.yaml>`_

   


.. conda:package:: r-popgenreport

   |downloads_r-popgenreport| |docker_r-popgenreport|

   :versions: 3.0.4-0
   
   :depends r-ade4: 
   :depends r-adegenet: >=2.0.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-calibrate: 
   :depends r-data.table: 
   :depends r-dismo: 
   :depends r-gap: 
   :depends r-gdistance: 
   :depends r-genetics: 
   :depends r-ggally: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-lattice: 
   :depends r-mmod: 
   :depends r-pegas: 
   :depends r-plyr: 
   :depends r-r.utils: 
   :depends r-raster: 
   :depends r-reshape: 
   :depends r-rgdal: 
   :depends r-rgooglemaps: 
   :depends r-sp: 
   :depends r-vegan: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-popgenreport

   and update with::

      conda update r-popgenreport

   or use the docker container::

      docker pull quay.io/biocontainers/r-popgenreport:<tag>

   (see `r-popgenreport/tags`_ for valid values for ``<tag>``)


.. |downloads_r-popgenreport| image:: https://img.shields.io/conda/dn/bioconda/r-popgenreport.svg?style=flat
   :target: https://anaconda.org/bioconda/r-popgenreport
   :alt:   (downloads)
.. |docker_r-popgenreport| image:: https://quay.io/repository/biocontainers/r-popgenreport/status
   :target: https://quay.io/repository/biocontainers/r-popgenreport
.. _`r-popgenreport/tags`: https://quay.io/repository/biocontainers/r-popgenreport?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-popgenreport/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-popgenreport/README.html