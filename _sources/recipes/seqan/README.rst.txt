:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqan'
.. highlight: bash

seqan
=====

.. conda:recipe:: seqan
   :replaces_section_title:
   :noindex:

   SeqAn is an open source C\+\+ library of efficient algorithms and data structures for the analysis of sequences with the focus on biological data.

   :homepage: http://www.seqan.de/
   :license: BSD-3-Clause
   :recipe: /`seqan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan/meta.yaml>`_

   


.. conda:package:: seqan

   |downloads_seqan| |docker_seqan|

   :versions:
      
      

      ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqan

   and update with::

      conda update seqan

   or use the docker container::

      docker pull quay.io/biocontainers/seqan:<tag>

   (see `seqan/tags`_ for valid values for ``<tag>``)


.. |downloads_seqan| image:: https://img.shields.io/conda/dn/bioconda/seqan.svg?style=flat
   :target: https://anaconda.org/bioconda/seqan
   :alt:   (downloads)
.. |docker_seqan| image:: https://quay.io/repository/biocontainers/seqan/status
   :target: https://quay.io/repository/biocontainers/seqan
.. _`seqan/tags`: https://quay.io/repository/biocontainers/seqan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqan/README.html