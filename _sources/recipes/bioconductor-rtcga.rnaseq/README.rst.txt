:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.rnaseq'
.. highlight: bash

bioconductor-rtcga.rnaseq
=========================

.. conda:recipe:: bioconductor-rtcga.rnaseq
   :replaces_section_title:
   :noindex:

   Rna\-seq datasets from The Cancer Genome Atlas Project

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/RTCGA.rnaseq.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.rnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.rnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.rnaseq/meta.yaml>`_

   Package provides rna\-seq datasets from The Cancer Genome Atlas Project for all cohorts types from http\:\/\/gdac.broadinstitute.org\/. Rna\-seq data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/RNASeq\+Version\+2. Data source is illumina hiseq Level 3 RSEM normalized expression data. Data from 2015\-11\-01 snapshot.


.. conda:package:: bioconductor-rtcga.rnaseq

   |downloads_bioconductor-rtcga.rnaseq| |docker_bioconductor-rtcga.rnaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20151101.30.0-0</code>,  <code>20151101.27.0-0</code>,  <code>20151101.24.0-1</code>,  <code>20151101.24.0-0</code>,  <code>20151101.22.0-0</code>,  <code>20151101.20.0-1</code>,  <code>20151101.20.0-0</code>,  <code>20151101.19.0-0</code>,  <code>20151101.18.0-0</code>,  </span></summary>
      

      ``20151101.30.0-0``,  ``20151101.27.0-0``,  ``20151101.24.0-1``,  ``20151101.24.0-0``,  ``20151101.22.0-0``,  ``20151101.20.0-1``,  ``20151101.20.0-0``,  ``20151101.19.0-0``,  ``20151101.18.0-0``,  ``20151101.16.0-0``,  ``20151101.14.0-1``,  ``20151101.14.0-0``,  ``20151101.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-rtcga: ``>=1.30.0,<1.31.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-rtcga.rnaseq

   and update with::

      mamba update bioconductor-rtcga.rnaseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rtcga.rnaseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcga.rnaseq:<tag>

   (see `bioconductor-rtcga.rnaseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcga.rnaseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.rnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.rnaseq
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.rnaseq| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.rnaseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.rnaseq
.. _`bioconductor-rtcga.rnaseq/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.rnaseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtcga.rnaseq";
        var versions = ["20151101.30.0","20151101.27.0","20151101.24.0","20151101.24.0","20151101.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.rnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.rnaseq/README.html