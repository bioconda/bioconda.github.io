:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ncgtw'
.. highlight: bash

bioconductor-ncgtw
==================

.. conda:recipe:: bioconductor-ncgtw
   :replaces_section_title:
   :noindex:

   Alignment of LC\-MS Profiles by Neighbor\-wise Compound\-specific Graphical Time Warping with Misalignment Detection

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ncGTW.html
   :license: GPL-2
   :recipe: /`bioconductor-ncgtw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncgtw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ncgtw/meta.yaml>`_

   The purpose of ncGTW is to help XCMS for LC\-MS data alignment. Currently\, ncGTW can detect the misaligned feature groups by XCMS\, and the user can choose to realign these feature groups by ncGTW or not.


.. conda:package:: bioconductor-ncgtw

   |downloads_bioconductor-ncgtw| |docker_bioconductor-ncgtw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-xcms: ``>=4.4.0,<4.5.0``
   :depends bioconductor-xcms: ``>=4.4.0,<4.5.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rcpp: 
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

      mamba install bioconductor-ncgtw

   and update with::

      mamba update bioconductor-ncgtw

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ncgtw

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ncgtw:<tag>

   (see `bioconductor-ncgtw/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ncgtw| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ncgtw.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ncgtw
   :alt:   (downloads)
.. |docker_bioconductor-ncgtw| image:: https://quay.io/repository/biocontainers/bioconductor-ncgtw/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ncgtw
.. _`bioconductor-ncgtw/tags`: https://quay.io/repository/biocontainers/bioconductor-ncgtw?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ncgtw";
        var versions = ["1.20.0","1.16.0","1.14.0","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ncgtw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ncgtw/README.html