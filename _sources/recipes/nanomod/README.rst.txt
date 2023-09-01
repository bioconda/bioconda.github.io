:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanomod'
.. highlight: bash

nanomod
=======

.. conda:recipe:: nanomod
   :replaces_section_title:
   :noindex:

   A computational method for Nanopore signal analysis and modification detection.

   :homepage: https://github.com/WGLab/NanoMod
   :license: GPL3
   :recipe: /`nanomod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomod/meta.yaml>`_

   


.. conda:package:: nanomod

   |downloads_nanomod| |docker_nanomod|

   :versions:
      
      

      ``0.2.2-0``

      

   
   :depends bwa: 
   :depends h5py: 
   :depends minimap2: 
   :depends numpy: 
   :depends python: ``2.7.*``
   :depends r-base: ``>=3.4``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-scales: 
   :depends rpy2: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install nanomod

   and update with::

      mamba update nanomod

  To create a new environment, run::

      mamba create --name myenvname nanomod

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanomod:<tag>

   (see `nanomod/tags`_ for valid values for ``<tag>``)


.. |downloads_nanomod| image:: https://img.shields.io/conda/dn/bioconda/nanomod.svg?style=flat
   :target: https://anaconda.org/bioconda/nanomod
   :alt:   (downloads)
.. |docker_nanomod| image:: https://quay.io/repository/biocontainers/nanomod/status
   :target: https://quay.io/repository/biocontainers/nanomod
.. _`nanomod/tags`: https://quay.io/repository/biocontainers/nanomod?tab=tags


.. raw:: html

    <script>
        var package = "nanomod";
        var versions = ["0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanomod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanomod/README.html