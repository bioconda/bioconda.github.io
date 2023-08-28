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
   :links: biotools: :biotools:`pathracer`, doi: :doi:`10.1007/978-3-030-18174-1_6`

   PathRacer is a novel standalone tool that aligns profile HMM directly to the assembly graph \(performing the codon translation on fly for amino acid 
   pHMMs\). The tool provides the set of most probable paths traversed by a HMM through the whole assembly graph\, regardless whether the sequence of 
   interested is encoded on the single contig or scattered across the set of edges\, therefore significantly improving the recovery of sequences of 
   interest even from fragmented metagenome assemblies.



.. conda:package:: pathracer

   |downloads_pathracer| |docker_pathracer|

   :versions:
      
      

      ``3.16.0.dev-0``,  ``3.15.0.dev-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends openmp: 
   :depends sysroot_linux-64: ``2.17.*``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install pathracer

   and update with::

      mamba update pathracer

  To create a new environment, run::

      mamba create --name myenvname pathracer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["3.16.0.dev","3.15.0.dev"];
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