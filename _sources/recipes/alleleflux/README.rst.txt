:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alleleflux'
.. highlight: bash

alleleflux
==========

.. conda:recipe:: alleleflux
   :replaces_section_title:
   :noindex:

   A tool for fine\-grained evolutionary analysis of microbial populations and communities

   :homepage: https://github.com/MoellerLabPU/AlleleFlux
   :documentation: https://alleleflux.readthedocs.io/en/latest/?badge=latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`alleleflux <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alleleflux>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alleleflux/meta.yaml>`_

   AlleleFlux is a python package for analyzing allele frequencies trajectories
   in metagenomic data. It profiles MAG \(Metagenome\-Assembled Genome\) populations 
   across samples\, detecting parallel evolution through allele frequency changes.



.. conda:package:: alleleflux

   |downloads_alleleflux| |docker_alleleflux|

   :versions:
      
      

      ``0.1.14-0``,  ``0.1.4-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends intervaltree: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3.9``
   :depends pyyaml: 
   :depends questionary: 
   :depends r-base: 
   :depends r-tidyr: 
   :depends rpy2: 
   :depends scipy: 
   :depends seaborn: 
   :depends snakemake-executor-plugin-cluster-generic: 
   :depends snakemake-minimal: ``>=8.0.0``
   :depends statsmodels: 
   :depends tqdm: 
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

      mamba install alleleflux

   and update with::

      mamba update alleleflux

  To create a new environment, run::

      mamba create --name myenvname alleleflux

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/alleleflux:<tag>

   (see `alleleflux/tags`_ for valid values for ``<tag>``)


.. |downloads_alleleflux| image:: https://img.shields.io/conda/dn/bioconda/alleleflux.svg?style=flat
   :target: https://anaconda.org/bioconda/alleleflux
   :alt:   (downloads)
.. |docker_alleleflux| image:: https://quay.io/repository/biocontainers/alleleflux/status
   :target: https://quay.io/repository/biocontainers/alleleflux
.. _`alleleflux/tags`: https://quay.io/repository/biocontainers/alleleflux?tab=tags


.. raw:: html

    <script>
        var package = "alleleflux";
        var versions = ["0.1.14","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alleleflux/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alleleflux/README.html