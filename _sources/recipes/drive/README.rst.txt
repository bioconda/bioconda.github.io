:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drive'
.. highlight: bash

drive
=====

.. conda:recipe:: drive
   :replaces_section_title:

   Google Drive client for the commandline

   :homepage: https://github.com/odeke-em/drive
   :license: Apache v2.0
   :recipe: /`drive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drive/meta.yaml>`_

   


.. conda:package:: drive

   |downloads_drive| |docker_drive|

   :versions: 0.3.9-1, 0.3.9-0, 0.3.8-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install drive

   and update with::

      conda update drive

   or use the docker container::

      docker pull quay.io/repository/biocontainers/drive:<tag>

   (see `drive/tags`_ for valid values for ``<tag>``)


.. |downloads_drive| image:: https://img.shields.io/conda/dn/bioconda/drive.svg?style=flat
   :alt:   (downloads)
.. |docker_drive| image:: https://quay.io/repository/biocontainers/drive/status
   :target: https://quay.io/repository/biocontainers/drive
.. _`drive/tags`: https://quay.io/repository/biocontainers/drive?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drive/README.html