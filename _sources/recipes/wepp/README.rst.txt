:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wepp'
.. highlight: bash

wepp
====

.. conda:recipe:: wepp
   :replaces_section_title:
   :noindex:

   Wastewater\-Based Epidemiology using Phylogenetic Placements

   :homepage: https://github.com/TurakhiaLab/WEPP
   :documentation: https://turakhia.ucsd.edu/WEPP
   
   :license: MIT / MIT
   :recipe: /`wepp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wepp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wepp/meta.yaml>`_

   WEPP \(Wastewater\-Based Epidemiology using Phylogenetic Placements\) is a pathogen\-agnostic pipeline that enhances wastewater surveillance by leveraging the pathogen\'s full phylogeny. It reports haplotype and lineage abundances\, maps reads parsimoniously to selected haplotypes\, and flags Unaccounted Alleles — those observed in the sample but unexplained by selected haplotypes\, potentially indicating novel variants.
   WEPP performs parsimonious read placement on the mutation\-annotated tree \(MAT\) to select a subset of haplotypes and adds their neighbors to form an initial candidate pool\, which is passed to a deconvolution algorithm to estimate their relative abundances. An interactive dashboard enables visualization of haplotypes in the global phylogenetic tree and read\-level analysis.


.. conda:package:: wepp

   |downloads_wepp| |docker_wepp|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4.1-0``

      

   
   :depends aiohttp: 
   :depends altair: 
   :depends biopython: 
   :depends boost: ``1.78.0.*``
   :depends conda: 
   :depends jsoncpp: ``>=1.9.6,<1.9.7.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends mpich: ``>=4.3.1,<5.0a0``
   :depends nodejs: ``>=20.12.2,<21.0a0``
   :depends pandas: 
   :depends pip: 
   :depends protobuf: ``<4``
   :depends snakemake-minimal: ``>=7.0``
   :depends tbb: ``>=2020.2,<2021.0.0a0``
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

      mamba install wepp

   and update with::

      mamba update wepp

  To create a new environment, run::

      mamba create --name myenvname wepp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wepp:<tag>

   (see `wepp/tags`_ for valid values for ``<tag>``)


.. |downloads_wepp| image:: https://img.shields.io/conda/dn/bioconda/wepp.svg?style=flat
   :target: https://anaconda.org/bioconda/wepp
   :alt:   (downloads)
.. |docker_wepp| image:: https://quay.io/repository/biocontainers/wepp/status
   :target: https://quay.io/repository/biocontainers/wepp
.. _`wepp/tags`: https://quay.io/repository/biocontainers/wepp?tab=tags


.. raw:: html

    <script>
        var package = "wepp";
        var versions = ["0.1.5","0.1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wepp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wepp/README.html