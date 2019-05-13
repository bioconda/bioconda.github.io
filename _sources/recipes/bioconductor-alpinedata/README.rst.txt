:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-alpinedata'
.. highlight: bash

bioconductor-alpinedata
=======================

.. conda:recipe:: bioconductor-alpinedata
   :replaces_section_title:

   A small subset of paired\-end RNA\-seq reads from four samples of the GEUVADIS project.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/alpineData.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-alpinedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alpinedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-alpinedata/meta.yaml>`_

   


.. conda:package:: bioconductor-alpinedata

   |downloads_bioconductor-alpinedata| |docker_bioconductor-alpinedata|

   :versions: 1.8.0-0
   
   :depends bioconductor-annotationhub: >=2.14.0,<2.15.0
   :depends bioconductor-experimenthub: >=1.8.0,<1.9.0
   :depends bioconductor-genomicalignments: >=1.18.0,<1.19.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-alpinedata

   and update with::

      conda update bioconductor-alpinedata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-alpinedata:<tag>

   (see `bioconductor-alpinedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-alpinedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-alpinedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-alpinedata
   :alt:   (downloads)
.. |docker_bioconductor-alpinedata| image:: https://quay.io/repository/biocontainers/bioconductor-alpinedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-alpinedata
.. _`bioconductor-alpinedata/tags`: https://quay.io/repository/biocontainers/bioconductor-alpinedata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-alpinedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-alpinedata/README.html