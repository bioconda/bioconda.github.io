:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'viralflye'
.. highlight: bash

viralflye
=========

.. conda:recipe:: viralflye
   :replaces_section_title:
   :noindex:

   viralFlye is a pipeline to recover high\-quality viral genomes from long\-read metagenomic sequencing.

   :homepage: https://github.com/Dmitry-Antipov/viralFlye/
   :license: BSD-3-Clause
   :recipe: /`viralflye <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralflye>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/viralflye/meta.yaml>`_

   


.. conda:package:: viralflye

   |downloads_viralflye| |docker_viralflye|

   :versions:
      
      

      ``0.2-0``

      

   
   :depends bcftools: 
   :depends biopython: 
   :depends blast: 
   :depends bwa: 
   :depends freebayes: 
   :depends minced: 
   :depends minimap2: 
   :depends numpy: 
   :depends prodigal: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends samtools: 
   :depends scipy: 
   :depends seqtk: 
   :depends tabix: 
   :depends vcflib: 
   :depends viralverify: 
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

      mamba install viralflye

   and update with::

      mamba update viralflye

  To create a new environment, run::

      mamba create --name myenvname viralflye

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/viralflye:<tag>

   (see `viralflye/tags`_ for valid values for ``<tag>``)


.. |downloads_viralflye| image:: https://img.shields.io/conda/dn/bioconda/viralflye.svg?style=flat
   :target: https://anaconda.org/bioconda/viralflye
   :alt:   (downloads)
.. |docker_viralflye| image:: https://quay.io/repository/biocontainers/viralflye/status
   :target: https://quay.io/repository/biocontainers/viralflye
.. _`viralflye/tags`: https://quay.io/repository/biocontainers/viralflye?tab=tags


.. raw:: html

    <script>
        var package = "viralflye";
        var versions = ["0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/viralflye/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/viralflye/README.html