:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shortreadconnector'
.. highlight: bash

shortreadconnector
==================

.. conda:recipe:: short-read-connector
   :replaces_section_title:

   Short read connector enables the comparisons of two read sets

   :homepage: https://github.com/GATB/short_read_connector
   :license: GNU Affero General Public License v3.0
   :recipe: /`short-read-connector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/short-read-connector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/short-read-connector/meta.yaml>`_

   


.. conda:package:: shortreadconnector

   |downloads_shortreadconnector| |docker_shortreadconnector|

   :versions: 1.1.3-2, 1.1.3-1, 1.1.3-0
   
   :depends dsk: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shortreadconnector

   and update with::

      conda update shortreadconnector

   or use the docker container::

      docker pull quay.io/repository/biocontainers/shortreadconnector:<tag>

   (see `shortreadconnector/tags`_ for valid values for ``<tag>``)


.. |downloads_shortreadconnector| image:: https://img.shields.io/conda/dn/bioconda/shortreadconnector.svg?style=flat
   :alt:   (downloads)
.. |docker_shortreadconnector| image:: https://quay.io/repository/biocontainers/shortreadconnector/status
   :target: https://quay.io/repository/biocontainers/shortreadconnector
.. _`shortreadconnector/tags`: https://quay.io/repository/biocontainers/shortreadconnector?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shortreadconnector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shortreadconnector/README.html