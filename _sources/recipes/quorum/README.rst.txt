:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quorum'
.. highlight: bash

quorum
======

.. conda:recipe:: quorum
   :replaces_section_title:

   QuorUM \(Quality Optimized Reads from the University of Maryland\) is an error corrector for Illumina reads. It is distributed and used with MaSuRCA\, or it can be used independently.

   :homepage: http://www.genome.umd.edu/quorum.html
   :license: GPLv3
   :recipe: /`quorum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quorum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quorum/meta.yaml>`_

   


.. conda:package:: quorum

   |downloads_quorum| |docker_quorum|

   :versions: 1.1.1-1, 1.1.1-0
   
   :depends jellyfish: 2.2.10.*
   
   :depends libstdcxx-ng: >=4.9
   
   :depends perl: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quorum

   and update with::

      conda update quorum

   or use the docker container::

      docker pull quay.io/biocontainers/quorum:<tag>

   (see `quorum/tags`_ for valid values for ``<tag>``)


.. |downloads_quorum| image:: https://img.shields.io/conda/dn/bioconda/quorum.svg?style=flat
   :alt:   (downloads)
.. |docker_quorum| image:: https://quay.io/repository/biocontainers/quorum/status
   :target: https://quay.io/repository/biocontainers/quorum
.. _`quorum/tags`: https://quay.io/repository/biocontainers/quorum?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quorum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quorum/README.html