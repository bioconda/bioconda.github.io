:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panpasco'
.. highlight: bash

panpasco
========

.. conda:recipe:: panpasco
   :replaces_section_title:
   :noindex:

   Pipeline for pangenome mapping and pairwise SNP distance

   :homepage: https://gitlab.com/rki_bioinformatics/panpasco
   :license: MIT
   :recipe: /`panpasco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panpasco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panpasco/meta.yaml>`_

   PANPASCO uses linear computational pan\-genomes 
   and pairwise SNP distance calculation to improve
   distance matrix analyses


.. conda:package:: panpasco

   |downloads_panpasco| |docker_panpasco|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bedtools: ``2.27.*``
   :depends bioconductor-genomicranges: 
   :depends bwa: ``0.7.17.*``
   :depends flash: ``1.2.11.*``
   :depends gatk: ``3.8.*``
   :depends picard: ``2.18.*``
   :depends python: ``>3``
   :depends r-argparse: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends samtools: 
   :depends seqtk: 
   :depends snakemake: 
   :depends tabix: 
   :depends trimmomatic: ``0.36.*``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install panpasco

   and update with::

      mamba update panpasco

  To create a new environment, run::

      mamba create --name myenvname panpasco

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panpasco:<tag>

   (see `panpasco/tags`_ for valid values for ``<tag>``)


.. |downloads_panpasco| image:: https://img.shields.io/conda/dn/bioconda/panpasco.svg?style=flat
   :target: https://anaconda.org/bioconda/panpasco
   :alt:   (downloads)
.. |docker_panpasco| image:: https://quay.io/repository/biocontainers/panpasco/status
   :target: https://quay.io/repository/biocontainers/panpasco
.. _`panpasco/tags`: https://quay.io/repository/biocontainers/panpasco?tab=tags


.. raw:: html

    <script>
        var package = "panpasco";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panpasco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panpasco/README.html