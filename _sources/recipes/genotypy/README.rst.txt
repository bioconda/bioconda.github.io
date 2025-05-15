:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genotypy'
.. highlight: bash

genotypy
========

.. conda:recipe:: genotypy
   :replaces_section_title:
   :noindex:

   Automatically detect genomic barcodes integrated into loci of interest from sequencing data

   :homepage: https://gitbio.ens-lyon.fr/LBMC/yvertlab/vortex/plasticity_mutation/colony_rnaseq_bioinformatics/genotypy
   :license: CeCiLL 2.1
   :recipe: /`genotypy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genotypy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genotypy/meta.yaml>`_

   


.. conda:package:: genotypy

   |downloads_genotypy| |docker_genotypy|

   :versions:
      
      

      ``0.3.4-0``,  ``0.3.3-0``

      

   
   :depends bowtie2: ``>=2.5.4``
   :depends levenshtein: ``>=0.26``
   :depends pysam: ``>=0.22``
   :depends python: ``>=3.10,<3.12``
   :depends samtools: ``>=1.21``
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

      mamba install genotypy

   and update with::

      mamba update genotypy

  To create a new environment, run::

      mamba create --name myenvname genotypy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genotypy:<tag>

   (see `genotypy/tags`_ for valid values for ``<tag>``)


.. |downloads_genotypy| image:: https://img.shields.io/conda/dn/bioconda/genotypy.svg?style=flat
   :target: https://anaconda.org/bioconda/genotypy
   :alt:   (downloads)
.. |docker_genotypy| image:: https://quay.io/repository/biocontainers/genotypy/status
   :target: https://quay.io/repository/biocontainers/genotypy
.. _`genotypy/tags`: https://quay.io/repository/biocontainers/genotypy?tab=tags


.. raw:: html

    <script>
        var package = "genotypy";
        var versions = ["0.3.4","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genotypy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genotypy/README.html