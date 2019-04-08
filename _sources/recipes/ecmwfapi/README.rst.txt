:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ecmwfapi'
.. highlight: bash

ecmwfapi
========

.. conda:recipe:: ecmwfapi
   :replaces_section_title:

   ECMWF API is a set of services developed by ECMWF http\:\/\/www.ecmwf.int to allow users from the outside to access some internal features and data of the centre.

   :homepage: https://software.ecmwf.int/wiki/display/WEBAPI/Access+ECMWF+Public+Datasets#AccessECMWFPublicDatasets-clientlibraries
   :license: Apache Licence Version 2.0
   :recipe: /`ecmwfapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecmwfapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ecmwfapi/meta.yaml>`_

   


.. conda:package:: ecmwfapi

   |downloads_ecmwfapi| |docker_ecmwfapi|

   :versions: 1.4.1-2, 1.4.1-1, 1.4.1-0
   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ecmwfapi

   and update with::

      conda update ecmwfapi

   or use the docker container::

      docker pull quay.io/biocontainers/ecmwfapi:<tag>

   (see `ecmwfapi/tags`_ for valid values for ``<tag>``)


.. |downloads_ecmwfapi| image:: https://img.shields.io/conda/dn/bioconda/ecmwfapi.svg?style=flat
   :alt:   (downloads)
.. |docker_ecmwfapi| image:: https://quay.io/repository/biocontainers/ecmwfapi/status
   :target: https://quay.io/repository/biocontainers/ecmwfapi
.. _`ecmwfapi/tags`: https://quay.io/repository/biocontainers/ecmwfapi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ecmwfapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ecmwfapi/README.html