:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haystack_bio'
.. highlight: bash

haystack_bio
============

.. conda:recipe:: haystack_bio
   :replaces_section_title:

   Epigenetic Variability and Transcription Factor Motifs Analysis Pipeline

   :homepage: https://github.com/pinellolab/haystack_bio
   :license: GPLv3
   :recipe: /`haystack_bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haystack_bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haystack_bio/meta.yaml>`_

   


.. conda:package:: haystack_bio

   |downloads_haystack_bio| |docker_haystack_bio|

   :versions: 0.5.5-0, 0.5.4-1, 0.5.3-1, 0.5.3-0, 0.5.2-8, 0.5.2-7, 0.5.2-6, 0.5.2-5, 0.5.2-4, 0.5.2-3, 0.5.2-2, 0.5.2-1, 0.5.2-0, v0.5.0-0
   
   :depends bedtools: 
   :depends bx-python: 
   :depends jinja2: 
   :depends matplotlib: 
   :depends meme: 4.11.2.*
   :depends numpy: 1.15.*
   :depends openjdk: 
   :depends pandas: 
   :depends sambamba: 
   :depends scipy: 
   :depends tqdm: 
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-bigwigaverageoverbed: 
   :depends weblogo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haystack_bio

   and update with::

      conda update haystack_bio

   or use the docker container::

      docker pull quay.io/biocontainers/haystack_bio:<tag>

   (see `haystack_bio/tags`_ for valid values for ``<tag>``)


.. |downloads_haystack_bio| image:: https://img.shields.io/conda/dn/bioconda/haystack_bio.svg?style=flat
   :target: https://anaconda.org/bioconda/haystack_bio
   :alt:   (downloads)
.. |docker_haystack_bio| image:: https://quay.io/repository/biocontainers/haystack_bio/status
   :target: https://quay.io/repository/biocontainers/haystack_bio
.. _`haystack_bio/tags`: https://quay.io/repository/biocontainers/haystack_bio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haystack_bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haystack_bio/README.html