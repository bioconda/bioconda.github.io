:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srnapipe'
.. highlight: bash

srnapipe
========

.. conda:recipe:: srnapipe
   :replaces_section_title:
   :noindex:

   Pipeline for bioinformatic in\-depth exploration of small RNA\-seq data

   :homepage: https://github.com/GReD-Clermont/sRNAPipe-cli
   :license: Academic Free License v3.0
   :recipe: /`srnapipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnapipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnapipe/meta.yaml>`_

   


.. conda:package:: srnapipe

   |downloads_srnapipe| |docker_srnapipe|

   :versions:
      
      

      ``1.2-0``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1-3``,  ``1.1-0``

      

   
   :depends bedtools: ``>=2.24.0``
   :depends bioconductor-sushi: 
   :depends bwa: ``>=0.7.12``
   :depends fonts-conda-ecosystem: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-copy-recursive: 
   :depends perl-getopt-long: 
   :depends perl-math-cdf: 
   :depends perl-parallel-forkmanager: 
   :depends perl-statistics-r: 
   :depends perl-string-random: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-plotrix: 
   :depends r-rcolorbrewer: 
   :depends samtools: ``>=1.5``
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

      mamba install srnapipe

   and update with::

      mamba update srnapipe

  To create a new environment, run::

      mamba create --name myenvname srnapipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/srnapipe:<tag>

   (see `srnapipe/tags`_ for valid values for ``<tag>``)


.. |downloads_srnapipe| image:: https://img.shields.io/conda/dn/bioconda/srnapipe.svg?style=flat
   :target: https://anaconda.org/bioconda/srnapipe
   :alt:   (downloads)
.. |docker_srnapipe| image:: https://quay.io/repository/biocontainers/srnapipe/status
   :target: https://quay.io/repository/biocontainers/srnapipe
.. _`srnapipe/tags`: https://quay.io/repository/biocontainers/srnapipe?tab=tags


.. raw:: html

    <script>
        var package = "srnapipe";
        var versions = ["1.2","1.1.1","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srnapipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srnapipe/README.html