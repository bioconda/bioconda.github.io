:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanopore_simulation'
.. highlight: bash

nanopore_simulation
===================

.. conda:recipe:: nanopore_simulation
   :replaces_section_title:
   :noindex:

   Nanopore SimulatION is a tool for simulating an Oxfornd Nanopore Technologies MinION device for bioinformatic development.

   :homepage: https://github.com/crohrandt/nanopore_simulation
   :license: MPL-2.0
   :recipe: /`nanopore_simulation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopore_simulation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopore_simulation/meta.yaml>`_

   


.. conda:package:: nanopore_simulation

   |downloads_nanopore_simulation| |docker_nanopore_simulation|

   :versions:
      
      

      ``0.3-2``,  ``0.3-1``,  ``0.3-0``

      

   
   :depends biopython: 
   :depends h5py: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends scipy: 
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

      mamba install nanopore_simulation

   and update with::

      mamba update nanopore_simulation

  To create a new environment, run::

      mamba create --name myenvname nanopore_simulation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nanopore_simulation:<tag>

   (see `nanopore_simulation/tags`_ for valid values for ``<tag>``)


.. |downloads_nanopore_simulation| image:: https://img.shields.io/conda/dn/bioconda/nanopore_simulation.svg?style=flat
   :target: https://anaconda.org/bioconda/nanopore_simulation
   :alt:   (downloads)
.. |docker_nanopore_simulation| image:: https://quay.io/repository/biocontainers/nanopore_simulation/status
   :target: https://quay.io/repository/biocontainers/nanopore_simulation
.. _`nanopore_simulation/tags`: https://quay.io/repository/biocontainers/nanopore_simulation?tab=tags


.. raw:: html

    <script>
        var package = "nanopore_simulation";
        var versions = ["0.3","0.3","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanopore_simulation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanopore_simulation/README.html