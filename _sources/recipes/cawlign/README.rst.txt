:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cawlign'
.. highlight: bash

cawlign
=======

.. conda:recipe:: cawlign
   :replaces_section_title:
   :noindex:

   A tool for aligning consensus sequences to reference genomes.

   :homepage: https://github.com/veg/cawlign
   :license: MIT / MIT
   :recipe: /`cawlign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cawlign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cawlign/meta.yaml>`_

   A standalone C\+\+ port of bealign\, a part of the BioExt package. The purpose of this program 
   is to align\/map sequences in a FASTA file to a reference sequence and output the alignment 
   as another FASTA file. 

   Key features\:
   \* Lightweight and self\-contained
   \* Allows codon\-aware alignment while handling out\-of\-frame events
   \* Flexible specification of scoring matrices
   \* OpenMP support



.. conda:package:: cawlign

   |downloads_cawlign| |docker_cawlign|

   :versions:
      
      

      ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libcurl: ``>=8.18.0,<9.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openmpi: ``>=4.1.6,<5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cawlign

   and update with::

      mamba update cawlign

  To create a new environment, run::

      mamba create --name myenvname cawlign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cawlign:<tag>

   (see `cawlign/tags`_ for valid values for ``<tag>``)


.. |downloads_cawlign| image:: https://img.shields.io/conda/dn/bioconda/cawlign.svg?style=flat
   :target: https://anaconda.org/bioconda/cawlign
   :alt:   (downloads)
.. |docker_cawlign| image:: https://quay.io/repository/biocontainers/cawlign/status
   :target: https://quay.io/repository/biocontainers/cawlign
.. _`cawlign/tags`: https://quay.io/repository/biocontainers/cawlign?tab=tags


.. raw:: html

    <script>
        var package = "cawlign";
        var versions = ["0.1.16","0.1.15","0.1.14","0.1.13","0.1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cawlign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cawlign/README.html