:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathracer'
.. highlight: bash

pathracer
=========

.. conda:recipe:: pathracer
   :replaces_section_title:
   :noindex:

   PathRacer is a tool for alignment of profile HMM against assembly graph.

   :homepage: http://cab.spbu.ru/software/pathracer/
   :license: GPL / GPLv2
   :recipe: /`pathracer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathracer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathracer/meta.yaml>`_
   :links: biotools: :biotools:`pathracer`

   PathRacer is a novel standalone tool that aligns profile HMM directly to the assembly graph \(performing the codon translation on fly for amino acid 
   pHMMs\). The tool provides the set of most probable paths traversed by a HMM through the whole assembly graph\, regardless whether the sequence of 
   interested is encoded on the single contig or scattered across the set of edges\, therefore significantly improving the recovery of sequences of 
   interest even from fragmented metagenome assemblies.



.. conda:package:: pathracer

   |downloads_pathracer| |docker_pathracer|

   :versions:
      
      

      ``3.15.0.dev-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openmp: 
   :depends python: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pathracer

   and update with::

      conda update pathracer

   or use the docker container::

      docker pull quay.io/biocontainers/pathracer:<tag>

   (see `pathracer/tags`_ for valid values for ``<tag>``)


.. |downloads_pathracer| image:: https://img.shields.io/conda/dn/bioconda/pathracer.svg?style=flat
   :target: https://anaconda.org/bioconda/pathracer
   :alt:   (downloads)
.. |docker_pathracer| image:: https://quay.io/repository/biocontainers/pathracer/status
   :target: https://quay.io/repository/biocontainers/pathracer
.. _`pathracer/tags`: https://quay.io/repository/biocontainers/pathracer?tab=tags


.. raw:: html

    <script>
        var package = "pathracer";
        var versions = ["3.15.0.dev"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathracer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathracer/README.html