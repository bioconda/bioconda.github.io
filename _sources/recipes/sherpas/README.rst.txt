:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sherpas'
.. highlight: bash

sherpas
=======

.. conda:recipe:: sherpas
   :replaces_section_title:
   :noindex:

   Screening Historical Events of Recombination in a Phylogeny via Ancestral Sequences.

   :homepage: https://github.com/phylo42/sherpas
   :license: MIT / MIT
   :recipe: /`sherpas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sherpas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sherpas/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.06.22.161422`

   A new\, alignment\-free genome recombination detection tool exploiting the idea of phylo\-kmers \(Linard et al. 2019\) to accelerate the process by several orders of magnitude while keeping comparable accuracy.


.. conda:package:: sherpas

   |downloads_sherpas| |docker_sherpas|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sherpas

   and update with::

      conda update sherpas

   or use the docker container::

      docker pull quay.io/biocontainers/sherpas:<tag>

   (see `sherpas/tags`_ for valid values for ``<tag>``)


.. |downloads_sherpas| image:: https://img.shields.io/conda/dn/bioconda/sherpas.svg?style=flat
   :target: https://anaconda.org/bioconda/sherpas
   :alt:   (downloads)
.. |docker_sherpas| image:: https://quay.io/repository/biocontainers/sherpas/status
   :target: https://quay.io/repository/biocontainers/sherpas
.. _`sherpas/tags`: https://quay.io/repository/biocontainers/sherpas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sherpas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sherpas/README.html