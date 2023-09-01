:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smeg'
.. highlight: bash

smeg
====

.. conda:recipe:: smeg
   :replaces_section_title:
   :noindex:

   Strain\-level Metagenomic Estimation of Growth rate \(SMEG\) measures growth rates of microbial strains from complex metagenomic dataset

   :homepage: https://github.com/ohlab/SMEG
   :license: MIT
   :recipe: /`smeg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smeg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smeg/meta.yaml>`_

   


.. conda:package:: smeg

   |downloads_smeg| |docker_smeg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.5-2</code>,  <code>1.1.5-1</code>,  <code>1.1.5-0</code>,  <code>1.1.4-1</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1-1</code>,  </span></summary>
      

      ``1.1.5-2``,  ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1-1``,  ``1.1-0``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: 
   :depends bedtools: 
   :depends blast: 
   :depends bowtie2: 
   :depends libgenome: 
   :depends mauve: 
   :depends openssl: ``>=1.1.0,<=1.1.1``
   :depends parallel: 
   :depends prokka: 
   :depends r-ape: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-dynamictreecut: 
   :depends r-getopt: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gsubfn: 
   :depends r-seqinr: 
   :depends readline: ``>=6.2``
   :depends roary: 
   :depends samtools: 
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

      mamba install smeg

   and update with::

      mamba update smeg

  To create a new environment, run::

      mamba create --name myenvname smeg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/smeg:<tag>

   (see `smeg/tags`_ for valid values for ``<tag>``)


.. |downloads_smeg| image:: https://img.shields.io/conda/dn/bioconda/smeg.svg?style=flat
   :target: https://anaconda.org/bioconda/smeg
   :alt:   (downloads)
.. |docker_smeg| image:: https://quay.io/repository/biocontainers/smeg/status
   :target: https://quay.io/repository/biocontainers/smeg
.. _`smeg/tags`: https://quay.io/repository/biocontainers/smeg?tab=tags


.. raw:: html

    <script>
        var package = "smeg";
        var versions = ["1.1.5","1.1.5","1.1.5","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smeg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smeg/README.html