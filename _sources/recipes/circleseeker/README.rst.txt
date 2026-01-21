:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circleseeker'
.. highlight: bash

circleseeker
============

.. conda:recipe:: circleseeker
   :replaces_section_title:
   :noindex:

   Comprehensive eccDNA detection from PacBio HiFi sequencing data with dual\-engine support

   :homepage: https://github.com/leoxqy/CircleSeeker
   :documentation: https://github.com/leoxqy/CircleSeeker#readme
   
   :license: GPL / GPL-3.0-only
   :recipe: /`circleseeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circleseeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circleseeker/meta.yaml>`_

   CircleSeeker is a specialized bioinformatics pipeline designed for the
   identification\, classification\, and characterization of extrachromosomal
   circular DNA \(eccDNA\) from PacBio HiFi long\-read sequencing data.

   Key features\:
   \- Dual\-engine support\: Cresil \(preferred\) and Cyrcular \(fallback\) with intelligent auto\-selection
   \- Hybrid detection strategy combining tandem repeat detection with Split\-Read assembly
   \- Comprehensive eccDNA classification \(UeccDNA\, MeccDNA\, CeccDNA\, XeccDNA\)
   \- Automated pipeline with checkpoint and resumption capabilities
   \- Detailed HTML reports and comprehensive output formats
   \- Modular architecture with 16 processing steps



.. conda:package:: circleseeker

   |downloads_circleseeker| |docker_circleseeker|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bcftools: 
   :depends biopython: ``>=1.81``
   :depends cd-hit: 
   :depends click: ``>=8.1``
   :depends cyrcular: 
   :depends intervaltree: ``>=3.1``
   :depends last: 
   :depends minimap2: 
   :depends networkx: ``>=3.0``
   :depends numpy: ``>=1.23``
   :depends packaging: ``>=23``
   :depends pandas: ``>=2.0``
   :depends pysam: ``>=0.22``
   :depends python: ``>=3.9``
   :depends pyyaml: ``>=6.0``
   :depends samtools: 
   :depends tidehunter: 
   :depends varlociraptor: 
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

      mamba install circleseeker

   and update with::

      mamba update circleseeker

  To create a new environment, run::

      mamba create --name myenvname circleseeker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/circleseeker:<tag>

   (see `circleseeker/tags`_ for valid values for ``<tag>``)


.. |downloads_circleseeker| image:: https://img.shields.io/conda/dn/bioconda/circleseeker.svg?style=flat
   :target: https://anaconda.org/bioconda/circleseeker
   :alt:   (downloads)
.. |docker_circleseeker| image:: https://quay.io/repository/biocontainers/circleseeker/status
   :target: https://quay.io/repository/biocontainers/circleseeker
.. _`circleseeker/tags`: https://quay.io/repository/biocontainers/circleseeker?tab=tags


.. raw:: html

    <script>
        var package = "circleseeker";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circleseeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circleseeker/README.html