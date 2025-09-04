:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plmc'
.. highlight: bash

plmc
====

.. conda:recipe:: plmc
   :replaces_section_title:
   :noindex:

   Inference of couplings in proteins and RNAs from sequence variation.

   :homepage: https://github.com/debbiemarkslab/plmc
   :license: MIT / MIT
   :recipe: /`plmc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plmc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plmc/meta.yaml>`_

   


.. conda:package:: plmc

   |downloads_plmc| |docker_plmc|

   :versions:
      
      

      ``20221105-2``,  ``20221105-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
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

      mamba install plmc

   and update with::

      mamba update plmc

  To create a new environment, run::

      mamba create --name myenvname plmc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plmc:<tag>

   (see `plmc/tags`_ for valid values for ``<tag>``)


.. |downloads_plmc| image:: https://img.shields.io/conda/dn/bioconda/plmc.svg?style=flat
   :target: https://anaconda.org/bioconda/plmc
   :alt:   (downloads)
.. |docker_plmc| image:: https://quay.io/repository/biocontainers/plmc/status
   :target: https://quay.io/repository/biocontainers/plmc
.. _`plmc/tags`: https://quay.io/repository/biocontainers/plmc?tab=tags


.. raw:: html

    <script>
        var package = "plmc";
        var versions = ["20221105","20221105"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plmc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plmc/README.html