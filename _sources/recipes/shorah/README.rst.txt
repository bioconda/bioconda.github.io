:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shorah'
.. highlight: bash

shorah
======

.. conda:recipe:: shorah/1.1.0
   :replaces_section_title:

   The Short Reads Assembly into Haplotypes \(ShoRAH\) program for inferring viral haplotypes from NGS data

   :homepage: https://github.com/cbg-ethz/shorah
   :license: GPLv3
   :recipe: /`shorah <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorah>`_/`1.1.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorah/1.1.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorah/1.1.0/meta.yaml>`_
   :links: biotools: :biotools:`shorah`

   


.. conda:package:: shorah

   |downloads_shorah| |docker_shorah|

   :versions: 1.1.3-2, 1.1.3-1, 1.1.3-0, 1.1.2-0, 1.1.1-0, 1.1.0-2, 1.1.0-1, 1.1.0-0, 1.0.0-2, 1.0.0-1, 1.0.0-0
   
   :depends biopython: 
   :depends blas: 1.1 openblas
   :depends gsl: >=2.2.1,<2.3.0a0
   :depends libgcc-ng: >=4.9
   :depends numpy: 
   :depends perl: 
   :depends python: >=2.7,<2.8.0a0
   :depends samtools: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shorah

   and update with::

      conda update shorah

   or use the docker container::

      docker pull quay.io/biocontainers/shorah:<tag>

   (see `shorah/tags`_ for valid values for ``<tag>``)


.. |downloads_shorah| image:: https://img.shields.io/conda/dn/bioconda/shorah.svg?style=flat
   :alt:   (downloads)
.. |docker_shorah| image:: https://quay.io/repository/biocontainers/shorah/status
   :target: https://quay.io/repository/biocontainers/shorah
.. _`shorah/tags`: https://quay.io/repository/biocontainers/shorah?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shorah/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shorah/README.html