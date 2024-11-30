:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macrophage'
.. highlight: bash

bioconductor-macrophage
=======================

.. conda:recipe:: bioconductor-macrophage
   :replaces_section_title:
   :noindex:

   Human macrophage immune response

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/macrophage.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-macrophage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macrophage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macrophage/meta.yaml>`_

   This package provides the output of running Salmon on a set of 24 RNA\-seq samples from Alasoo\, et al. \"Shared genetic effects on chromatin and gene expression indicate a role for enhancer priming in immune response\"\, published in Nature Genetics\, January 2018. For details on version numbers and how the samples were processed see the package vignette.


.. conda:package:: bioconductor-macrophage

   |downloads_bioconductor-macrophage| |docker_bioconductor-macrophage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.13.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.13.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-macrophage

   and update with::

      mamba update bioconductor-macrophage

  To create a new environment, run::

      mamba create --name myenvname bioconductor-macrophage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-macrophage:<tag>

   (see `bioconductor-macrophage/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macrophage| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macrophage.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macrophage
   :alt:   (downloads)
.. |docker_bioconductor-macrophage| image:: https://quay.io/repository/biocontainers/bioconductor-macrophage/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macrophage
.. _`bioconductor-macrophage/tags`: https://quay.io/repository/biocontainers/bioconductor-macrophage?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-macrophage";
        var versions = ["1.18.0","1.16.0","1.13.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macrophage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macrophage/README.html