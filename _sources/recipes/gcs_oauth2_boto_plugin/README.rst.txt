:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gcs-oauth2-boto-plugin'
.. highlight: bash

gcs-oauth2-boto-plugin
======================

.. conda:recipe:: gcs_oauth2_boto_plugin
   :replaces_section_title:

   Auth plugin allowing use the use of OAuth 2.0 credentials for Google Cloud Storage in the Boto library.

   :homepage: https://developers.google.com/storage/docs/gspythonlibrary
   :license: Apache 2.0
   :recipe: /`gcs_oauth2_boto_plugin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcs_oauth2_boto_plugin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gcs_oauth2_boto_plugin/meta.yaml>`_

   


.. conda:package:: gcs-oauth2-boto-plugin

   |downloads_gcs-oauth2-boto-plugin| |docker_gcs-oauth2-boto-plugin|

   :versions: 1.9-1, 1.9-0
   
   :depends boto: >=2.29.1
   
   :depends google-api-python-client: >=1.1
   
   :depends httplib2: >=0.8
   
   :depends pyopenssl: >=0.13
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends retry_decorator: >=1.0.0
   
   :depends socksipy-branch: 1.01
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gcs-oauth2-boto-plugin

   and update with::

      conda update gcs-oauth2-boto-plugin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gcs-oauth2-boto-plugin:<tag>

   (see `gcs-oauth2-boto-plugin/tags`_ for valid values for ``<tag>``)


.. |downloads_gcs-oauth2-boto-plugin| image:: https://img.shields.io/conda/dn/bioconda/gcs-oauth2-boto-plugin.svg?style=flat
   :alt:   (downloads)
.. |docker_gcs-oauth2-boto-plugin| image:: https://quay.io/repository/biocontainers/gcs-oauth2-boto-plugin/status
   :target: https://quay.io/repository/biocontainers/gcs-oauth2-boto-plugin
.. _`gcs-oauth2-boto-plugin/tags`: https://quay.io/repository/biocontainers/gcs-oauth2-boto-plugin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gcs-oauth2-boto-plugin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gcs-oauth2-boto-plugin/README.html