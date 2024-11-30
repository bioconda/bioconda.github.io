:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fmrs'
.. highlight: bash

bioconductor-fmrs
=================

.. conda:recipe:: bioconductor-fmrs
   :replaces_section_title:
   :noindex:

   Variable Selection in Finite Mixture of AFT Regression and FMR Models

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/fmrs.html
   :license: GPL-3
   :recipe: /`bioconductor-fmrs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fmrs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fmrs/meta.yaml>`_

   The package obtains parameter estimation\, i.e.\, maximum likelihood estimators \(MLE\)\, via the Expectation\-Maximization \(EM\) algorithm for the Finite Mixture of Regression \(FMR\) models with Normal distribution\, and MLE for the Finite Mixture of Accelerated Failure Time Regression \(FMAFTR\) subject to right censoring with Log\-Normal and Weibull distributions via the EM algorithm and the Newton\-Raphson algorithm \(for Weibull distribution\). More importantly\, the package obtains the maximum penalized likelihood \(MPLE\) for both FMR and FMAFTR models \(collectively called FMRs\). A component\-wise tuning parameter selection based on a component\-wise BIC is implemented in the package. Furthermore\, this package provides Ridge Regression and Elastic Net.


.. conda:package:: bioconductor-fmrs

   |downloads_bioconductor-fmrs| |docker_bioconductor-fmrs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.4.0-2</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-survival: 
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

      mamba install bioconductor-fmrs

   and update with::

      mamba update bioconductor-fmrs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fmrs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fmrs:<tag>

   (see `bioconductor-fmrs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fmrs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fmrs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fmrs
   :alt:   (downloads)
.. |docker_bioconductor-fmrs| image:: https://quay.io/repository/biocontainers/bioconductor-fmrs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fmrs
.. _`bioconductor-fmrs/tags`: https://quay.io/repository/biocontainers/bioconductor-fmrs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fmrs";
        var versions = ["1.12.0","1.10.0","1.8.0","1.8.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fmrs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fmrs/README.html