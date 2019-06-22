:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fraggenescan'
.. highlight: bash

fraggenescan
============

.. conda:recipe:: fraggenescan
   :replaces_section_title:

   FragGeneScan is an application for finding \(fragmented\) genes in short reads.

   :homepage: https://sourceforge.net/projects/fraggenescan/
   :license: BSD
   :recipe: /`fraggenescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fraggenescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fraggenescan/meta.yaml>`_
   :links: biotools: :biotools:`fraggenescan`

   FragGeneScan is an application for finding \(fragmented\) genes in short
   reads. It can also be applied to predict prokaryotic genes in incomplete
   assemblies or complete genomes.



.. conda:package:: fraggenescan

   |downloads_fraggenescan| |docker_fraggenescan|

   :versions: 1.31-1, 1.31-0, 1.30-2, 1.30-1, 1.30-0
   
   :depends libgcc-ng: >=7.3.0
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fraggenescan

   and update with::

      conda update fraggenescan

   or use the docker container::

      docker pull quay.io/biocontainers/fraggenescan:<tag>

   (see `fraggenescan/tags`_ for valid values for ``<tag>``)


.. |downloads_fraggenescan| image:: https://img.shields.io/conda/dn/bioconda/fraggenescan.svg?style=flat
   :target: https://anaconda.org/bioconda/fraggenescan
   :alt:   (downloads)
.. |docker_fraggenescan| image:: https://quay.io/repository/biocontainers/fraggenescan/status
   :target: https://quay.io/repository/biocontainers/fraggenescan
.. _`fraggenescan/tags`: https://quay.io/repository/biocontainers/fraggenescan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fraggenescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fraggenescan/README.html