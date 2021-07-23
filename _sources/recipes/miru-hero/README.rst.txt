:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'miru-hero'
.. highlight: bash

miru-hero
=========

.. conda:recipe:: miru-hero
   :replaces_section_title:
   :noindex:

   Compute MIRU and Spoligotype from a M. tuberculosis genome

   :homepage: https://gitlab.com/LPCDRP/miru-hero
   :license: GPL / GPL-3.0-or-later
   :recipe: /`miru-hero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miru-hero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/miru-hero/meta.yaml>`_

   Calculate the number and position of MIRU and Spoligotype sequences from a FASTA file\, output results 
   to a file\, and print octal Spoligotype results\, MIRU results\, and lineage results to screen



.. conda:package:: miru-hero

   |downloads_miru-hero| |docker_miru-hero|

   :versions:
      
      

      ``0.10.0-0``

      

   
   :depends biopython: ``<1.79``
   :depends blast: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install miru-hero

   and update with::

      conda update miru-hero

   or use the docker container::

      docker pull quay.io/biocontainers/miru-hero:<tag>

   (see `miru-hero/tags`_ for valid values for ``<tag>``)


.. |downloads_miru-hero| image:: https://img.shields.io/conda/dn/bioconda/miru-hero.svg?style=flat
   :target: https://anaconda.org/bioconda/miru-hero
   :alt:   (downloads)
.. |docker_miru-hero| image:: https://quay.io/repository/biocontainers/miru-hero/status
   :target: https://quay.io/repository/biocontainers/miru-hero
.. _`miru-hero/tags`: https://quay.io/repository/biocontainers/miru-hero?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/miru-hero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/miru-hero/README.html