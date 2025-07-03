:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genome_profiler'
.. highlight: bash

genome_profiler
===============

.. conda:recipe:: genome_profiler
   :replaces_section_title:
   :noindex:

   Prokaryotic genome and plasmid profiling pipeline.

   :homepage: https://github.com/Syrinx55/GenomeProfiler
   :documentation: https://github.com/Syrinx55/GenomeProfiler/blob/v0.4.2/README.md
   
   :license: BSD / BSD-2-Clause-Patent
   :recipe: /`genome_profiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome_profiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome_profiler/meta.yaml>`_

   


.. conda:package:: genome_profiler

   |downloads_genome_profiler| |docker_genome_profiler|

   :versions:
      
      

      ``0.4.2-0``

      

   
   :depends abricate: ``>=1.0.1``
   :depends bio: ``>=1.8``
   :depends diamond: 
   :depends ectyper: 
   :depends integron_finder: 
   :depends isescan: 
   :depends lxml: 
   :depends mash: 
   :depends ncbi-datasets-cli: 
   :depends pycurl: 
   :depends python: ``>=3.10``
   :depends python-dotenv: 
   :depends ratelimit: 
   :depends requests-toolbelt: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install genome_profiler

   and update with::

      mamba update genome_profiler

  To create a new environment, run::

      mamba create --name myenvname genome_profiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genome_profiler:<tag>

   (see `genome_profiler/tags`_ for valid values for ``<tag>``)


.. |downloads_genome_profiler| image:: https://img.shields.io/conda/dn/bioconda/genome_profiler.svg?style=flat
   :target: https://anaconda.org/bioconda/genome_profiler
   :alt:   (downloads)
.. |docker_genome_profiler| image:: https://quay.io/repository/biocontainers/genome_profiler/status
   :target: https://quay.io/repository/biocontainers/genome_profiler
.. _`genome_profiler/tags`: https://quay.io/repository/biocontainers/genome_profiler?tab=tags


.. raw:: html

    <script>
        var package = "genome_profiler";
        var versions = ["0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genome_profiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genome_profiler/README.html