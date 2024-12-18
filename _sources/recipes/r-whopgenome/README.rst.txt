:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-whopgenome'
.. highlight: bash

r-whopgenome
============

.. conda:recipe:: r-whopgenome
   :replaces_section_title:
   :noindex:

   Provides very fast access to whole genome\, population scale variation data from VCF files and sequence data from FASTA\-formatted files. It also reads in alignments from FASTA\, Phylip\, MAF and other file formats. Provides easy\-to\-use interfaces to genome annotation from UCSC and Bioconductor and gene ontology data from AmiGO and is capable to read\, modify and write PLINK .PED\-format pedigree files.

   :homepage: https://CRAN.R-project.org/package=WhopGenome
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-whopgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-whopgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-whopgenome/meta.yaml>`_

   


.. conda:package:: r-whopgenome

   |downloads_r-whopgenome| |docker_r-whopgenome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.7-10</code>,  <code>0.9.7-9</code>,  <code>0.9.7-8</code>,  <code>0.9.7-7</code>,  <code>0.9.7-6</code>,  <code>0.9.7-5</code>,  <code>0.9.7-4</code>,  <code>0.9.7-3</code>,  <code>0.9.7-2</code>,  </span></summary>
      

      ``0.9.7-10``,  ``0.9.7-9``,  ``0.9.7-8``,  ``0.9.7-7``,  ``0.9.7-6``,  ``0.9.7-5``,  ``0.9.7-4``,  ``0.9.7-3``,  ``0.9.7-2``,  ``0.9.7-1``,  ``0.9.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install r-whopgenome

   and update with::

      mamba update r-whopgenome

  To create a new environment, run::

      mamba create --name myenvname r-whopgenome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-whopgenome:<tag>

   (see `r-whopgenome/tags`_ for valid values for ``<tag>``)


.. |downloads_r-whopgenome| image:: https://img.shields.io/conda/dn/bioconda/r-whopgenome.svg?style=flat
   :target: https://anaconda.org/bioconda/r-whopgenome
   :alt:   (downloads)
.. |docker_r-whopgenome| image:: https://quay.io/repository/biocontainers/r-whopgenome/status
   :target: https://quay.io/repository/biocontainers/r-whopgenome
.. _`r-whopgenome/tags`: https://quay.io/repository/biocontainers/r-whopgenome?tab=tags


.. raw:: html

    <script>
        var package = "r-whopgenome";
        var versions = ["0.9.7","0.9.7","0.9.7","0.9.7","0.9.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-whopgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-whopgenome/README.html