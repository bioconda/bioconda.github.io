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

   :versions: 1.31, 1.30

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`perl`  

   :required~by: |required_by_fraggenescan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fraggenescan

   and update with::

      conda update fraggenescan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fraggenescan


.. |required_by_fraggenescan| conda:required_by:: fraggenescan
.. |downloads_fraggenescan| image:: https://img.shields.io/conda/dn/bioconda/fraggenescan.svg?style=flat
   :alt:   (downloads)
.. |docker_fraggenescan| image:: https://quay.io/repository/biocontainers/fraggenescan/status
   :target: https://quay.io/repository/biocontainers/fraggenescan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fraggenescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fraggenescan/README.html

