:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hierinf'
.. highlight: bash

bioconductor-hierinf
====================

.. conda:recipe:: bioconductor-hierinf
   :replaces_section_title:
   :noindex:

   Hierarchical Inference

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hierinf.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-hierinf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hierinf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hierinf/meta.yaml>`_

   Tools to perform hierarchical inference for one or multiple studies \/ data sets based on high\-dimensional multivariate \(generalised\) linear models. A possible application is to perform hierarchical inference for GWA studies to find significant groups or single SNPs \(if the signal is strong\) in a data\-driven and automated procedure. The method is based on an efficient hierarchical multiple testing correction and controls the FWER. The functions can easily be run in parallel.


.. conda:package:: bioconductor-hierinf

   |downloads_bioconductor-hierinf| |docker_bioconductor-hierinf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-fmsb: 
   :depends r-glmnet: 
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

      mamba install bioconductor-hierinf

   and update with::

      mamba update bioconductor-hierinf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hierinf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hierinf:<tag>

   (see `bioconductor-hierinf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hierinf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hierinf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hierinf
   :alt:   (downloads)
.. |docker_bioconductor-hierinf| image:: https://quay.io/repository/biocontainers/bioconductor-hierinf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hierinf
.. _`bioconductor-hierinf/tags`: https://quay.io/repository/biocontainers/bioconductor-hierinf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hierinf";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hierinf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hierinf/README.html