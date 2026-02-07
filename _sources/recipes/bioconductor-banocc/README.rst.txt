:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-banocc'
.. highlight: bash

bioconductor-banocc
===================

.. conda:recipe:: bioconductor-banocc
   :replaces_section_title:
   :noindex:

   Bayesian ANalysis Of Compositional Covariance

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/banocc.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-banocc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-banocc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-banocc/meta.yaml>`_

   BAnOCC is a package designed for compositional data\, where each sample sums to one. It infers the approximate covariance of the unconstrained data using a Bayesian model coded with \`rstan\`. It provides as output the \`stanfit\` object as well as posterior median and credible interval estimates for each correlation element.


.. conda:package:: bioconductor-banocc

   |downloads_bioconductor-banocc| |docker_bioconductor-banocc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-coda: ``>=0.18.1``
   :depends r-mvtnorm: 
   :depends r-rstan: ``>=2.17.4``
   :depends r-stringr: 
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

      mamba install bioconductor-banocc

   and update with::

      mamba update bioconductor-banocc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-banocc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-banocc:<tag>

   (see `bioconductor-banocc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-banocc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-banocc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-banocc
   :alt:   (downloads)
.. |docker_bioconductor-banocc| image:: https://quay.io/repository/biocontainers/bioconductor-banocc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-banocc
.. _`bioconductor-banocc/tags`: https://quay.io/repository/biocontainers/bioconductor-banocc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-banocc";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-banocc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-banocc/README.html