:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellity'
.. highlight: bash

bioconductor-cellity
====================

.. conda:recipe:: bioconductor-cellity
   :replaces_section_title:
   :noindex:

   Quality Control for Single\-Cell RNA\-seq Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cellity.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cellity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellity/meta.yaml>`_

   A support vector machine approach to identifying and filtering low quality cells from single\-cell RNA\-seq datasets.


.. conda:package:: bioconductor-cellity

   |downloads_bioconductor-cellity| |docker_bioconductor-cellity|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-org.mm.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-topgo: ``>=2.54.0,<2.55.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-ggplot2: 
   :depends r-mvoutlier: 
   :depends r-robustbase: 
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

      mamba install bioconductor-cellity

   and update with::

      mamba update bioconductor-cellity

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cellity

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellity:<tag>

   (see `bioconductor-cellity/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellity| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellity.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellity
   :alt:   (downloads)
.. |docker_bioconductor-cellity| image:: https://quay.io/repository/biocontainers/bioconductor-cellity/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellity
.. _`bioconductor-cellity/tags`: https://quay.io/repository/biocontainers/bioconductor-cellity?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellity";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellity/README.html