:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pneumocat'
.. highlight: bash

pneumocat
=========

.. conda:recipe:: pneumocat
   :replaces_section_title:
   :noindex:

   PneumoCaT \(Pneumococcal Capsular Typing\) uses a two\-step step approach to assign capsular type to S.pneumoniae genomic data \(Illumina\)

   :homepage: https://github.com/phe-bioinformatics/pneumocat
   :license: GPL / GPL-3.0
   :recipe: /`pneumocat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pneumocat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pneumocat/meta.yaml>`_

   


.. conda:package:: pneumocat

   |downloads_pneumocat| |docker_pneumocat|

   :versions:
      
      

      ``1.2.1-1``,  ``1.2.1-0``,  ``1.2-3``,  ``1.2-2``,  ``1.2-0``,  ``1.1-0``

      

   
   :depends biopython: 
   :depends bowtie2: 
   :depends lxml: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``<3``
   :depends pyyaml: 
   :depends samtools: ``>1.3``
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

      mamba install pneumocat

   and update with::

      mamba update pneumocat

  To create a new environment, run::

      mamba create --name myenvname pneumocat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pneumocat:<tag>

   (see `pneumocat/tags`_ for valid values for ``<tag>``)


.. |downloads_pneumocat| image:: https://img.shields.io/conda/dn/bioconda/pneumocat.svg?style=flat
   :target: https://anaconda.org/bioconda/pneumocat
   :alt:   (downloads)
.. |docker_pneumocat| image:: https://quay.io/repository/biocontainers/pneumocat/status
   :target: https://quay.io/repository/biocontainers/pneumocat
.. _`pneumocat/tags`: https://quay.io/repository/biocontainers/pneumocat?tab=tags


.. raw:: html

    <script>
        var package = "pneumocat";
        var versions = ["1.2.1","1.2.1","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pneumocat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pneumocat/README.html