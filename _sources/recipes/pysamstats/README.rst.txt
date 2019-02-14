:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysamstats'
.. highlight: bash

pysamstats
==========

.. conda:recipe:: pysamstats
   :replaces_section_title:

   A Python utility for calculating statistics against genome position based on sequence alignments from a SAM\, BAM or CRAM file.

   :homepage: https://github.com/alimanfoo/pysamstats
   :license: MIT
   :recipe: /`pysamstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysamstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysamstats/meta.yaml>`_
   :links: biotools: :biotools:`pysamstats`

   


.. conda:package:: pysamstats

   |downloads_pysamstats| |docker_pysamstats|

   :versions: 1.1.2-0, 1.0.1-2, 1.0.1-1, 1.0.1-0, 1.0.0-0, 0.24.3-0, 0.24.2-1, 0.24.0-0
   
   :depends numpy: 
   
   :depends pysam: >=0.15
   
   :depends pytables: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pysamstats

   and update with::

      conda update pysamstats

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pysamstats:<tag>

   (see `pysamstats/tags`_ for valid values for ``<tag>``)


.. |downloads_pysamstats| image:: https://img.shields.io/conda/dn/bioconda/pysamstats.svg?style=flat
   :alt:   (downloads)
.. |docker_pysamstats| image:: https://quay.io/repository/biocontainers/pysamstats/status
   :target: https://quay.io/repository/biocontainers/pysamstats
.. _`pysamstats/tags`: https://quay.io/repository/biocontainers/pysamstats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysamstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysamstats/README.html