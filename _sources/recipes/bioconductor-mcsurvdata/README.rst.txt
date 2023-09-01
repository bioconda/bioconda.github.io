:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mcsurvdata'
.. highlight: bash

bioconductor-mcsurvdata
=======================

.. conda:recipe:: bioconductor-mcsurvdata
   :replaces_section_title:
   :noindex:

   Meta cohort survival data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/mcsurvdata.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-mcsurvdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcsurvdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mcsurvdata/meta.yaml>`_

   This package stores two merged expressionSet objects that contain the gene expression profile and clinical information of \-a\- six breast cancer cohorts and \-b\- four colorectal cancer cohorts. Breast cancer data are employed in the vignette of the hrunbiased package for survival analysis of gene signatures.


.. conda:package:: bioconductor-mcsurvdata

   |downloads_bioconductor-mcsurvdata| |docker_bioconductor-mcsurvdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
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

      mamba install bioconductor-mcsurvdata

   and update with::

      mamba update bioconductor-mcsurvdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mcsurvdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mcsurvdata:<tag>

   (see `bioconductor-mcsurvdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mcsurvdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mcsurvdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mcsurvdata
   :alt:   (downloads)
.. |docker_bioconductor-mcsurvdata| image:: https://quay.io/repository/biocontainers/bioconductor-mcsurvdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mcsurvdata
.. _`bioconductor-mcsurvdata/tags`: https://quay.io/repository/biocontainers/bioconductor-mcsurvdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mcsurvdata";
        var versions = ["1.18.0","1.16.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mcsurvdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mcsurvdata/README.html