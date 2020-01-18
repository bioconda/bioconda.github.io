:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanostat'
.. highlight: bash

nanostat
========

.. conda:recipe:: nanostat
   :replaces_section_title:

   Calculate statistics for Oxford Nanopore sequencing data and alignments

   :homepage: https://github.com/wdecoster/nanostat
   :license: MIT / MIT License
   :recipe: /`nanostat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanostat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanostat/meta.yaml>`_

   


.. conda:package:: nanostat

   |downloads_nanostat| |docker_nanostat|

   :versions: 1.2.0-0, 1.1.2-2, 1.1.2-1, 1.1.0-1, 1.1.0-0, 1.0.0-0, 0.8.1-0, 0.7.1-0, 0.2.0-0, 0.1.5-0
   
   :depends nanoget: >=0.15.0
   :depends nanomath: >=0.19.0
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanostat

   and update with::

      conda update nanostat

   or use the docker container::

      docker pull quay.io/biocontainers/nanostat:<tag>

   (see `nanostat/tags`_ for valid values for ``<tag>``)


.. |downloads_nanostat| image:: https://img.shields.io/conda/dn/bioconda/nanostat.svg?style=flat
   :target: https://anaconda.org/bioconda/nanostat
   :alt:   (downloads)
.. |docker_nanostat| image:: https://quay.io/repository/biocontainers/nanostat/status
   :target: https://quay.io/repository/biocontainers/nanostat
.. _`nanostat/tags`: https://quay.io/repository/biocontainers/nanostat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanostat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanostat/README.html