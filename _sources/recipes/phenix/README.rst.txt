:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phenix'
.. highlight: bash

phenix
======

.. conda:recipe:: phenix
   :replaces_section_title:
   :noindex:

   Public Health England SNP calling pipeline

   :homepage: https://github.com/phe-bioinformatics/PHEnix
   :license: GPL3
   :recipe: /`phenix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phenix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phenix/meta.yaml>`_
   :links: biotools: :biotools:`phenix`

   


.. conda:package:: phenix

   |downloads_phenix| |docker_phenix|

   :versions:
      
      

      ``1.4.1a-2``,  ``1.4.1a-1``,  ``1.4.1a-0``

      

   
   :depends argparse: 
   :depends bcftools: 
   :depends bintrees: 
   :depends biopython: 
   :depends bowtie2: 
   :depends bwa: 
   :depends gatk: 
   :depends matplotlib: 
   :depends matplotlib-venn: 
   :depends numpy: 
   :depends picard: 
   :depends psycopg2: 
   :depends pysam: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends pyvcf: 
   :depends pyyaml: 
   :depends samtools: 
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

      mamba install phenix

   and update with::

      mamba update phenix

  To create a new environment, run::

      mamba create --name myenvname phenix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phenix:<tag>

   (see `phenix/tags`_ for valid values for ``<tag>``)


.. |downloads_phenix| image:: https://img.shields.io/conda/dn/bioconda/phenix.svg?style=flat
   :target: https://anaconda.org/bioconda/phenix
   :alt:   (downloads)
.. |docker_phenix| image:: https://quay.io/repository/biocontainers/phenix/status
   :target: https://quay.io/repository/biocontainers/phenix
.. _`phenix/tags`: https://quay.io/repository/biocontainers/phenix?tab=tags


.. raw:: html

    <script>
        var package = "phenix";
        var versions = ["1.4.1a","1.4.1a","1.4.1a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phenix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phenix/README.html