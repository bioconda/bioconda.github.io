:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'marker-magu'
.. highlight: bash

marker-magu
===========

.. conda:recipe:: marker-magu
   :replaces_section_title:
   :noindex:

   Marker\-MAGu\: Trans\-Kingdom Marker Gene Pipeline for Taxonomic Profiling of Human Metagenomes

   :homepage: https://github.com/cmmr/Marker-MAGu
   :license: MIT
   :recipe: /`marker-magu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marker-magu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marker-magu/meta.yaml>`_

   


.. conda:package:: marker-magu

   |downloads_marker-magu| |docker_marker-magu|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends bwa-mem2: ``>=2.2.1``
   :depends coreutils: 
   :depends coverm: ``>=0.6.1``
   :depends dashing: ``>=1.0``
   :depends fastani: ``>=1.3``
   :depends fastp: ``>=0.23.2``
   :depends minimap2: ``>=2.21``
   :depends python: ``>=3.8``
   :depends r-base: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-stringr: 
   :depends samtools: ``>=1.9``
   :depends seqkit: ``>=2.4.0``
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

      mamba install marker-magu

   and update with::

      mamba update marker-magu

  To create a new environment, run::

      mamba create --name myenvname marker-magu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/marker-magu:<tag>

   (see `marker-magu/tags`_ for valid values for ``<tag>``)


.. |downloads_marker-magu| image:: https://img.shields.io/conda/dn/bioconda/marker-magu.svg?style=flat
   :target: https://anaconda.org/bioconda/marker-magu
   :alt:   (downloads)
.. |docker_marker-magu| image:: https://quay.io/repository/biocontainers/marker-magu/status
   :target: https://quay.io/repository/biocontainers/marker-magu
.. _`marker-magu/tags`: https://quay.io/repository/biocontainers/marker-magu?tab=tags


.. raw:: html

    <script>
        var package = "marker-magu";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/marker-magu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/marker-magu/README.html