:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'busco'
.. highlight: bash

busco
=====

.. conda:recipe:: busco
   :replaces_section_title:

   BUSCO provides measures for quantitative assessment of genome assembly\, gene set\, and transcriptome completeness based on evolutionarily informed expectations of gene content from near\-universal single\-copy orthologs selected from OrthoDB.

   :homepage: http://busco.ezlab.org/
   :license: GPL
   :recipe: /`busco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/busco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/busco/meta.yaml>`_
   :links: biotools: :biotools:`busco`, doi: :doi:`10.1093/bioinformatics/btv351`

   


.. conda:package:: busco

   |downloads_busco| |docker_busco|

   :versions: 4.0.6-0, 4.0.5-0, 4.0.4-1, 4.0.4-0, 4.0.2-0, 4.0.1-0, 4.0.0-0, 4.0.beta1-0, 3.0.2-13, 3.0.2-12, 3.0.2-11, 3.0.2-10, 3.0.2-9, 3.0.2-8, 3.0.2-7, 3.0.2-6, 3.0.2-5, 3.0.2-4, 3.0.1-0, 2.0.1-0, 2.0-0, 1.2-1, 1.2-0
   
   :depends augustus: 3.2.3.*
   :depends biopython: 
   :depends blast: >=2.2,<2.4
   :depends findutils: 
   :depends hmmer: >=3.1b2
   :depends prodigal: 
   :depends python: >=3.3
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-ggplot2: >=2.2.1
   :depends sepp: >=4.3.10
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install busco

   and update with::

      conda update busco

   or use the docker container::

      docker pull quay.io/biocontainers/busco:<tag>

   (see `busco/tags`_ for valid values for ``<tag>``)


.. |downloads_busco| image:: https://img.shields.io/conda/dn/bioconda/busco.svg?style=flat
   :target: https://anaconda.org/bioconda/busco
   :alt:   (downloads)
.. |docker_busco| image:: https://quay.io/repository/biocontainers/busco/status
   :target: https://quay.io/repository/biocontainers/busco
.. _`busco/tags`: https://quay.io/repository/biocontainers/busco?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/busco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/busco/README.html