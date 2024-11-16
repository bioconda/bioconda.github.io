:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zamp'
.. highlight: bash

zamp
====

.. conda:recipe:: zamp
   :replaces_section_title:
   :noindex:

   zAMP\: bioinformatic pipeline designed for convenient\, reproducible and scalable amplicon\-based metagenomics

   :homepage: https://github.com/metagenlab/zAMP/
   :license: MIT / MIT
   :recipe: /`zamp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zamp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zamp/meta.yaml>`_

   


.. conda:package:: zamp

   |downloads_zamp| |docker_zamp|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends apptainer: ``>=1.3.2``
   :depends attrmap: ``>=0.0.7``
   :depends biopython: ``>=1.83``
   :depends click: ``>=8.1.3``
   :depends metasnek: ``>=0.0.8``
   :depends pandas: ``>=2.2.1``
   :depends python: ``>=3.11``
   :depends snakemake-minimal: ``>=8.0.0,<=8.24.1``
   :depends snaketool-utils: ``>=0.0.5``
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

      mamba install zamp

   and update with::

      mamba update zamp

  To create a new environment, run::

      mamba create --name myenvname zamp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zamp:<tag>

   (see `zamp/tags`_ for valid values for ``<tag>``)


.. |downloads_zamp| image:: https://img.shields.io/conda/dn/bioconda/zamp.svg?style=flat
   :target: https://anaconda.org/bioconda/zamp
   :alt:   (downloads)
.. |docker_zamp| image:: https://quay.io/repository/biocontainers/zamp/status
   :target: https://quay.io/repository/biocontainers/zamp
.. _`zamp/tags`: https://quay.io/repository/biocontainers/zamp?tab=tags


.. raw:: html

    <script>
        var package = "zamp";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zamp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zamp/README.html