:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bacpage'
.. highlight: bash

bacpage
=======

.. conda:recipe:: bacpage
   :replaces_section_title:
   :noindex:

   An easy\-to\-use pipeline for the assembly and analysis of bacterial genomes

   :homepage: https://github.com/CholGen/bacpage
   :license: GPL-3.0-or-later
   :recipe: /`bacpage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bacpage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bacpage/meta.yaml>`_

   


.. conda:package:: bacpage

   |downloads_bacpage| |docker_bacpage|

   :versions:
      
      

      ``2023.11.10.1-0``

      

   
   :depends abricate: 
   :depends bc: 
   :depends bcftools: ``1.17.*``
   :depends bedtools: 
   :depends biopython: 
   :depends bwa: 
   :depends emboss: 
   :depends fastp: 
   :depends fastqc: 
   :depends flash: 
   :depends iqtree: 
   :depends lighter: 
   :depends multiqc: 
   :depends pandas: 
   :depends prokka: 
   :depends python: ``<3.12,>=3.9``
   :depends qualimap: 
   :depends quast: 
   :depends samtools: ``1.17.*``
   :depends snakemake-minimal: 
   :depends snp-sites: 
   :depends unicycler: 
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

      mamba install bacpage

   and update with::

      mamba update bacpage

  To create a new environment, run::

      mamba create --name myenvname bacpage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bacpage:<tag>

   (see `bacpage/tags`_ for valid values for ``<tag>``)


.. |downloads_bacpage| image:: https://img.shields.io/conda/dn/bioconda/bacpage.svg?style=flat
   :target: https://anaconda.org/bioconda/bacpage
   :alt:   (downloads)
.. |docker_bacpage| image:: https://quay.io/repository/biocontainers/bacpage/status
   :target: https://quay.io/repository/biocontainers/bacpage
.. _`bacpage/tags`: https://quay.io/repository/biocontainers/bacpage?tab=tags


.. raw:: html

    <script>
        var package = "bacpage";
        var versions = ["2023.11.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bacpage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bacpage/README.html