:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panoptes-ui'
.. highlight: bash

panoptes-ui
===========

.. conda:recipe:: panoptes-ui
   :replaces_section_title:
   :noindex:

   panoptes\: monitor computational workflows in real time

   :homepage: https://github.com/panoptes-organization/panoptes
   :license: MIT / MIT
   :recipe: /`panoptes-ui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panoptes-ui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panoptes-ui/meta.yaml>`_

   


.. conda:package:: panoptes-ui

   |downloads_panoptes-ui| |docker_panoptes-ui|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends flask: ``>=1.1.1``
   :depends humanfriendly: ``>=4.18``
   :depends marshmallow: ``>=3.0.1``
   :depends pytest: ``>=5.3.0``
   :depends python: 
   :depends requests: ``>=2.22.0``
   :depends sqlalchemy: ``>=1.3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install panoptes-ui

   and update with::

      conda update panoptes-ui

   or use the docker container::

      docker pull quay.io/biocontainers/panoptes-ui:<tag>

   (see `panoptes-ui/tags`_ for valid values for ``<tag>``)


.. |downloads_panoptes-ui| image:: https://img.shields.io/conda/dn/bioconda/panoptes-ui.svg?style=flat
   :target: https://anaconda.org/bioconda/panoptes-ui
   :alt:   (downloads)
.. |docker_panoptes-ui| image:: https://quay.io/repository/biocontainers/panoptes-ui/status
   :target: https://quay.io/repository/biocontainers/panoptes-ui
.. _`panoptes-ui/tags`: https://quay.io/repository/biocontainers/panoptes-ui?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panoptes-ui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panoptes-ui/README.html