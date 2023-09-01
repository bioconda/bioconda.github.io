:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tritimap'
.. highlight: bash

tritimap
========

.. conda:recipe:: tritimap
   :replaces_section_title:
   :noindex:

   Triti\-Map is a Snakemake\-based pipeline for gene mapping in Triticeae.

   :homepage: https://github.com/fei0810/Triti-Map
   :documentation: https://github.com/fei0810/Triti-Map/wiki
   
   :license: MIT
   :recipe: /`tritimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tritimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tritimap/meta.yaml>`_

   Triti\-Map is a Snakemake\-based pipeline for gene mapping in Triticeae\, which contains a suite of user\-friendly computational packages and web\-interface integrating multi\-omics data from Triticeae species including genomic\, epigenomic\, evolutionary and homologous information.

   Triti\-Map could efficiently explore trait\-related genes or functional elements not present in the reference genome and reduce the time and labor required for gene mapping in large genome species.



.. conda:package:: tritimap

   |downloads_tritimap| |docker_tritimap|

   :versions:
      
      

      ``0.9.7-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``

      

   
   :depends abyss: ``2.0.2.*``
   :depends bedops: ``2.4.39.*``
   :depends bioawk: 
   :depends biopython: 
   :depends blast: ``>=2.5.0``
   :depends bwa: ``0.7.17.*``
   :depends bwa-mem2: ``2.2.1.*``
   :depends click: ``>=7``
   :depends fastp: ``>=0.20.1``
   :depends gatk4: ``>=4.2.0``
   :depends hmmer: ``3.3.2.*``
   :depends minimap2: ``>=2.17``
   :depends python: ``3.9.2.*``
   :depends r-base: ``4.0.2.*``
   :depends r-jsonlite: ``1.7.2.*``
   :depends r-qtlseqr: ``0.7.5.2.*``
   :depends samtools: ``1.12.*``
   :depends seqkit: ``>=0.15.0``
   :depends snakemake: ``>=6.0.3``
   :depends spades: ``3.15.0.*``
   :depends star: ``2.7.6a.*``
   :depends xmltramp2: ``3.1.1.*``
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

      mamba install tritimap

   and update with::

      mamba update tritimap

  To create a new environment, run::

      mamba create --name myenvname tritimap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tritimap:<tag>

   (see `tritimap/tags`_ for valid values for ``<tag>``)


.. |downloads_tritimap| image:: https://img.shields.io/conda/dn/bioconda/tritimap.svg?style=flat
   :target: https://anaconda.org/bioconda/tritimap
   :alt:   (downloads)
.. |docker_tritimap| image:: https://quay.io/repository/biocontainers/tritimap/status
   :target: https://quay.io/repository/biocontainers/tritimap
.. _`tritimap/tags`: https://quay.io/repository/biocontainers/tritimap?tab=tags


.. raw:: html

    <script>
        var package = "tritimap";
        var versions = ["0.9.7","0.9.6","0.9.5","0.9.4","0.9.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tritimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tritimap/README.html