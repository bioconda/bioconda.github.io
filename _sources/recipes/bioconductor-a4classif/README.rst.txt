:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-a4classif'
.. highlight: bash

bioconductor-a4classif
======================

.. conda:recipe:: bioconductor-a4classif
   :replaces_section_title:
   :noindex:

   Automated Affymetrix Array Analysis Classification Package

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/a4Classif.html
   :license: GPL-3
   :recipe: /`bioconductor-a4classif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4classif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-a4classif/meta.yaml>`_

   Functionalities for classification of Affymetrix microarray data\, integrating within the Automated Affymetrix Array Analysis set of packages.


.. conda:package:: bioconductor-a4classif

   |downloads_bioconductor-a4classif| |docker_bioconductor-a4classif|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-a4core: ``>=1.48.0,<1.49.0``
   :depends bioconductor-a4preproc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-glmnet: 
   :depends r-pamr: 
   :depends r-rocr: 
   :depends r-varselrf: 
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

      mamba install bioconductor-a4classif

   and update with::

      mamba update bioconductor-a4classif

  To create a new environment, run::

      mamba create --name myenvname bioconductor-a4classif

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-a4classif:<tag>

   (see `bioconductor-a4classif/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-a4classif| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-a4classif.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-a4classif
   :alt:   (downloads)
.. |docker_bioconductor-a4classif| image:: https://quay.io/repository/biocontainers/bioconductor-a4classif/status
   :target: https://quay.io/repository/biocontainers/bioconductor-a4classif
.. _`bioconductor-a4classif/tags`: https://quay.io/repository/biocontainers/bioconductor-a4classif?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-a4classif";
        var versions = ["1.48.0","1.46.0","1.42.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-a4classif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-a4classif/README.html