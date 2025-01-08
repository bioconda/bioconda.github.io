:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.cnv'
.. highlight: bash

bioconductor-rtcga.cnv
======================

.. conda:recipe:: bioconductor-rtcga.cnv
   :replaces_section_title:
   :noindex:

   CNV \(Copy\-number variation\) datasets from The Cancer Genome Atlas Project

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/RTCGA.CNV.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.cnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.cnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.cnv/meta.yaml>`_

   Package provides CNV \(based on Merge snp\) datasets from The Cancer Genome Atlas Project for all cohorts types from http\:\/\/gdac.broadinstitute.org\/. Data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/Retrieving \+Data\+Using\+the\+Data\+Matrix. Data from 2015\-11\-01 snapshot.


.. conda:package:: bioconductor-rtcga.cnv

   |downloads_bioconductor-rtcga.cnv| |docker_bioconductor-rtcga.cnv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.25.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.25.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-rtcga: ``>=1.36.0,<1.37.0``
   :depends curl: 
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

      mamba install bioconductor-rtcga.cnv

   and update with::

      mamba update bioconductor-rtcga.cnv

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rtcga.cnv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcga.cnv:<tag>

   (see `bioconductor-rtcga.cnv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcga.cnv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.cnv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.cnv
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.cnv| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.cnv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.cnv
.. _`bioconductor-rtcga.cnv/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.cnv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtcga.cnv";
        var versions = ["1.34.0","1.30.0","1.28.0","1.25.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.cnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.cnv/README.html