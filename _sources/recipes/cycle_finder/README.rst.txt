:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cycle_finder'
.. highlight: bash

cycle_finder
============

.. conda:recipe:: cycle_finder
   :replaces_section_title:
   :noindex:

   A de novo analysis tool for tandem and interspersed repeats based on cycle\-finding.

   :homepage: https://github.com/rkajitani/cycle_finder
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`cycle_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cycle_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cycle_finder/meta.yaml>`_

   


.. conda:package:: cycle_finder

   |downloads_cycle_finder| |docker_cycle_finder|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends blast: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends cd-hit: 
   :depends kmer-jellyfish: 
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends trf: 
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

      mamba install cycle_finder

   and update with::

      mamba update cycle_finder

  To create a new environment, run::

      mamba create --name myenvname cycle_finder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cycle_finder:<tag>

   (see `cycle_finder/tags`_ for valid values for ``<tag>``)


.. |downloads_cycle_finder| image:: https://img.shields.io/conda/dn/bioconda/cycle_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/cycle_finder
   :alt:   (downloads)
.. |docker_cycle_finder| image:: https://quay.io/repository/biocontainers/cycle_finder/status
   :target: https://quay.io/repository/biocontainers/cycle_finder
.. _`cycle_finder/tags`: https://quay.io/repository/biocontainers/cycle_finder?tab=tags


.. raw:: html

    <script>
        var package = "cycle_finder";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cycle_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cycle_finder/README.html