:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-geoaxe'
.. highlight: bash

r-geoaxe
========

.. conda:recipe:: r-geoaxe
   :replaces_section_title:

   Split \'geospatial\' objects into pieces. Includes support for some spatial object inputs\, \'Well\-Known Text\'\, and \'GeoJSON\'.

   :homepage: https://github.com/ropenscilabs/geoaxe
   :license: MIT / MIT
   :recipe: /`r-geoaxe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-geoaxe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-geoaxe/meta.yaml>`_

   


.. conda:package:: r-geoaxe

   |downloads_r-geoaxe| |docker_r-geoaxe|

   :versions: 0.1.0-4, 0.1.0-3, 0.1.0-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-jsonlite: 
   
   :depends r-rgeos: 
   
   :depends r-sp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-geoaxe

   and update with::

      conda update r-geoaxe

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-geoaxe:<tag>

   (see `r-geoaxe/tags`_ for valid values for ``<tag>``)


.. |downloads_r-geoaxe| image:: https://img.shields.io/conda/dn/bioconda/r-geoaxe.svg?style=flat
   :alt:   (downloads)
.. |docker_r-geoaxe| image:: https://quay.io/repository/biocontainers/r-geoaxe/status
   :target: https://quay.io/repository/biocontainers/r-geoaxe
.. _`r-geoaxe/tags`: https://quay.io/repository/biocontainers/r-geoaxe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-geoaxe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-geoaxe/README.html