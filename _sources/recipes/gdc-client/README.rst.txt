.. title:: Package Recipe 'gdc-client'
.. highlight: bash


gdc-client
==========

.. conda:recipe:: gdc-client
   :replaces_section_title:

   GDC Data Transfer Tool

   :homepage: https://gdc.cancer.gov/access-data/gdc-data-transfer-tool
   :license: Apache v2
   :recipe: /`gdc-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdc-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdc-client/meta.yaml>`_

   


.. conda:package:: gdc-client

   |downloads_gdc-client| |docker_gdc-client|

   :versions: 1.3.0

   :depends: :conda:package:`jsonschema` >=2,<3 :conda:package:`libgcc`  :conda:package:`lxml` >=3,<4 :conda:package:`ndg-httpsclient` >=0.4,<1 :conda:package:`parcel` >=0.2,<1 :conda:package:`pyasn1` >=0.2,<1 :conda:package:`pyopenssl` >=17,<18 :conda:package:`python` 2.7* :conda:package:`pyyaml` >=3,<4 :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_gdc-client|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gdc-client

   and update with::

      conda update gdc-client

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gdc-client


.. |required_by_gdc-client| conda:required_by:: gdc-client
.. |downloads_gdc-client| image:: https://img.shields.io/conda/dn/bioconda/gdc-client.svg?style=flat
   :alt:   (downloads)
.. |docker_gdc-client| image:: https://quay.io/repository/biocontainers/gdc-client/status
   :target: https://quay.io/repository/biocontainers/gdc-client







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gdc-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gdc-client/README.html

