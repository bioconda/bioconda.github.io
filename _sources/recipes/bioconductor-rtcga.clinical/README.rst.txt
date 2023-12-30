:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcga.clinical'
.. highlight: bash

bioconductor-rtcga.clinical
===========================

.. conda:recipe:: bioconductor-rtcga.clinical
   :replaces_section_title:
   :noindex:

   Clinical datasets from The Cancer Genome Atlas Project

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/RTCGA.clinical.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcga.clinical <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.clinical>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcga.clinical/meta.yaml>`_

   Package provides clinical datasets from The Cancer Genome Atlas Project for all cohorts types from http\:\/\/gdac.broadinstitute.org\/. Clinical data format is explained here https\:\/\/wiki.nci.nih.gov\/display\/TCGA\/Clinical\+Data\+Overview. Data from 2015\-11\-01 snapshot.


.. conda:package:: bioconductor-rtcga.clinical

   |downloads_bioconductor-rtcga.clinical| |docker_bioconductor-rtcga.clinical|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20151101.32.0-0</code>,  <code>20151101.30.0-0</code>,  <code>20151101.27.0-0</code>,  <code>20151101.24.0-1</code>,  <code>20151101.24.0-0</code>,  <code>20151101.22.0-0</code>,  <code>20151101.20.0-1</code>,  <code>20151101.20.0-0</code>,  <code>20151101.19.0-0</code>,  </span></summary>
      

      ``20151101.32.0-0``,  ``20151101.30.0-0``,  ``20151101.27.0-0``,  ``20151101.24.0-1``,  ``20151101.24.0-0``,  ``20151101.22.0-0``,  ``20151101.20.0-1``,  ``20151101.20.0-0``,  ``20151101.19.0-0``,  ``20151101.18.0-0``,  ``20151101.16.0-0``,  ``20151101.14.0-1``,  ``20151101.14.0-0``,  ``20151101.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-rtcga: ``>=1.32.0,<1.33.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-rtcga.clinical

   and update with::

      mamba update bioconductor-rtcga.clinical

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rtcga.clinical

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtcga.clinical:<tag>

   (see `bioconductor-rtcga.clinical/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtcga.clinical| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcga.clinical.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcga.clinical
   :alt:   (downloads)
.. |docker_bioconductor-rtcga.clinical| image:: https://quay.io/repository/biocontainers/bioconductor-rtcga.clinical/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcga.clinical
.. _`bioconductor-rtcga.clinical/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcga.clinical?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtcga.clinical";
        var versions = ["20151101.32.0","20151101.30.0","20151101.27.0","20151101.24.0","20151101.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcga.clinical/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcga.clinical/README.html