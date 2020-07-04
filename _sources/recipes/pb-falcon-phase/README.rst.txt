:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pb-falcon-phase'
.. highlight: bash

pb-falcon-phase
===============

.. conda:recipe:: pb-falcon-phase
   :replaces_section_title:
   :noindex:

   Non\-python parts of falcon\-phase \(Pacific Biosciences\)

   :homepage: https://github.com/PacificBiosciences/pb-falcon-phase
   :license: BSD 3-Clause Clear License
   :recipe: /`pb-falcon-phase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falcon-phase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falcon-phase/meta.yaml>`_

   


.. conda:package:: pb-falcon-phase

   |downloads_pb-falcon-phase| |docker_pb-falcon-phase|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pb-falcon-phase

   and update with::

      conda update pb-falcon-phase

   or use the docker container::

      docker pull quay.io/biocontainers/pb-falcon-phase:<tag>

   (see `pb-falcon-phase/tags`_ for valid values for ``<tag>``)


.. |downloads_pb-falcon-phase| image:: https://img.shields.io/conda/dn/bioconda/pb-falcon-phase.svg?style=flat
   :target: https://anaconda.org/bioconda/pb-falcon-phase
   :alt:   (downloads)
.. |docker_pb-falcon-phase| image:: https://quay.io/repository/biocontainers/pb-falcon-phase/status
   :target: https://quay.io/repository/biocontainers/pb-falcon-phase
.. _`pb-falcon-phase/tags`: https://quay.io/repository/biocontainers/pb-falcon-phase?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-falcon-phase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-falcon-phase/README.html