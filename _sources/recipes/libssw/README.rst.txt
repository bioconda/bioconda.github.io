.. title:: Package Recipe 'libssw'
.. highlight: bash


libssw
======

.. conda:recipe:: libssw
   :replaces_section_title:

   An SIMD Smith\-Waterman C\/C\+\+\/Python\/Java Library for Use in Genomic Applications

   :homepage: https://github.com/mengyao/Complete-Striped-Smith-Waterman-Library
   :license: MIT
   :recipe: /`libssw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libssw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libssw/meta.yaml>`_

   


.. conda:package:: libssw

   |downloads_libssw| |docker_libssw|

   :versions: 1.1

   :depends: :conda:package:`libgcc`  :conda:package:`openjdk`  :conda:package:`python` 2.7* :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_libssw|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install libssw

   and update with::

      conda update libssw

   or use the docker container::

      docker pull quay.io/repository/biocontainers/libssw


.. |required_by_libssw| conda:required_by:: libssw
.. |downloads_libssw| image:: https://img.shields.io/conda/dn/bioconda/libssw.svg?style=flat
   :alt:   (downloads)
.. |docker_libssw| image:: https://quay.io/repository/biocontainers/libssw/status
   :target: https://quay.io/repository/biocontainers/libssw







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libssw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libssw/README.html

