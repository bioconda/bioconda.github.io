.. title:: Package Recipe 'fast5'
.. highlight: bash


fast5
=====

.. conda:recipe:: fast5
   :replaces_section_title:

   A C\+\+ header\-only library for reading Oxford Nanopore Fast5 files.

   :homepage: https://github.com/mateidavid/fast5
   :license: MIT
   :recipe: /`fast5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5/meta.yaml>`_

   


.. conda:package:: fast5

   |downloads_fast5| |docker_fast5|

   :versions: 0.6.5, 0.6.4, 0.6.3.p1, 0.6.2, 0.6.2.p1, 0.6.1, 0.5.10a, 0.5.9, 0.5.8, 0.5.6, 0.2.0

   :depends: :conda:package:`hdf5` 1.8.17* 

   :required~by: |required_by_fast5|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fast5

   and update with::

      conda update fast5

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fast5


.. |required_by_fast5| conda:required_by:: fast5
.. |downloads_fast5| image:: https://img.shields.io/conda/dn/bioconda/fast5.svg?style=flat
   :alt:   (downloads)
.. |docker_fast5| image:: https://quay.io/repository/biocontainers/fast5/status
   :target: https://quay.io/repository/biocontainers/fast5







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fast5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fast5/README.html

