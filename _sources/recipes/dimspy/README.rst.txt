:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dimspy'
.. highlight: bash

dimspy
======

.. conda:recipe:: dimspy
   :replaces_section_title:

   Python package for data processing of direct\-infusion mass spectrometry\-based metabolomics and lipidomics data

   :homepage: https://github.com/computational-metabolomics/dimspy
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`dimspy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dimspy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dimspy/meta.yaml>`_

   


.. conda:package:: dimspy

   |downloads_dimspy| |docker_dimspy|

   :versions: 1.4.0-0, 1.3.0-0, 1.2.0-1, 1.2.0-0, 1.1.0-0, 1.0.0-0
   
   :depends fastcluster: 1.1.23
   :depends h5py: 2.7.0
   :depends mono: 4.8.1.0
   :depends numpy: 1.13.3
   :depends plotly: 2.5.1
   :depends pymzml: 0.7.10
   :depends python: <3
   :depends pythonnet: 2.4.0
   :depends scipy: 1.1.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dimspy

   and update with::

      conda update dimspy

   or use the docker container::

      docker pull quay.io/biocontainers/dimspy:<tag>

   (see `dimspy/tags`_ for valid values for ``<tag>``)


.. |downloads_dimspy| image:: https://img.shields.io/conda/dn/bioconda/dimspy.svg?style=flat
   :target: https://anaconda.org/bioconda/dimspy
   :alt:   (downloads)
.. |docker_dimspy| image:: https://quay.io/repository/biocontainers/dimspy/status
   :target: https://quay.io/repository/biocontainers/dimspy
.. _`dimspy/tags`: https://quay.io/repository/biocontainers/dimspy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dimspy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dimspy/README.html