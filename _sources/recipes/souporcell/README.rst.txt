:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'souporcell'
.. highlight: bash

souporcell
==========

.. conda:recipe:: souporcell
   :replaces_section_title:
   :noindex:

   Clustering scRNAseq by genotypes.

   :homepage: https://github.com/wheaton5/souporcell
   :license: MIT / MIT
   :recipe: /`souporcell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/souporcell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/souporcell/meta.yaml>`_
   :links: doi: :doi:`10.1101/699637v1`, biotools: :biotools:`souporcell`

   


.. conda:package:: souporcell

   |downloads_souporcell| |docker_souporcell|

   :versions:
      
      

      ``2.5-0``

      

   
   :depends bcftools: ``>=1.9``
   :depends bedtools: ``>=2.28``
   :depends freebayes: ``>=1.3``
   :depends hisat2: 
   :depends htslib: ``>=1.9``
   :depends libgcc: ``>=13``
   :depends minimap2: ``>=2.26``
   :depends numpy: 
   :depends pyfaidx: 
   :depends pysam: 
   :depends pystan: ``<3``
   :depends python: 
   :depends pyvcf: 
   :depends samtools: ``>=1.9``
   :depends scipy: 
   :depends vartrix: 
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

      mamba install souporcell

   and update with::

      mamba update souporcell

  To create a new environment, run::

      mamba create --name myenvname souporcell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/souporcell:<tag>

   (see `souporcell/tags`_ for valid values for ``<tag>``)


.. |downloads_souporcell| image:: https://img.shields.io/conda/dn/bioconda/souporcell.svg?style=flat
   :target: https://anaconda.org/bioconda/souporcell
   :alt:   (downloads)
.. |docker_souporcell| image:: https://quay.io/repository/biocontainers/souporcell/status
   :target: https://quay.io/repository/biocontainers/souporcell
.. _`souporcell/tags`: https://quay.io/repository/biocontainers/souporcell?tab=tags


.. raw:: html

    <script>
        var package = "souporcell";
        var versions = ["2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/souporcell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/souporcell/README.html