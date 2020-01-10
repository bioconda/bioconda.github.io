:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rappas'
.. highlight: bash

rappas
======

.. conda:recipe:: rappas
   :replaces_section_title:

   RAPPAS \(Rapid Alignment\-free Phylogenetic PLacement via Ancestral Sequences\) is a program dedicated to Phylogenetic Placement of \(meta\)genomic reads on a reference tree. As apposed to previous PP programs\, RAPPAS is based on the phylo\-kmers idea\, detailed in tis manuscript and uses a 2 step approach divided into a\) the database build\, and b\) the placement itself. The main advantage of RAPPAS is that it is alignment free\, which means that after step \(a\) \(the DB build\) is performed\, metagenomic reads can be directly placed on a referene tree WITHOUT aligning them to the reference alignment on which the tree was built \(as required by other approaches\). The second advantage of RAPPAS is its algorithm based on phylo\-kmers matches\, making its execution time linear with respect to the length of the placed sequences.

   :homepage: https://github.com/blinard-BIOINFO/RAPPAS
   :license: GPL3
   :recipe: /`rappas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rappas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rappas/meta.yaml>`_

   


.. conda:package:: rappas

   |downloads_rappas| |docker_rappas|

   :versions: 1.20-0, 1.12-0
   
   :depends font-ttf-dejavu-sans-mono: 
   :depends openjdk: >=8.0.144
   :depends phyml: 3.3.20190909.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rappas

   and update with::

      conda update rappas

   or use the docker container::

      docker pull quay.io/biocontainers/rappas:<tag>

   (see `rappas/tags`_ for valid values for ``<tag>``)


.. |downloads_rappas| image:: https://img.shields.io/conda/dn/bioconda/rappas.svg?style=flat
   :target: https://anaconda.org/bioconda/rappas
   :alt:   (downloads)
.. |docker_rappas| image:: https://quay.io/repository/biocontainers/rappas/status
   :target: https://quay.io/repository/biocontainers/rappas
.. _`rappas/tags`: https://quay.io/repository/biocontainers/rappas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rappas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rappas/README.html