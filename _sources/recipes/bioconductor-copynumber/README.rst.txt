:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-copynumber'
.. highlight: bash

bioconductor-copynumber
=======================

.. conda:recipe:: bioconductor-copynumber
   :replaces_section_title:
   :noindex:

   Segmentation of single\- and multi\-track copy number data by penalized least squares regression.

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/copynumber.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-copynumber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copynumber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copynumber/meta.yaml>`_
   :links: biotools: :biotools:`copynumber`

   Penalized least squares regression is applied to fit piecewise constant curves to copy number data to locate genomic regions of constant copy number. Procedures are available for individual segmentation of each sample\, joint segmentation of several samples and joint segmentation of the two data tracks from SNP\-arrays. Several plotting functions are available for visualization of the data and the segmentation results.


.. conda:package:: bioconductor-copynumber

   |downloads_bioconductor-copynumber| |docker_bioconductor-copynumber|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: 
   :depends bioconductor-genomicranges: ``1.58.0.*``
   :depends bioconductor-iranges: 
   :depends bioconductor-s4vectors: 
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

      mamba install bioconductor-copynumber

   and update with::

      mamba update bioconductor-copynumber

  To create a new environment, run::

      mamba create --name myenvname bioconductor-copynumber

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-copynumber:<tag>

   (see `bioconductor-copynumber/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-copynumber| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-copynumber.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-copynumber
   :alt:   (downloads)
.. |docker_bioconductor-copynumber| image:: https://quay.io/repository/biocontainers/bioconductor-copynumber/status
   :target: https://quay.io/repository/biocontainers/bioconductor-copynumber
.. _`bioconductor-copynumber/tags`: https://quay.io/repository/biocontainers/bioconductor-copynumber?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-copynumber";
        var versions = ["1.38.0","1.38.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-copynumber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-copynumber/README.html