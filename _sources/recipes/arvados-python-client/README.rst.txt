:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arvados-python-client'
.. highlight: bash

arvados-python-client
=====================

.. conda:recipe:: arvados-python-client
   :replaces_section_title:

   Python API for Arvados\, an open source platform for managing and analyzing biomedical big data

   :homepage: https://github.com/curoverse/arvados/tree/master/sdk/python
   :license: Apache License 2.0
   :recipe: /`arvados-python-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-python-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-python-client/meta.yaml>`_

   


.. conda:package:: arvados-python-client

   |downloads_arvados-python-client| |docker_arvados-python-client|

   :versions: 1.3.0.20190205182514-0, 1.3.0.20181130020805-0, 1.2.1-0, 1.2.0.20181121194423-0, 1.2.0.20181109162613-0, 1.2.0.20181108215719-0, 1.2.0.20180905185317-0, 0.1.20171211211613-1, 0.1.20171211211613-0, 0.1.20171010180436-0, 0.1.20170818194607-0, 0.1.20161123074954-0, 0.1.20161031135838-0, 0.1.20160517202250-1, 0.1.20160517202250-0, 0.1.20160412193510-0, 0.1.20160331153549-0, 0.1.20160318153100-0, 0.1.20160301181511-0
   
   :depends ciso8601: >=1.0.6,<2.0.0
   
   :depends future: 
   
   :depends google-api-python-client: <1.7,>=1.6.2
   
   :depends httplib2: 
   
   :depends pycurl: >=7.19.5.1
   
   :depends python: <3.7
   
   :depends ruamel.yaml: >=0.15.54
   
   :depends setuptools: 
   
   :depends subprocess32: 
   
   :depends ws4py: >=0.4.2
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install arvados-python-client

   and update with::

      conda update arvados-python-client

   or use the docker container::

      docker pull quay.io/repository/biocontainers/arvados-python-client:<tag>

   (see `arvados-python-client/tags`_ for valid values for ``<tag>``)


.. |downloads_arvados-python-client| image:: https://img.shields.io/conda/dn/bioconda/arvados-python-client.svg?style=flat
   :alt:   (downloads)
.. |docker_arvados-python-client| image:: https://quay.io/repository/biocontainers/arvados-python-client/status
   :target: https://quay.io/repository/biocontainers/arvados-python-client
.. _`arvados-python-client/tags`: https://quay.io/repository/biocontainers/arvados-python-client?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arvados-python-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arvados-python-client/README.html