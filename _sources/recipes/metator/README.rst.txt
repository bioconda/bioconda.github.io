:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metator'
.. highlight: bash

metator
=======

.. conda:recipe:: metator
   :replaces_section_title:
   :noindex:

   Metagenomic binning based on Hi\-C data.

   :homepage: https://github.com/koszullab/metator
   :documentation: https://github.com/koszullab/metaTOR/blob/v1.3.10/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`metator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metator/meta.yaml>`_
   :links: doi: :doi:`10.3389/fgene.2019.00753`

   


.. conda:package:: metator

   |downloads_metator| |docker_metator|

   :versions:
      
      

      ``1.3.10-0``,  ``1.3.7-0``

      

   
   :depends biopython: ``<=1.80``
   :depends bowtie2: 
   :depends bwa: 
   :depends checkv: 
   :depends cooler: 
   :depends hicstuff: 
   :depends hmmer: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends looseversion: 
   :depends micomplete: 
   :depends networkx: 
   :depends numpy: 
   :depends openjdk: 
   :depends pairix: 
   :depends pairtools: 
   :depends pandas: 
   :depends prodigal: 
   :depends pyfastx: 
   :depends pysam: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn-base: 
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

      mamba install metator

   and update with::

      mamba update metator

  To create a new environment, run::

      mamba create --name myenvname metator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metator:<tag>

   (see `metator/tags`_ for valid values for ``<tag>``)


.. |downloads_metator| image:: https://img.shields.io/conda/dn/bioconda/metator.svg?style=flat
   :target: https://anaconda.org/bioconda/metator
   :alt:   (downloads)
.. |docker_metator| image:: https://quay.io/repository/biocontainers/metator/status
   :target: https://quay.io/repository/biocontainers/metator
.. _`metator/tags`: https://quay.io/repository/biocontainers/metator?tab=tags


.. raw:: html

    <script>
        var package = "metator";
        var versions = ["1.3.10","1.3.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metator/README.html