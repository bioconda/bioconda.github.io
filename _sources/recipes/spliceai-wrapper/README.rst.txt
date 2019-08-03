:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spliceai-wrapper'
.. highlight: bash

spliceai-wrapper
================

.. conda:recipe:: spliceai-wrapper
   :replaces_section_title:

   A caching wrapper for Illumina SpliceAI.

   :homepage: https://github.com/bihealth/spliceai-wrapper
   :license: MIT / MIT
   :recipe: /`spliceai-wrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliceai-wrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliceai-wrapper/meta.yaml>`_

   


.. conda:package:: spliceai-wrapper

   |downloads_spliceai-wrapper| |docker_spliceai-wrapper|

   :versions: 0.1.0-0
   
   :depends bcftools: 
   :depends logzero: 
   :depends ncls: 
   :depends pysam: 
   :depends spliceai: 
   :depends tqdm: 
   :depends xdg: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spliceai-wrapper

   and update with::

      conda update spliceai-wrapper

   or use the docker container::

      docker pull quay.io/biocontainers/spliceai-wrapper:<tag>

   (see `spliceai-wrapper/tags`_ for valid values for ``<tag>``)


.. |downloads_spliceai-wrapper| image:: https://img.shields.io/conda/dn/bioconda/spliceai-wrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/spliceai-wrapper
   :alt:   (downloads)
.. |docker_spliceai-wrapper| image:: https://quay.io/repository/biocontainers/spliceai-wrapper/status
   :target: https://quay.io/repository/biocontainers/spliceai-wrapper
.. _`spliceai-wrapper/tags`: https://quay.io/repository/biocontainers/spliceai-wrapper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spliceai-wrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spliceai-wrapper/README.html