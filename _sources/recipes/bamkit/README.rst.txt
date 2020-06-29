:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamkit'
.. highlight: bash

bamkit
======

.. conda:recipe:: bamkit
   :replaces_section_title:
   :noindex:

   Tools for common BAM file manipulations

   :homepage: https://github.com/hall-lab/bamkit
   :license: MIT
   :recipe: /`bamkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamkit/meta.yaml>`_

   


.. conda:package:: bamkit

   |downloads_bamkit| |docker_bamkit|

   :versions:
      
      

      ``16.07.26-0``

      

   
   :depends pysam: 
   :depends python: ``2.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamkit

   and update with::

      conda update bamkit

   or use the docker container::

      docker pull quay.io/biocontainers/bamkit:<tag>

   (see `bamkit/tags`_ for valid values for ``<tag>``)


.. |downloads_bamkit| image:: https://img.shields.io/conda/dn/bioconda/bamkit.svg?style=flat
   :target: https://anaconda.org/bioconda/bamkit
   :alt:   (downloads)
.. |docker_bamkit| image:: https://quay.io/repository/biocontainers/bamkit/status
   :target: https://quay.io/repository/biocontainers/bamkit
.. _`bamkit/tags`: https://quay.io/repository/biocontainers/bamkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamkit/README.html