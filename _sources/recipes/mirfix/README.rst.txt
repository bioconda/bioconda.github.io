:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirfix'
.. highlight: bash

mirfix
======

.. conda:recipe:: mirfix
   :replaces_section_title:

   MIRfix automatically curates miRNA datasets by improving alignments of their precursors\, the consistency of the annotation of mature miR and miR\* sequence\, and the phylogenetic coverage. MIRfix produces alignments that are comparable across families and sets the stage for improved homology search as well as quantitative analyses.

   :homepage: https://github.com/Bierinformatik/MIRfix
   :license: GPL / GPL-3.0
   :recipe: /`mirfix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirfix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirfix/meta.yaml>`_

   


.. conda:package:: mirfix

   |downloads_mirfix| |docker_mirfix|

   :versions: 1.0.1-0
   
   :depends biopython: 
   
   :depends clustalw: 
   
   :depends dialign2: 
   
   :depends matplotlib: 
   
   :depends numpy: 
   
   :depends python: <3
   
   :depends tk: >=8.6.9,<8.7.0a0
   
   :depends viennarna: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mirfix

   and update with::

      conda update mirfix

   or use the docker container::

      docker pull quay.io/biocontainers/mirfix:<tag>

   (see `mirfix/tags`_ for valid values for ``<tag>``)


.. |downloads_mirfix| image:: https://img.shields.io/conda/dn/bioconda/mirfix.svg?style=flat
   :alt:   (downloads)
.. |docker_mirfix| image:: https://quay.io/repository/biocontainers/mirfix/status
   :target: https://quay.io/repository/biocontainers/mirfix
.. _`mirfix/tags`: https://quay.io/repository/biocontainers/mirfix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirfix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirfix/README.html