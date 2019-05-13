:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tinscan'
.. highlight: bash

tinscan
=======

.. conda:recipe:: tinscan
   :replaces_section_title:

   Find alignment signatures characteristic of transposon insertion sites.

   :homepage: https://github.com/Adamtaranto/TE-insertion-scanner
   :license: MIT / MIT License
   :recipe: /`tinscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinscan/meta.yaml>`_

   


.. conda:package:: tinscan

   |downloads_tinscan| |docker_tinscan|

   :versions: 0.2.0-1, 0.2.0-0
   
   :depends biopython: >=1.70
   :depends python: >=3.5,<3.6.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tinscan

   and update with::

      conda update tinscan

   or use the docker container::

      docker pull quay.io/biocontainers/tinscan:<tag>

   (see `tinscan/tags`_ for valid values for ``<tag>``)


.. |downloads_tinscan| image:: https://img.shields.io/conda/dn/bioconda/tinscan.svg?style=flat
   :target: https://anaconda.org/bioconda/tinscan
   :alt:   (downloads)
.. |docker_tinscan| image:: https://quay.io/repository/biocontainers/tinscan/status
   :target: https://quay.io/repository/biocontainers/tinscan
.. _`tinscan/tags`: https://quay.io/repository/biocontainers/tinscan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tinscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tinscan/README.html