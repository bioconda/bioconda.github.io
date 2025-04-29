:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gambitcore'
.. highlight: bash

gambitcore
==========

.. conda:recipe:: gambitcore
   :replaces_section_title:
   :noindex:

   Tool for rapid taxonomic identification of microbial pathogens

   :homepage: https://github.com/gambit-suite/gambitcore
   :license: GPL / LGPL-3.0-or-later
   :recipe: /`gambitcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gambitcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gambitcore/meta.yaml>`_

   A tool for bacterial species identification and assembly quality assessment. It 
   evaluates assemblies by comparing their k\-mer profiles against species\-specific 
   core genome references\, providing both taxonomic identification and assembly 
   completeness metrics.



.. conda:package:: gambitcore

   |downloads_gambitcore| |docker_gambitcore|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends gambit: 
   :depends libgcc: ``>=13``
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install gambitcore

   and update with::

      mamba update gambitcore

  To create a new environment, run::

      mamba create --name myenvname gambitcore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gambitcore:<tag>

   (see `gambitcore/tags`_ for valid values for ``<tag>``)


.. |downloads_gambitcore| image:: https://img.shields.io/conda/dn/bioconda/gambitcore.svg?style=flat
   :target: https://anaconda.org/bioconda/gambitcore
   :alt:   (downloads)
.. |docker_gambitcore| image:: https://quay.io/repository/biocontainers/gambitcore/status
   :target: https://quay.io/repository/biocontainers/gambitcore
.. _`gambitcore/tags`: https://quay.io/repository/biocontainers/gambitcore?tab=tags


.. raw:: html

    <script>
        var package = "gambitcore";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gambitcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gambitcore/README.html