:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pubmlst_client'
.. highlight: bash

pubmlst_client
==============

.. conda:recipe:: pubmlst_client
   :replaces_section_title:

   List and download schemes from pubMLST.org

   :homepage: https://github.com/Public-Health-Bioinformatics/pubmlst_client
   :license: MIT
   :recipe: /`pubmlst_client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pubmlst_client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pubmlst_client/meta.yaml>`_

   


.. conda:package:: pubmlst_client

   |downloads_pubmlst_client| |docker_pubmlst_client|

   :versions: 0.1.0-0
   
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pubmlst_client

   and update with::

      conda update pubmlst_client

   or use the docker container::

      docker pull quay.io/biocontainers/pubmlst_client:<tag>

   (see `pubmlst_client/tags`_ for valid values for ``<tag>``)


.. |downloads_pubmlst_client| image:: https://img.shields.io/conda/dn/bioconda/pubmlst_client.svg?style=flat
   :target: https://anaconda.org/bioconda/pubmlst_client
   :alt:   (downloads)
.. |docker_pubmlst_client| image:: https://quay.io/repository/biocontainers/pubmlst_client/status
   :target: https://quay.io/repository/biocontainers/pubmlst_client
.. _`pubmlst_client/tags`: https://quay.io/repository/biocontainers/pubmlst_client?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pubmlst_client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pubmlst_client/README.html