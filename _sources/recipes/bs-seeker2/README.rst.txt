:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bs-seeker2'
.. highlight: bash

bs-seeker2
==========

.. conda:recipe:: bs-seeker2
   :replaces_section_title:

   BS Seeker 2 is a seamless and versatile pipeline for accurately and fast mapping the bisulfite\-treated short reads.

   :homepage: http://pellegrini.mcdb.ucla.edu/BS_Seeker2/
   :license: MIT
   :recipe: /`bs-seeker2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bs-seeker2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bs-seeker2/meta.yaml>`_

   


.. conda:package:: bs-seeker2

   |downloads_bs-seeker2| |docker_bs-seeker2|

   :versions: 2.1.7-0, 2.1.0-1, 2.1.0-0
   
   :depends bowtie2: 
   :depends pysam: 
   :depends python: <3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bs-seeker2

   and update with::

      conda update bs-seeker2

   or use the docker container::

      docker pull quay.io/biocontainers/bs-seeker2:<tag>

   (see `bs-seeker2/tags`_ for valid values for ``<tag>``)


.. |downloads_bs-seeker2| image:: https://img.shields.io/conda/dn/bioconda/bs-seeker2.svg?style=flat
   :target: https://anaconda.org/bioconda/bs-seeker2
   :alt:   (downloads)
.. |docker_bs-seeker2| image:: https://quay.io/repository/biocontainers/bs-seeker2/status
   :target: https://quay.io/repository/biocontainers/bs-seeker2
.. _`bs-seeker2/tags`: https://quay.io/repository/biocontainers/bs-seeker2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bs-seeker2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bs-seeker2/README.html