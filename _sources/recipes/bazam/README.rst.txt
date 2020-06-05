:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bazam'
.. highlight: bash

bazam
=====

.. conda:recipe:: bazam
   :replaces_section_title:
   :noindex:

   A tool to extract paired reads in FASTQ format from coordinate sorted BAM files

   :homepage: https://github.com/ssadedin/bazam
   :license: LGPL v2.1
   :recipe: /`bazam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bazam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bazam/meta.yaml>`_

   


.. conda:package:: bazam

   |downloads_bazam| |docker_bazam|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bazam

   and update with::

      conda update bazam

   or use the docker container::

      docker pull quay.io/biocontainers/bazam:<tag>

   (see `bazam/tags`_ for valid values for ``<tag>``)


.. |downloads_bazam| image:: https://img.shields.io/conda/dn/bioconda/bazam.svg?style=flat
   :target: https://anaconda.org/bioconda/bazam
   :alt:   (downloads)
.. |docker_bazam| image:: https://quay.io/repository/biocontainers/bazam/status
   :target: https://quay.io/repository/biocontainers/bazam
.. _`bazam/tags`: https://quay.io/repository/biocontainers/bazam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bazam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bazam/README.html