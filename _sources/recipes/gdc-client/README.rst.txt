:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gdc-client'
.. highlight: bash

gdc-client
==========

.. conda:recipe:: gdc-client
   :replaces_section_title:
   :noindex:

   GDC Data Transfer Tool

   :homepage: https://gdc.cancer.gov/access-data/gdc-data-transfer-tool
   :license: Apache v2
   :recipe: /`gdc-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdc-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdc-client/meta.yaml>`_

   


.. conda:package:: gdc-client

   |downloads_gdc-client| |docker_gdc-client|

   :versions:
      
      

      ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-3``,  ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends cryptography: ``>=2.8,<2.9``
   :depends intervaltree: ``>=3.0.2``
   :depends jsonschema: ``>=2.6``
   :depends lxml: ``>=4.4.2``
   :depends ndg-httpsclient: ``>=0.5.0,<1``
   :depends progressbar2: ``>=3.43.1``
   :depends pyasn1: ``>=0.4.3,<1``
   :depends pyopenssl: ``>=18,<19``
   :depends python: ``>=3.5``
   :depends pyyaml: ``>=3.13,<4``
   :depends requests: ``>=2.22.0``
   :depends termcolor: ``>=1.1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gdc-client

   and update with::

      conda update gdc-client

   or use the docker container::

      docker pull quay.io/biocontainers/gdc-client:<tag>

   (see `gdc-client/tags`_ for valid values for ``<tag>``)


.. |downloads_gdc-client| image:: https://img.shields.io/conda/dn/bioconda/gdc-client.svg?style=flat
   :target: https://anaconda.org/bioconda/gdc-client
   :alt:   (downloads)
.. |docker_gdc-client| image:: https://quay.io/repository/biocontainers/gdc-client/status
   :target: https://quay.io/repository/biocontainers/gdc-client
.. _`gdc-client/tags`: https://quay.io/repository/biocontainers/gdc-client?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gdc-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gdc-client/README.html