:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psmc'
.. highlight: bash

psmc
====

.. conda:recipe:: psmc
   :replaces_section_title:
   :noindex:

   This software package infers population size history from a diploid sequence using the Pairwise Sequentially Markovian Coalescent \(PSMC\) model


   :homepage: https://github.com/lh3/psmc
   :license: MIT license
   :recipe: /`psmc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psmc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psmc/meta.yaml>`_

   


.. conda:package:: psmc

   |downloads_psmc| |docker_psmc|

   :versions:
      
      

      ``0.6.5-4``,  ``0.6.5-3``,  ``0.6.5-2``,  ``0.6.5-1``,  ``0.6.5-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install psmc

   and update with::

      mamba update psmc

  To create a new environment, run::

      mamba create --name myenvname psmc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/psmc:<tag>

   (see `psmc/tags`_ for valid values for ``<tag>``)


.. |downloads_psmc| image:: https://img.shields.io/conda/dn/bioconda/psmc.svg?style=flat
   :target: https://anaconda.org/bioconda/psmc
   :alt:   (downloads)
.. |docker_psmc| image:: https://quay.io/repository/biocontainers/psmc/status
   :target: https://quay.io/repository/biocontainers/psmc
.. _`psmc/tags`: https://quay.io/repository/biocontainers/psmc?tab=tags


.. raw:: html

    <script>
        var package = "psmc";
        var versions = ["0.6.5","0.6.5","0.6.5","0.6.5","0.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psmc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psmc/README.html