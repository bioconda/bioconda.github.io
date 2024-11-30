:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngsep'
.. highlight: bash

ngsep
=====

.. conda:recipe:: ngsep
   :replaces_section_title:
   :noindex:

   NGSEP \- Next Generation Sequencing Experience Platform

   :homepage: https://github.com/NGSEP/NGSEPcore
   :license: GPL / GPL-3
   :recipe: /`ngsep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsep/meta.yaml>`_
   :links: biotools: :biotools:`ngsep`, doi: :doi:`10.1093/bioinformatics/btz275`

   NGSEP provides an object model to enable different kinds of
   analysis of DNA high throughput sequencing \(HTS\) data. The classic
   use of NGSEP is a reference guided construction and downstream analysis of
   large datasets of genomic variation. NGSEP performs accurate detection and
   genotyping of Single Nucleotide Variants \(SNVs\)\, small and large indels\, short
   tandem repeats \(STRs\)\, inversions\, and Copy Number Variants \(CNVs\). NGSEP also
   provides utilities for downstream analysis of variation in VCF files\, including
   functional annotation of variants\, filtering\, format conversion\, comparison\,
   clustering\, imputation\, introgression analysis and different kinds of
   statistics.



.. conda:package:: ngsep

   |downloads_ngsep| |docker_ngsep|

   :versions:
      
      

      ``4.0.1-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
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

      mamba install ngsep

   and update with::

      mamba update ngsep

  To create a new environment, run::

      mamba create --name myenvname ngsep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngsep:<tag>

   (see `ngsep/tags`_ for valid values for ``<tag>``)


.. |downloads_ngsep| image:: https://img.shields.io/conda/dn/bioconda/ngsep.svg?style=flat
   :target: https://anaconda.org/bioconda/ngsep
   :alt:   (downloads)
.. |docker_ngsep| image:: https://quay.io/repository/biocontainers/ngsep/status
   :target: https://quay.io/repository/biocontainers/ngsep
.. _`ngsep/tags`: https://quay.io/repository/biocontainers/ngsep?tab=tags


.. raw:: html

    <script>
        var package = "ngsep";
        var versions = ["4.0.1"];
    </script>





Notes
-----
Version 4 includes new modules for read alignment and de\-novo
analysis of short and long reads including calculations of k\-mers\, error
correction\, de\-novo analysis of Genotype\-by\-sequencing data and \(coming soon\)
de\-novo assembly of long read whole genome sequencing \(WGS\) data.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsep/README.html