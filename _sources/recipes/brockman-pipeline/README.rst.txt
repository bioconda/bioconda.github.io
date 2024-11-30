:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'brockman-pipeline'
.. highlight: bash

brockman-pipeline
=================

.. conda:recipe:: brockman-pipeline
   :replaces_section_title:
   :noindex:

   Brockman Representation Of Chromatin by K\-mers in Mark\-Associated Nucleotides

   :homepage: https://github.com/Carldeboer/Brockman
   :license: GPL-3.0
   :recipe: /`brockman-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brockman-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brockman-pipeline/meta.yaml>`_

   


.. conda:package:: brockman-pipeline

   |downloads_brockman-pipeline| |docker_brockman-pipeline|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends amused: 
   :depends bedtools: 
   :depends bowtie2: 
   :depends bzip2: 
   :depends jemalloc: 
   :depends ncurses: 
   :depends ruby: ``>=2.4``
   :depends ruby-dna-tools: 
   :depends samtools: 
   :depends trimmomatic: 
   :depends ucsc-twobittofa: 
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

      mamba install brockman-pipeline

   and update with::

      mamba update brockman-pipeline

  To create a new environment, run::

      mamba create --name myenvname brockman-pipeline

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/brockman-pipeline:<tag>

   (see `brockman-pipeline/tags`_ for valid values for ``<tag>``)


.. |downloads_brockman-pipeline| image:: https://img.shields.io/conda/dn/bioconda/brockman-pipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/brockman-pipeline
   :alt:   (downloads)
.. |docker_brockman-pipeline| image:: https://quay.io/repository/biocontainers/brockman-pipeline/status
   :target: https://quay.io/repository/biocontainers/brockman-pipeline
.. _`brockman-pipeline/tags`: https://quay.io/repository/biocontainers/brockman-pipeline?tab=tags


.. raw:: html

    <script>
        var package = "brockman-pipeline";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/brockman-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/brockman-pipeline/README.html