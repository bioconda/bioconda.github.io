.. title:: Package Recipe 'transgenescan'
.. highlight: bash


transgenescan
=============

.. conda:recipe:: transgenescan
   :replaces_section_title:

   Software tool for finding genes in assembled transcripts from metatranscriptomic sequences.

   :homepage: https://github.com/COL-IU/TransGeneScan
   :license: file
   :recipe: /`transgenescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transgenescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transgenescan/meta.yaml>`_
   :links: biotools: :biotools:`TransGeneScan`, doi: :doi:`10.1186/1471-2105-15-S9-S8`

   


.. conda:package:: transgenescan

   |downloads_transgenescan| |docker_transgenescan|

   :versions: 1.2.1

   :depends: :conda:package:`libgcc-ng` >=4.9 

   :required~by: |required_by_transgenescan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install transgenescan

   and update with::

      conda update transgenescan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/transgenescan


.. |required_by_transgenescan| conda:required_by:: transgenescan
.. |downloads_transgenescan| image:: https://img.shields.io/conda/dn/bioconda/transgenescan.svg?style=flat
   :alt:   (downloads)
.. |docker_transgenescan| image:: https://quay.io/repository/biocontainers/transgenescan/status
   :target: https://quay.io/repository/biocontainers/transgenescan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transgenescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transgenescan/README.html

