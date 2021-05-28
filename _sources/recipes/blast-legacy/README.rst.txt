:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blast-legacy'
.. highlight: bash

blast-legacy
============

.. conda:recipe:: blast-legacy/2.2.19
   :replaces_section_title:
   :noindex:

   The Basic Local Alignment Search Tool \(BLAST\) finds regions of local similarity between sequences.

   :homepage: http://blast.ncbi.nlm.nih.gov
   :license: Public Domain
   :recipe: /`blast-legacy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast-legacy>`_/`2.2.19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast-legacy/2.2.19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast-legacy/2.2.19/meta.yaml>`_

   


.. conda:package:: blast-legacy

   |downloads_blast-legacy| |docker_blast-legacy|

   :versions:
      
      

      ``2.2.26-3``,  ``2.2.26-2``,  ``2.2.26-1``,  ``2.2.26-0``,  ``2.2.22-1``,  ``2.2.22-0``,  ``2.2.19-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blast-legacy

   and update with::

      conda update blast-legacy

   or use the docker container::

      docker pull quay.io/biocontainers/blast-legacy:<tag>

   (see `blast-legacy/tags`_ for valid values for ``<tag>``)


.. |downloads_blast-legacy| image:: https://img.shields.io/conda/dn/bioconda/blast-legacy.svg?style=flat
   :target: https://anaconda.org/bioconda/blast-legacy
   :alt:   (downloads)
.. |docker_blast-legacy| image:: https://quay.io/repository/biocontainers/blast-legacy/status
   :target: https://quay.io/repository/biocontainers/blast-legacy
.. _`blast-legacy/tags`: https://quay.io/repository/biocontainers/blast-legacy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blast-legacy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blast-legacy/README.html