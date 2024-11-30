:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirtrace'
.. highlight: bash

mirtrace
========

.. conda:recipe:: mirtrace
   :replaces_section_title:
   :noindex:

   miRTrace is a new quality control and taxonomic tracing tool developed specifically for small RNA sequencing data \(sRNA\-Seq\). 
   Each sample is characterized by profiling sequencing quality\, read length\, sequencing depth and miRNA complexity and also the 
   amounts of miRNAs versus undesirable sequences \(derived from tRNAs\, rRNAs and sequencing artifacts\). In addition to these routine 
   quality control \(QC\) analyses\, miRTrace can accurately and sensitively resolve taxonomic origins of small RNA\-Seq data based on the 
   composition of clade\-specific miRNAs. This feature can be used to detect cross\-clade contaminations in typical lab settings. It can 
   also be applied for more specific applications in forensics\, food quality control and clinical diagnosis\, for instance tracing the 
   origins of meat products or detecting parasitic microRNAs in host serum.


   :homepage: https://github.com/friedlanderlab/mirtrace
   :license: GPL-2.0
   :recipe: /`mirtrace <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirtrace>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirtrace/meta.yaml>`_
   :links: biotools: :biotools:`mirtrace`, doi: :doi:`10.1186/s13059-018-1588-9`

   


.. conda:package:: mirtrace

   |downloads_mirtrace| |docker_mirtrace|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends openjdk: ``>=8.0.144``
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

      mamba install mirtrace

   and update with::

      mamba update mirtrace

  To create a new environment, run::

      mamba create --name myenvname mirtrace

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mirtrace:<tag>

   (see `mirtrace/tags`_ for valid values for ``<tag>``)


.. |downloads_mirtrace| image:: https://img.shields.io/conda/dn/bioconda/mirtrace.svg?style=flat
   :target: https://anaconda.org/bioconda/mirtrace
   :alt:   (downloads)
.. |docker_mirtrace| image:: https://quay.io/repository/biocontainers/mirtrace/status
   :target: https://quay.io/repository/biocontainers/mirtrace
.. _`mirtrace/tags`: https://quay.io/repository/biocontainers/mirtrace?tab=tags


.. raw:: html

    <script>
        var package = "mirtrace";
        var versions = ["1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirtrace/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirtrace/README.html