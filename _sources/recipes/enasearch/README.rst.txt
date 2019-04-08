:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enasearch'
.. highlight: bash

enasearch
=========

.. conda:recipe:: enasearch/0.0.6
   :replaces_section_title:

   A Python library for interacting with ENA\'s API

   :homepage: https://github.com/bebatut/enasearch
   :license: MIT / MIT License
   :recipe: /`enasearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enasearch>`_/`0.0.6 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enasearch/0.0.6>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enasearch/0.0.6/meta.yaml>`_

   


.. conda:package:: enasearch

   |downloads_enasearch| |docker_enasearch|

   :versions: 0.2.2-1, 0.2.2-0, 0.1.1-1, 0.1.1-0, 0.0.6-1, 0.0.6-0, 0.0.5-1, 0.0.5-0, 0.0.4-1, 0.0.4-0
   
   :depends biopython: 
   :depends click: 
   :depends dicttoxml: 
   :depends flake8: 
   :depends python: >=2.7,<2.8.0a0
   :depends requests: 
   :depends xmltodict: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install enasearch

   and update with::

      conda update enasearch

   or use the docker container::

      docker pull quay.io/biocontainers/enasearch:<tag>

   (see `enasearch/tags`_ for valid values for ``<tag>``)


.. |downloads_enasearch| image:: https://img.shields.io/conda/dn/bioconda/enasearch.svg?style=flat
   :alt:   (downloads)
.. |docker_enasearch| image:: https://quay.io/repository/biocontainers/enasearch/status
   :target: https://quay.io/repository/biocontainers/enasearch
.. _`enasearch/tags`: https://quay.io/repository/biocontainers/enasearch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enasearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enasearch/README.html