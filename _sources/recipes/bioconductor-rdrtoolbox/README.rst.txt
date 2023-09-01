:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rdrtoolbox'
.. highlight: bash

bioconductor-rdrtoolbox
=======================

.. conda:recipe:: bioconductor-rdrtoolbox
   :replaces_section_title:
   :noindex:

   A package for nonlinear dimension reduction with Isomap and LLE.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RDRToolbox.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-rdrtoolbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rdrtoolbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rdrtoolbox/meta.yaml>`_

   A package for nonlinear dimension reduction using the Isomap and LLE algorithm. It also includes a routine for computing the Davis\-Bouldin\-Index for cluster validation\, a plotting tool and a data generator for microarray gene expression data and for the Swiss Roll dataset.


.. conda:package:: bioconductor-rdrtoolbox

   |downloads_bioconductor-rdrtoolbox| |docker_bioconductor-rdrtoolbox|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  </span></summary>
      

      ``1.50.0-0``,  ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
   :depends r-rgl: 
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

      mamba install bioconductor-rdrtoolbox

   and update with::

      mamba update bioconductor-rdrtoolbox

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rdrtoolbox

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rdrtoolbox:<tag>

   (see `bioconductor-rdrtoolbox/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rdrtoolbox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rdrtoolbox.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rdrtoolbox
   :alt:   (downloads)
.. |docker_bioconductor-rdrtoolbox| image:: https://quay.io/repository/biocontainers/bioconductor-rdrtoolbox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rdrtoolbox
.. _`bioconductor-rdrtoolbox/tags`: https://quay.io/repository/biocontainers/bioconductor-rdrtoolbox?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rdrtoolbox";
        var versions = ["1.50.0","1.48.0","1.44.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rdrtoolbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rdrtoolbox/README.html