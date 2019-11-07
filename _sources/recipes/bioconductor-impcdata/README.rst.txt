:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-impcdata'
.. highlight: bash

bioconductor-impcdata
=====================

.. conda:recipe:: bioconductor-impcdata
   :replaces_section_title:

   Retrieves data from IMPC database

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/IMPCdata.html
   :license: file LICENSE
   :recipe: /`bioconductor-impcdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impcdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-impcdata/meta.yaml>`_

   Package contains methods for data retrieval from IMPC Database.


.. conda:package:: bioconductor-impcdata

   |downloads_bioconductor-impcdata| |docker_bioconductor-impcdata|

   :versions: 1.22.0-0, 1.20.0-1, 1.20.0-0, 1.18.0-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-rjson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-impcdata

   and update with::

      conda update bioconductor-impcdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-impcdata:<tag>

   (see `bioconductor-impcdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-impcdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-impcdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-impcdata
   :alt:   (downloads)
.. |docker_bioconductor-impcdata| image:: https://quay.io/repository/biocontainers/bioconductor-impcdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-impcdata
.. _`bioconductor-impcdata/tags`: https://quay.io/repository/biocontainers/bioconductor-impcdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-impcdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-impcdata/README.html