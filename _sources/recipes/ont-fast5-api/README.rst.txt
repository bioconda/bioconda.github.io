:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ont-fast5-api'
.. highlight: bash

ont-fast5-api
=============

.. conda:recipe:: ont-fast5-api
   :replaces_section_title:

   Oxford Nanopore Technologies fast5 API software

   :homepage: https://github.com/nanoporetech/ont_fast5_api
   :license: OTHER / Mozilla Public 2.0 (MPL 2.0)
   :recipe: /`ont-fast5-api <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-fast5-api>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ont-fast5-api/meta.yaml>`_

   


.. conda:package:: ont-fast5-api

   |downloads_ont-fast5-api| |docker_ont-fast5-api|

   :versions: 1.2.0-0, 1.1.0-0, 1.0.1-1, 1.0.1-0, 0.4.1-1, 0.4.1-0
   
   :depends h5py: >=2.2.1
   :depends numpy: >=1.8.1
   :depends progressbar33: >=2.3.1
   :depends python: 
   :depends six: >=1.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ont-fast5-api

   and update with::

      conda update ont-fast5-api

   or use the docker container::

      docker pull quay.io/biocontainers/ont-fast5-api:<tag>

   (see `ont-fast5-api/tags`_ for valid values for ``<tag>``)


.. |downloads_ont-fast5-api| image:: https://img.shields.io/conda/dn/bioconda/ont-fast5-api.svg?style=flat
   :alt:   (downloads)
.. |docker_ont-fast5-api| image:: https://quay.io/repository/biocontainers/ont-fast5-api/status
   :target: https://quay.io/repository/biocontainers/ont-fast5-api
.. _`ont-fast5-api/tags`: https://quay.io/repository/biocontainers/ont-fast5-api?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ont-fast5-api/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ont-fast5-api/README.html