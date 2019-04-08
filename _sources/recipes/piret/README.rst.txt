:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piret'
.. highlight: bash

piret
=====

.. conda:recipe:: piret
   :replaces_section_title:

   A tool for conducting RNA seq analysis.

   :homepage: https://github.com/mshakya/PyPiReT
   :license: GPLV2
   :recipe: /`piret <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piret>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piret/meta.yaml>`_
   :links: biotools: :biotools:`piret`

   


.. conda:package:: piret

   |downloads_piret| |docker_piret|

   :versions: 0.3.4-1, 0.3.4-0
   
   :depends argparse: 
   :depends bamtools: >=2.4.0
   :depends bioconductor-deseq2: >=1.20.0
   :depends bioconductor-edger: >=3.22.5
   :depends biopython: >=1.7.0
   :depends hisat2: >=2.0.5
   :depends luigi: >=2.7.9
   :depends pandas: >=0.23.4
   :depends plumbum: >=1.6.0
   :depends python: 
   :depends r: 
   :depends samtools: >=1.3.1
   :depends stringtie: >=1.3.3
   :depends subread: >=1.5.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install piret

   and update with::

      conda update piret

   or use the docker container::

      docker pull quay.io/biocontainers/piret:<tag>

   (see `piret/tags`_ for valid values for ``<tag>``)


.. |downloads_piret| image:: https://img.shields.io/conda/dn/bioconda/piret.svg?style=flat
   :alt:   (downloads)
.. |docker_piret| image:: https://quay.io/repository/biocontainers/piret/status
   :target: https://quay.io/repository/biocontainers/piret
.. _`piret/tags`: https://quay.io/repository/biocontainers/piret?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piret/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piret/README.html