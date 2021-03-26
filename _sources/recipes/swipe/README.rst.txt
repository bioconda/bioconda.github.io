:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'swipe'
.. highlight: bash

swipe
=====

.. conda:recipe:: swipe
   :replaces_section_title:
   :noindex:

   Tool for performing rapid local alignment searches in amino acid or nucleotide sequence databases. It is a highly optimized implementation of the Smith\-Waterman algoritm using SIMD parallel computing technology available on common CPUs.

   :homepage: http://dna.uio.no/swipe
   :developer docs: https://github.com/torognes/swipe
   :license: GPL / AGPL-3.0
   :recipe: /`swipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swipe/meta.yaml>`_
   :links: biotools: :biotools:`swipe`, doi: :doi:`10.1186/1471-2105-12-221`

   


.. conda:package:: swipe

   |downloads_swipe| |docker_swipe|

   :versions:
      
      

      ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.12-1``,  ``2.0.12-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends openmpi: ``>=4.1.0,<5.0a0``
   :depends tbb: ``>=2020.2,<2021.0.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install swipe

   and update with::

      conda update swipe

   or use the docker container::

      docker pull quay.io/biocontainers/swipe:<tag>

   (see `swipe/tags`_ for valid values for ``<tag>``)


.. |downloads_swipe| image:: https://img.shields.io/conda/dn/bioconda/swipe.svg?style=flat
   :target: https://anaconda.org/bioconda/swipe
   :alt:   (downloads)
.. |docker_swipe| image:: https://quay.io/repository/biocontainers/swipe/status
   :target: https://quay.io/repository/biocontainers/swipe
.. _`swipe/tags`: https://quay.io/repository/biocontainers/swipe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/swipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/swipe/README.html