:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'motifscan'
.. highlight: bash

motifscan
=========

.. conda:recipe:: motifscan
   :replaces_section_title:

   A motif discovery tool to search for candidate targets of given motifs.

   :homepage: https://github.com/shao-lab/MotifScan
   :license: BSD / BSD License
   :recipe: /`motifscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motifscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motifscan/meta.yaml>`_

   


.. conda:package:: motifscan

   |downloads_motifscan| |docker_motifscan|

   :versions: 1.1.2-0, 1.1-1, 1.1-0
   
   :depends matplotlib: 
   
   :depends numpy: 
   
   :depends pandas: >=0.17.0
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install motifscan

   and update with::

      conda update motifscan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/motifscan:<tag>

   (see `motifscan/tags`_ for valid values for ``<tag>``)


.. |downloads_motifscan| image:: https://img.shields.io/conda/dn/bioconda/motifscan.svg?style=flat
   :alt:   (downloads)
.. |docker_motifscan| image:: https://quay.io/repository/biocontainers/motifscan/status
   :target: https://quay.io/repository/biocontainers/motifscan
.. _`motifscan/tags`: https://quay.io/repository/biocontainers/motifscan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/motifscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/motifscan/README.html