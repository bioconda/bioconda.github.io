:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbcore'
.. highlight: bash

pbcore
======

.. conda:recipe:: pbcore
   :replaces_section_title:

   A Python library for reading and writing PacBio data files

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcore/meta.yaml>`_

   


.. conda:package:: pbcore

   |downloads_pbcore| |docker_pbcore|

   :versions: 1.7.1-0, 1.6.5-0, 1.5.1-2, 1.5.1-1, 1.5.1-0, 1.2.10-2, 1.2.10-1, 1.2.10-0
   
   :depends cython: 
   :depends h5py: >=2.7.0
   :depends numpy: >=1.15
   :depends pysam: >=0.15.1
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbcore

   and update with::

      conda update pbcore

   or use the docker container::

      docker pull quay.io/biocontainers/pbcore:<tag>

   (see `pbcore/tags`_ for valid values for ``<tag>``)


.. |downloads_pbcore| image:: https://img.shields.io/conda/dn/bioconda/pbcore.svg?style=flat
   :target: https://anaconda.org/bioconda/pbcore
   :alt:   (downloads)
.. |docker_pbcore| image:: https://quay.io/repository/biocontainers/pbcore/status
   :target: https://quay.io/repository/biocontainers/pbcore
.. _`pbcore/tags`: https://quay.io/repository/biocontainers/pbcore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbcore/README.html