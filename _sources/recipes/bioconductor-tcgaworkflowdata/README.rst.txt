:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tcgaworkflowdata'
.. highlight: bash

bioconductor-tcgaworkflowdata
=============================

.. conda:recipe:: bioconductor-tcgaworkflowdata
   :replaces_section_title:
   :noindex:

   Data for TCGA Workflow

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/TCGAWorkflowData.html
   :license: GPL-3
   :recipe: /`bioconductor-tcgaworkflowdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgaworkflowdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tcgaworkflowdata/meta.yaml>`_

   This experimental data package contains 11 data sets necessary to follow the \"TCGA Workflow\: Analyze cancer genomics and epigenomics data using Bioconductor packages\".


.. conda:package:: bioconductor-tcgaworkflowdata

   |downloads_bioconductor-tcgaworkflowdata| |docker_bioconductor-tcgaworkflowdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
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

      mamba install bioconductor-tcgaworkflowdata

   and update with::

      mamba update bioconductor-tcgaworkflowdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tcgaworkflowdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tcgaworkflowdata:<tag>

   (see `bioconductor-tcgaworkflowdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tcgaworkflowdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tcgaworkflowdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tcgaworkflowdata
   :alt:   (downloads)
.. |docker_bioconductor-tcgaworkflowdata| image:: https://quay.io/repository/biocontainers/bioconductor-tcgaworkflowdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tcgaworkflowdata
.. _`bioconductor-tcgaworkflowdata/tags`: https://quay.io/repository/biocontainers/bioconductor-tcgaworkflowdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tcgaworkflowdata";
        var versions = ["1.26.0","1.24.0","1.22.0","1.18.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tcgaworkflowdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tcgaworkflowdata/README.html