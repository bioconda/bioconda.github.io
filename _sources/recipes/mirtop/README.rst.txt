:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirtop'
.. highlight: bash

mirtop
======

.. conda:recipe:: mirtop
   :replaces_section_title:

   Small RNA\-seq annotation

   :homepage: http://github.com/mirtop/mirtop
   :license: MIT / MIT License
   :recipe: /`mirtop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirtop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirtop/meta.yaml>`_

   


.. conda:package:: mirtop

   |downloads_mirtop| |docker_mirtop|

   :versions: 0.4.15a-0, 0.3.17-1, 0.3.17-0, 0.3.11a0-2, 0.3.11a0-0, 0.3.6a0-0, 0.3.2a0-0, 0.1.8a0-0
   
   :depends biopython: 
   
   :depends pandas: 
   
   :depends pybedtools: 
   
   :depends pysam: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mirtop

   and update with::

      conda update mirtop

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mirtop:<tag>

   (see `mirtop/tags`_ for valid values for ``<tag>``)


.. |downloads_mirtop| image:: https://img.shields.io/conda/dn/bioconda/mirtop.svg?style=flat
   :alt:   (downloads)
.. |docker_mirtop| image:: https://quay.io/repository/biocontainers/mirtop/status
   :target: https://quay.io/repository/biocontainers/mirtop
.. _`mirtop/tags`: https://quay.io/repository/biocontainers/mirtop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirtop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirtop/README.html