:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transposcope'
.. highlight: bash

transposcope
============

.. conda:recipe:: transposcope
   :replaces_section_title:

   A package for visualizing read coverage in areas flanking mobile element insertions.

   :homepage: https://github.com/FenyoLab/transposcope
   :license: MIT / MIT License
   :recipe: /`transposcope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transposcope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transposcope/meta.yaml>`_

   


.. conda:package:: transposcope

   |downloads_transposcope| |docker_transposcope|

   :versions: 0.1.0-0
   
   :depends biopython: >=1.72
   :depends bowtie2: >=2.3.4.3
   :depends cherrypy: >=18.1.0
   :depends numpy: >=1.15.2
   :depends pandas: >=0.23.4
   :depends pysam: >=0.15.0
   :depends python: >=3
   :depends samtools: >=1.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transposcope

   and update with::

      conda update transposcope

   or use the docker container::

      docker pull quay.io/biocontainers/transposcope:<tag>

   (see `transposcope/tags`_ for valid values for ``<tag>``)


.. |downloads_transposcope| image:: https://img.shields.io/conda/dn/bioconda/transposcope.svg?style=flat
   :alt:   (downloads)
.. |docker_transposcope| image:: https://quay.io/repository/biocontainers/transposcope/status
   :target: https://quay.io/repository/biocontainers/transposcope
.. _`transposcope/tags`: https://quay.io/repository/biocontainers/transposcope?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transposcope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transposcope/README.html