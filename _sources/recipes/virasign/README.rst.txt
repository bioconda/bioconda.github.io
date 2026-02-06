:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virasign'
.. highlight: bash

virasign
========

.. conda:recipe:: virasign
   :replaces_section_title:
   :noindex:

   Virasign is a viral taxonomic classification tool designed for nanopore sequencing data.

   :homepage: https://github.com/DaanJansen94/virasign
   :documentation: https://github.com/DaanJansen94/virasign/blob/main/README.md
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`virasign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virasign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virasign/meta.yaml>`_

   Virasign \(Viral Read ASSIGNment\) is a viral taxonomic classification and reference selection tool for nanopore data. 
   It maps long\-read sequencing data \(via minimap2\) against viral databases \(RVDB\, RefSeq\, or custom accessions\) and performs 
   taxonomic classification to identify viral species. Virasign generates comprehensive interactive HTML reports with filterable 
   tables\, charts and heatmaps. For each identified virus\, Virasign also provides the closest reference sequence\, mapped reads in 
   FASTQ format\, and BAM files which can be used to easily generate a consensus genome and visualize data \(e.g.\, IGV\). Virasign 
   includes options to blind yourself from certain incidental findings \(such as HIV\, Hepatitis viruses\, HTLV\, EBV\, CMV\, HPV\) when 
   wanted\, ensuring these findings do not appear in any output files\, in line with consent guidelines and ethical research practices.



.. conda:package:: virasign

   |downloads_virasign| |docker_virasign|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends curl: 
   :depends gzip: 
   :depends minimap2: ``2.24.*``
   :depends mmseqs2: 
   :depends python: ``>=3.7,<3.14``
   :depends samtools: ``>=1.17``
   :depends seqtk: ``1.3.*``
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

      mamba install virasign

   and update with::

      mamba update virasign

  To create a new environment, run::

      mamba create --name myenvname virasign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/virasign:<tag>

   (see `virasign/tags`_ for valid values for ``<tag>``)


.. |downloads_virasign| image:: https://img.shields.io/conda/dn/bioconda/virasign.svg?style=flat
   :target: https://anaconda.org/bioconda/virasign
   :alt:   (downloads)
.. |docker_virasign| image:: https://quay.io/repository/biocontainers/virasign/status
   :target: https://quay.io/repository/biocontainers/virasign
.. _`virasign/tags`: https://quay.io/repository/biocontainers/virasign?tab=tags


.. raw:: html

    <script>
        var package = "virasign";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virasign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virasign/README.html