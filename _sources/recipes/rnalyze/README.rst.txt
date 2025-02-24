:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnalyze'
.. highlight: bash

rnalyze
=======

.. conda:recipe:: rnalyze
   :replaces_section_title:
   :noindex:

   A comprehensive pipeline for RNA\-Seq data analysis.

   :homepage: https://github.com/MohamedElsisii/rnalyze
   :documentation: https://github.com/MohamedElsisii/rnalyze#readme
   
   :license: MIT
   :recipe: /`rnalyze <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnalyze>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnalyze/meta.yaml>`_

   rnalyze is a Bash\-based pipeline for analyzing RNA\-Seq data. It supports both single\-end and paired\-end data\,
   includes quality control\, trimming\, alignment\, and feature counting\, and is highly customizable.



.. conda:package:: rnalyze

   |downloads_rnalyze| |docker_rnalyze|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bowtie2: 
   :depends bwa: 
   :depends fastqc: 
   :depends hisat2: 
   :depends multiqc: 
   :depends samtools: 
   :depends sra-tools: 
   :depends subread: 
   :depends trimmomatic: 
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

      mamba install rnalyze

   and update with::

      mamba update rnalyze

  To create a new environment, run::

      mamba create --name myenvname rnalyze

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnalyze:<tag>

   (see `rnalyze/tags`_ for valid values for ``<tag>``)


.. |downloads_rnalyze| image:: https://img.shields.io/conda/dn/bioconda/rnalyze.svg?style=flat
   :target: https://anaconda.org/bioconda/rnalyze
   :alt:   (downloads)
.. |docker_rnalyze| image:: https://quay.io/repository/biocontainers/rnalyze/status
   :target: https://quay.io/repository/biocontainers/rnalyze
.. _`rnalyze/tags`: https://quay.io/repository/biocontainers/rnalyze?tab=tags


.. raw:: html

    <script>
        var package = "rnalyze";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnalyze/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnalyze/README.html