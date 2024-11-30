:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aquamis'
.. highlight: bash

aquamis
=======

.. conda:recipe:: aquamis
   :replaces_section_title:
   :noindex:

   AQUAMIS is a snakemake pipeline for routine assembly and quality assessment of microbial isolate sequencing experiments.

   :homepage: https://gitlab.com/bfr_bioinformatics/AQUAMIS
   :license: BSD-3
   :recipe: /`aquamis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquamis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquamis/meta.yaml>`_

   


.. conda:package:: aquamis

   |downloads_aquamis| |docker_aquamis|

   :versions:
      
      

      ``1.4.0-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.0-0``

      

   
   :depends bbmap: ``>=39``
   :depends biopython: ``>=1.79``
   :depends blast: ``>=2.14``
   :depends bracken: ``>=2.8``
   :depends bwa: ``>=0.7.17``
   :depends cerberus: ``>=1.3.4``
   :depends circos: ``>=0.69.9``
   :depends confindr: ``0.7.4.*``
   :depends entrez-direct: ``>=16.2``
   :depends fastp: ``>=0.23.2``
   :depends genson: ``>=1.2.2``
   :depends jsonschema: ``>=4.17``
   :depends kma: ``>=1.2``
   :depends kmc: ``>=3.2.1``
   :depends kraken2: ``>=2.1.3``
   :depends mash: ``>=2.3``
   :depends minimap2: ``>=2.26``
   :depends mlst: ``>=2.23``
   :depends numpy: ``>=1.21``
   :depends pandas: ``>=1.3.5``
   :depends pandoc: ``>=2.19``
   :depends perl-bio-tools-run-alignment-tcoffee: ``1.7.4 pl5321hdfd78af_4``
   :depends pilon: ``>=1.24``
   :depends python: ``3.7.*``
   :depends pyyaml: ``>=6``
   :depends quast: ``>=5.2.0``
   :depends r-base: ``4.0.*``
   :depends r-dt: ``>=0.25``
   :depends r-knitr: ``>=1.40``
   :depends r-rmarkdown: ``>=2.16``
   :depends r-rrapply: ``>=1.2.5``
   :depends r-tidyverse: ``>=1.3.2``
   :depends r-urltools: ``>=1.7.3``
   :depends samtools: ``>=1.12``
   :depends seqtk: ``>=1.4``
   :depends shovill: ``>=1.1.0``
   :depends snakemake-minimal: ``7.*``
   :depends spades: ``>=3.15``
   :depends taxonkit: ``>=0.15``
   :depends trimmomatic: ``>=0.39``
   :depends tzdata: 
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

      mamba install aquamis

   and update with::

      mamba update aquamis

  To create a new environment, run::

      mamba create --name myenvname aquamis

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/aquamis:<tag>

   (see `aquamis/tags`_ for valid values for ``<tag>``)


.. |downloads_aquamis| image:: https://img.shields.io/conda/dn/bioconda/aquamis.svg?style=flat
   :target: https://anaconda.org/bioconda/aquamis
   :alt:   (downloads)
.. |docker_aquamis| image:: https://quay.io/repository/biocontainers/aquamis/status
   :target: https://quay.io/repository/biocontainers/aquamis
.. _`aquamis/tags`: https://quay.io/repository/biocontainers/aquamis?tab=tags


.. raw:: html

    <script>
        var package = "aquamis";
        var versions = ["1.4.0","1.3.7","1.3.6","1.3.5","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aquamis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aquamis/README.html