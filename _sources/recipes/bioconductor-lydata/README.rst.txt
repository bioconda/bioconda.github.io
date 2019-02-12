:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lydata'
.. highlight: bash

bioconductor-lydata
===================

.. conda:recipe:: bioconductor-lydata
   :replaces_section_title:

   Raw data downloaded from GEO for the compound LY294002. Raw data is from multiple platforms from Affymetrix and Illumina. This data is used to illustrate the cross\-platform meta\-analysis of microarray data using the crossmeta package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/lydata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lydata/meta.yaml>`_

   


.. conda:package:: bioconductor-lydata

   |downloads_bioconductor-lydata| |docker_bioconductor-lydata|

   :versions: 1.8.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lydata

   and update with::

      conda update bioconductor-lydata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lydata:<tag>

   (see `bioconductor-lydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lydata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lydata| image:: https://quay.io/repository/biocontainers/bioconductor-lydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lydata
.. _`bioconductor-lydata/tags`: https://quay.io/repository/biocontainers/bioconductor-lydata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lydata/README.html