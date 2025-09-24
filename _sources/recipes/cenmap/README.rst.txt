:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cenmap'
.. highlight: bash

cenmap
======

.. conda:recipe:: cenmap
   :replaces_section_title:
   :noindex:

   A centromere mapping and annotation pipeline for T2T human and primate genome assemblies implemented in Snakemake.

   :homepage: https://github.com/logsdon-lab/CenMAP
   :documentation: https://github.com/logsdon-lab/CenMAP/blob/v1.0.4/README.md
   
   :license: MIT / MIT
   :recipe: /`cenmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cenmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cenmap/meta.yaml>`_

   


.. conda:package:: cenmap

   |downloads_cenmap| |docker_cenmap|

   :versions:
      
      

      ``1.0.4-1``,  ``1.0.4-0``

      

   
   :depends bedops: 
   :depends bedtools: 
   :depends cenplot: ``>=0.1.4``
   :depends censtats: ``>=0.1.0``
   :depends coreutils: 
   :depends findutils: 
   :depends gawk: 
   :depends gzip: 
   :depends hmmer: 
   :depends intervaltree: 
   :depends kmc: ``>=3.2.4``
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends matplotlib-base: 
   :depends minimap2: ``>=2.29``
   :depends nucflag: ``>=0.3.7``
   :depends numpy: 
   :depends ont-modkit: ``>=0.3.2``
   :depends pbmm2: ``>=1.17.0``
   :depends polars: 
   :depends pyarrow: 
   :depends python: ``>=3.12``
   :depends pyyaml: 
   :depends repeatmasker: ``4.1.7p1``
   :depends rustybam: 
   :depends samtools: ``>=1.13``
   :depends scipy: 
   :depends seaborn: 
   :depends seqkit: 
   :depends seqtk: 
   :depends snakemake: ``>=8.24.0,<9.11.4``
   :depends srf-n-trf: ``>=0.1.1``
   :depends stringdecomposer: 
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

      mamba install cenmap

   and update with::

      mamba update cenmap

  To create a new environment, run::

      mamba create --name myenvname cenmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cenmap:<tag>

   (see `cenmap/tags`_ for valid values for ``<tag>``)


.. |downloads_cenmap| image:: https://img.shields.io/conda/dn/bioconda/cenmap.svg?style=flat
   :target: https://anaconda.org/bioconda/cenmap
   :alt:   (downloads)
.. |docker_cenmap| image:: https://quay.io/repository/biocontainers/cenmap/status
   :target: https://quay.io/repository/biocontainers/cenmap
.. _`cenmap/tags`: https://quay.io/repository/biocontainers/cenmap?tab=tags


.. raw:: html

    <script>
        var package = "cenmap";
        var versions = ["1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cenmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cenmap/README.html