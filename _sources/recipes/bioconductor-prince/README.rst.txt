:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prince'
.. highlight: bash

bioconductor-prince
===================

.. conda:recipe:: bioconductor-prince
   :replaces_section_title:
   :noindex:

   Predicting Interactomes from Co\-Elution

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PrInCE.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-prince <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prince>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prince/meta.yaml>`_

   PrInCE \(Predicting Interactomes from Co\-Elution\) uses a naive Bayes classifier trained on dataset\-derived features to recover protein\-protein interactions from co\-elution chromatogram profiles. This package contains the R implementation of PrInCE.


.. conda:package:: bioconductor-prince

   |downloads_bioconductor-prince| |docker_bioconductor-prince|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-msnbase: ``>=2.32.0,<2.33.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: ``>=0.7.4``
   :depends r-forecast: ``>=8.2``
   :depends r-hmisc: ``>=4.0``
   :depends r-liblinear: ``>=2.10-8``
   :depends r-magrittr: ``>=1.5``
   :depends r-naivebayes: ``>=0.9.1``
   :depends r-progress: ``>=1.1.2``
   :depends r-purrr: ``>=0.2.4``
   :depends r-ranger: ``>=0.8.0``
   :depends r-rdpack: ``>=0.7``
   :depends r-robustbase: ``>=0.92-7``
   :depends r-speedglm: ``>=0.3-2``
   :depends r-tester: ``>=0.1.7``
   :depends r-tidyr: ``>=0.8.99``
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

      mamba install bioconductor-prince

   and update with::

      mamba update bioconductor-prince

  To create a new environment, run::

      mamba create --name myenvname bioconductor-prince

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prince:<tag>

   (see `bioconductor-prince/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prince| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prince.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prince
   :alt:   (downloads)
.. |docker_bioconductor-prince| image:: https://quay.io/repository/biocontainers/bioconductor-prince/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prince
.. _`bioconductor-prince/tags`: https://quay.io/repository/biocontainers/bioconductor-prince?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prince";
        var versions = ["1.22.0","1.18.0","1.16.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prince/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prince/README.html