:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amalgkit'
.. highlight: bash

amalgkit
========

.. conda:recipe:: amalgkit
   :replaces_section_title:
   :noindex:

   Tools for transcriptome amalgamation

   :homepage: https://github.com/kfuku52/amalgkit
   :license: BSD-3-Clause
   :recipe: /`amalgkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amalgkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amalgkit/meta.yaml>`_

   


.. conda:package:: amalgkit

   |downloads_amalgkit| |docker_amalgkit|

   :versions:
      
      

      ``0.12.18-0``,  ``0.12.17-0``,  ``0.12.16-0``,  ``0.12.15-0``

      

   
   :depends bioconductor-edger: 
   :depends bioconductor-pcamethods: 
   :depends bioconductor-ruvseq: 
   :depends bioconductor-sva: 
   :depends biopython: 
   :depends fastp: 
   :depends kallisto: 
   :depends lxml: 
   :depends numpy: 
   :depends pandas: 
   :depends parallel-fastq-dump: 
   :depends python: ``>=3.9``
   :depends r-amap: 
   :depends r-base: 
   :depends r-colorspace: 
   :depends r-dendextend: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-nmf: 
   :depends r-patchwork: 
   :depends r-pvclust: 
   :depends r-rcolorbrewer: 
   :depends r-rtsne: 
   :depends seqkit: 
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

      mamba install amalgkit

   and update with::

      mamba update amalgkit

  To create a new environment, run::

      mamba create --name myenvname amalgkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amalgkit:<tag>

   (see `amalgkit/tags`_ for valid values for ``<tag>``)


.. |downloads_amalgkit| image:: https://img.shields.io/conda/dn/bioconda/amalgkit.svg?style=flat
   :target: https://anaconda.org/bioconda/amalgkit
   :alt:   (downloads)
.. |docker_amalgkit| image:: https://quay.io/repository/biocontainers/amalgkit/status
   :target: https://quay.io/repository/biocontainers/amalgkit
.. _`amalgkit/tags`: https://quay.io/repository/biocontainers/amalgkit?tab=tags


.. raw:: html

    <script>
        var package = "amalgkit";
        var versions = ["0.12.18","0.12.17","0.12.16","0.12.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amalgkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amalgkit/README.html