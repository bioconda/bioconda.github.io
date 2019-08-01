:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimmomatic'
.. highlight: bash

trimmomatic
===========

.. conda:recipe:: trimmomatic
   :replaces_section_title:

   A flexible read trimming tool for Illumina NGS data

   :homepage: http://www.usadellab.org/cms/?page=trimmomatic
   :license: GPLv3
   :recipe: /`trimmomatic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimmomatic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimmomatic/meta.yaml>`_
   :links: biotools: :biotools:`trimmomatic`, doi: :doi:`10.1093/bioinformatics/btu170`

   


.. conda:package:: trimmomatic

   |downloads_trimmomatic| |docker_trimmomatic|

   :versions: 0.39-1, 0.39-0, 0.38-1, 0.38-0, 0.36-6, 0.36-5, 0.36-4, 0.36-3, 0.36-1, 0.35-4, 0.35-3, 0.35-2, 0.35-1, 0.33-2, 0.33-1, 0.33-0, 0.32-3, 0.32-2, 0.32-1, 0.32-0
   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trimmomatic

   and update with::

      conda update trimmomatic

   or use the docker container::

      docker pull quay.io/biocontainers/trimmomatic:<tag>

   (see `trimmomatic/tags`_ for valid values for ``<tag>``)


.. |downloads_trimmomatic| image:: https://img.shields.io/conda/dn/bioconda/trimmomatic.svg?style=flat
   :target: https://anaconda.org/bioconda/trimmomatic
   :alt:   (downloads)
.. |docker_trimmomatic| image:: https://quay.io/repository/biocontainers/trimmomatic/status
   :target: https://quay.io/repository/biocontainers/trimmomatic
.. _`trimmomatic/tags`: https://quay.io/repository/biocontainers/trimmomatic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimmomatic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimmomatic/README.html