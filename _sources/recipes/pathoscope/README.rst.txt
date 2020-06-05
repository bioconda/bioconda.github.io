:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathoscope'
.. highlight: bash

pathoscope
==========

.. conda:recipe:: pathoscope
   :replaces_section_title:
   :noindex:

   Species identification and strain attribution with unassembled sequencing data

   :homepage: https://github.com/PathoScope/PathoScope
   :license: GPLv3
   :recipe: /`pathoscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathoscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathoscope/meta.yaml>`_

   


.. conda:package:: pathoscope

   |downloads_pathoscope| |docker_pathoscope|

   :versions:
      
      

      ``2.0.7-1``,  ``2.0.7-0``,  ``2.0.6-1``,  ``2.0.6-0``

      

   
   :depends bowtie2: 
   :depends python: ``<3``
   :depends samtools: ``<1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pathoscope

   and update with::

      conda update pathoscope

   or use the docker container::

      docker pull quay.io/biocontainers/pathoscope:<tag>

   (see `pathoscope/tags`_ for valid values for ``<tag>``)


.. |downloads_pathoscope| image:: https://img.shields.io/conda/dn/bioconda/pathoscope.svg?style=flat
   :target: https://anaconda.org/bioconda/pathoscope
   :alt:   (downloads)
.. |docker_pathoscope| image:: https://quay.io/repository/biocontainers/pathoscope/status
   :target: https://quay.io/repository/biocontainers/pathoscope
.. _`pathoscope/tags`: https://quay.io/repository/biocontainers/pathoscope?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathoscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathoscope/README.html