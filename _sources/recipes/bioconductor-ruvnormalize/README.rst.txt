:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ruvnormalize'
.. highlight: bash

bioconductor-ruvnormalize
=========================

.. conda:recipe:: bioconductor-ruvnormalize
   :replaces_section_title:
   :noindex:

   RUV for normalization of expression array data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RUVnormalize.html
   :license: GPL-3
   :recipe: /`bioconductor-ruvnormalize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvnormalize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvnormalize/meta.yaml>`_
   :links: biotools: :biotools:`ruvnormalize`

   RUVnormalize is meant to remove unwanted variation from gene expression data when the factor of interest is not defined\, e.g.\, to clean up a dataset for general use or to do any kind of unsupervised analysis.


.. conda:package:: bioconductor-ruvnormalize

   |downloads_bioconductor-ruvnormalize| |docker_bioconductor-ruvnormalize|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-2</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-2``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-ruvnormalizedata: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-ruvnormalize

   and update with::

      mamba update bioconductor-ruvnormalize

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ruvnormalize

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ruvnormalize:<tag>

   (see `bioconductor-ruvnormalize/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ruvnormalize| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ruvnormalize.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ruvnormalize
   :alt:   (downloads)
.. |docker_bioconductor-ruvnormalize| image:: https://quay.io/repository/biocontainers/bioconductor-ruvnormalize/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ruvnormalize
.. _`bioconductor-ruvnormalize/tags`: https://quay.io/repository/biocontainers/bioconductor-ruvnormalize?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ruvnormalize";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ruvnormalize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ruvnormalize/README.html