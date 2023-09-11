:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'harpy'
.. highlight: bash

harpy
=====

.. conda:recipe:: harpy
   :replaces_section_title:
   :noindex:

   Process raw haplotagging data\, from raw sequences to phased haplotypes.

   :homepage: https://github.com/pdimens/harpy/
   :documentation: https://pdimens.github.io/harpy/
   
   :developer docs: https://github.com/pdimens/harpy
   :license: MIT
   :recipe: /`harpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harpy/meta.yaml>`_

   


.. conda:package:: harpy

   |downloads_harpy| |docker_harpy|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends bcftools: 
   :depends bioconductor-complexheatmap: 
   :depends bwa: 
   :depends datamash: 
   :depends fastp: 
   :depends hapcut2: 
   :depends leviathan: 
   :depends libzlib: 
   :depends llvm-openmp: 
   :depends multiqc: 
   :depends naibr-plus: 
   :depends python: ``>=3.7``
   :depends r-base: ``>=4``
   :depends r-circlize: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-plotly: 
   :depends r-rmarkdown: 
   :depends r-stitch: 
   :depends r-tidyr: 
   :depends r-viridislite: 
   :depends rich-click: 
   :depends sambamba: 
   :depends samtools: 
   :depends seqfu: 
   :depends snakemake: ``>=7``
   :depends tabix: 
   :depends zlib: 
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

      mamba install harpy

   and update with::

      mamba update harpy

  To create a new environment, run::

      mamba create --name myenvname harpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/harpy:<tag>

   (see `harpy/tags`_ for valid values for ``<tag>``)


.. |downloads_harpy| image:: https://img.shields.io/conda/dn/bioconda/harpy.svg?style=flat
   :target: https://anaconda.org/bioconda/harpy
   :alt:   (downloads)
.. |docker_harpy| image:: https://quay.io/repository/biocontainers/harpy/status
   :target: https://quay.io/repository/biocontainers/harpy
.. _`harpy/tags`: https://quay.io/repository/biocontainers/harpy?tab=tags


.. raw:: html

    <script>
        var package = "harpy";
        var versions = ["0.3.0","0.2.0","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/harpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/harpy/README.html