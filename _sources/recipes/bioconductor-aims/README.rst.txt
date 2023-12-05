:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aims'
.. highlight: bash

bioconductor-aims
=================

.. conda:recipe:: bioconductor-aims
   :replaces_section_title:
   :noindex:

   AIMS \: Absolute Assignment of Breast Cancer Intrinsic Molecular Subtype

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/AIMS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-aims <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aims>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aims/meta.yaml>`_
   :links: biotools: :biotools:`aims`, doi: :doi:`10.1093/jnci/dju357`

   This package contains the AIMS implementation. It contains necessary functions to assign the five intrinsic molecular subtypes \(Luminal A\, Luminal B\, Her2\-enriched\, Basal\-like\, Normal\-like\). Assignments could be done on individual samples as well as on dataset of gene expression data.


.. conda:package:: bioconductor-aims

   |downloads_bioconductor-aims| |docker_bioconductor-aims|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
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

      mamba install bioconductor-aims

   and update with::

      mamba update bioconductor-aims

  To create a new environment, run::

      mamba create --name myenvname bioconductor-aims

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aims:<tag>

   (see `bioconductor-aims/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aims| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aims.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aims
   :alt:   (downloads)
.. |docker_bioconductor-aims| image:: https://quay.io/repository/biocontainers/bioconductor-aims/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aims
.. _`bioconductor-aims/tags`: https://quay.io/repository/biocontainers/bioconductor-aims?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aims";
        var versions = ["1.34.0","1.32.0","1.30.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aims/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aims/README.html