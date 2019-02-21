:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pathprintgeodata'
.. highlight: bash

bioconductor-pathprintgeodata
=============================

.. conda:recipe:: bioconductor-pathprintgeodata
   :replaces_section_title:

   Pathway Fingerprint vectors that have been pre\-calculated for \~390\,000 publicly available arrays from the GEO corpus\, spanning 6 species and 31 platforms. All data are accompanied by their associated metadata.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/pathprintGEOData.html
   :license: GPL
   :recipe: /`bioconductor-pathprintgeodata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathprintgeodata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pathprintgeodata/meta.yaml>`_

   


.. conda:package:: bioconductor-pathprintgeodata

   |downloads_bioconductor-pathprintgeodata| |docker_bioconductor-pathprintgeodata|

   :versions: 1.12.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends wget: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pathprintgeodata

   and update with::

      conda update bioconductor-pathprintgeodata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pathprintgeodata:<tag>

   (see `bioconductor-pathprintgeodata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pathprintgeodata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pathprintgeodata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pathprintgeodata| image:: https://quay.io/repository/biocontainers/bioconductor-pathprintgeodata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pathprintgeodata
.. _`bioconductor-pathprintgeodata/tags`: https://quay.io/repository/biocontainers/bioconductor-pathprintgeodata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pathprintgeodata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pathprintgeodata/README.html