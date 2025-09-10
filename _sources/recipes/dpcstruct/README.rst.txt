:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dpcstruct'
.. highlight: bash

dpcstruct
=========

.. conda:recipe:: dpcstruct
   :replaces_section_title:
   :noindex:

   Unsupervised clustering algorithm for identifying and classifying protein domains based on structural similarity.

   :homepage: https://github.com/RitAreaSciencePark/DPCstruct
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`dpcstruct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dpcstruct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dpcstruct/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.08.21.608992`, biotools: :biotools:`dpcstruct`

   


.. conda:package:: dpcstruct

   |downloads_dpcstruct| |docker_dpcstruct|

   :versions:
      
      

      ``0.1.1-0``

      

   
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

      mamba install dpcstruct

   and update with::

      mamba update dpcstruct

  To create a new environment, run::

      mamba create --name myenvname dpcstruct

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dpcstruct:<tag>

   (see `dpcstruct/tags`_ for valid values for ``<tag>``)


.. |downloads_dpcstruct| image:: https://img.shields.io/conda/dn/bioconda/dpcstruct.svg?style=flat
   :target: https://anaconda.org/bioconda/dpcstruct
   :alt:   (downloads)
.. |docker_dpcstruct| image:: https://quay.io/repository/biocontainers/dpcstruct/status
   :target: https://quay.io/repository/biocontainers/dpcstruct
.. _`dpcstruct/tags`: https://quay.io/repository/biocontainers/dpcstruct?tab=tags


.. raw:: html

    <script>
        var package = "dpcstruct";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dpcstruct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dpcstruct/README.html