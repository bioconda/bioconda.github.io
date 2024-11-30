:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-correp'
.. highlight: bash

bioconductor-correp
===================

.. conda:recipe:: bioconductor-correp
   :replaces_section_title:
   :noindex:

   Multivariate Correlation Estimator and Statistical Inference Procedures.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CORREP.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-correp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-correp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-correp/meta.yaml>`_
   :links: biotools: :biotools:`correp`, doi: :doi:`10.1038/nmeth.3252`

   Multivariate correlation estimation and statistical inference. See package vignette.


.. conda:package:: bioconductor-correp

   |downloads_bioconductor-correp| |docker_bioconductor-correp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-1</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  </span></summary>
      

      ``1.68.0-1``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
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

      mamba install bioconductor-correp

   and update with::

      mamba update bioconductor-correp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-correp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-correp:<tag>

   (see `bioconductor-correp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-correp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-correp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-correp
   :alt:   (downloads)
.. |docker_bioconductor-correp| image:: https://quay.io/repository/biocontainers/bioconductor-correp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-correp
.. _`bioconductor-correp/tags`: https://quay.io/repository/biocontainers/bioconductor-correp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-correp";
        var versions = ["1.68.0","1.68.0","1.66.0","1.64.0","1.60.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-correp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-correp/README.html