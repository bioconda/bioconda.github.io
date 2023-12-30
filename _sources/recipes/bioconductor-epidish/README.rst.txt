:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epidish'
.. highlight: bash

bioconductor-epidish
====================

.. conda:recipe:: bioconductor-epidish
   :replaces_section_title:
   :noindex:

   Epigenetic Dissection of Intra\-Sample\-Heterogeneity

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/EpiDISH.html
   :license: GPL-2
   :recipe: /`bioconductor-epidish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epidish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epidish/meta.yaml>`_

   EpiDISH is a R package to infer the proportions of a priori known cell\-types present in a sample representing a mixture of such cell\-types. Right now\, the package can be used on DNAm data of whole blood\, generic epithelial tissue and breast tissue. Besides\, the package provides a function that allows the identification of differentially methylated cell\-types and their directionality of change in Epigenome\-Wide Association Studies.


.. conda:package:: bioconductor-epidish

   |downloads_bioconductor-epidish| |docker_bioconductor-epidish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.2-1``,  ``2.0.2-0``,  ``1.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-locfdr: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-quadprog: 
   :depends r-stringr: 
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

      mamba install bioconductor-epidish

   and update with::

      mamba update bioconductor-epidish

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epidish

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epidish:<tag>

   (see `bioconductor-epidish/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epidish| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epidish.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epidish
   :alt:   (downloads)
.. |docker_bioconductor-epidish| image:: https://quay.io/repository/biocontainers/bioconductor-epidish/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epidish
.. _`bioconductor-epidish/tags`: https://quay.io/repository/biocontainers/bioconductor-epidish?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epidish";
        var versions = ["2.18.0","2.16.0","2.14.0","2.10.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epidish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epidish/README.html