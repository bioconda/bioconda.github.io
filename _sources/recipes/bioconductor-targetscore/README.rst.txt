:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-targetscore'
.. highlight: bash

bioconductor-targetscore
========================

.. conda:recipe:: bioconductor-targetscore
   :replaces_section_title:
   :noindex:

   TargetScore\: Infer microRNA targets using microRNA\-overexpression data and sequence information

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TargetScore.html
   :license: GPL-2
   :recipe: /`bioconductor-targetscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscore/meta.yaml>`_
   :links: biotools: :biotools:`targetscore`, doi: :doi:`10.1093/bioinformatics/btt599`

   Infer the posterior distributions of microRNA targets by probabilistically modelling the likelihood microRNA\-overexpression fold\-changes and sequence\-based scores. Variaitonal Bayesian Gaussian mixture model \(VB\-GMM\) is applied to log fold\-changes and sequence scores to obtain the posteriors of latent variable being the miRNA targets. The final targetScore is computed as the sigmoid\-transformed fold\-change weighted by the averaged posteriors of target components over all of the features.


.. conda:package:: bioconductor-targetscore

   |downloads_bioconductor-targetscore| |docker_bioconductor-targetscore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
   :depends r-pracma: 
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

      mamba install bioconductor-targetscore

   and update with::

      mamba update bioconductor-targetscore

  To create a new environment, run::

      mamba create --name myenvname bioconductor-targetscore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-targetscore:<tag>

   (see `bioconductor-targetscore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-targetscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetscore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-targetscore
   :alt:   (downloads)
.. |docker_bioconductor-targetscore| image:: https://quay.io/repository/biocontainers/bioconductor-targetscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetscore
.. _`bioconductor-targetscore/tags`: https://quay.io/repository/biocontainers/bioconductor-targetscore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-targetscore";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetscore/README.html