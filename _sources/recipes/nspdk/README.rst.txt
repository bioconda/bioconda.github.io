:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nspdk'
.. highlight: bash

nspdk
=====

.. conda:recipe:: nspdk
   :replaces_section_title:
   :noindex:

   Neighborhood Subgraph Pairwise Distance Kernel \(NSPDK\).

   :homepage: http://dtai.cs.kuleuven.be/ml/systems/nspdk
   :license: GNUv3
   :recipe: /`nspdk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nspdk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nspdk/meta.yaml>`_

   


.. conda:package:: nspdk

   |downloads_nspdk| |docker_nspdk|

   :versions:
      
      

      ``9.2-0``

      

   
   :depends libgcc: 
   :depends zlib: 
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

      mamba install nspdk

   and update with::

      mamba update nspdk

  To create a new environment, run::

      mamba create --name myenvname nspdk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nspdk:<tag>

   (see `nspdk/tags`_ for valid values for ``<tag>``)


.. |downloads_nspdk| image:: https://img.shields.io/conda/dn/bioconda/nspdk.svg?style=flat
   :target: https://anaconda.org/bioconda/nspdk
   :alt:   (downloads)
.. |docker_nspdk| image:: https://quay.io/repository/biocontainers/nspdk/status
   :target: https://quay.io/repository/biocontainers/nspdk
.. _`nspdk/tags`: https://quay.io/repository/biocontainers/nspdk?tab=tags


.. raw:: html

    <script>
        var package = "nspdk";
        var versions = ["9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nspdk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nspdk/README.html