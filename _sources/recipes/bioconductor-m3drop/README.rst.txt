:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-m3drop'
.. highlight: bash

bioconductor-m3drop
===================

.. conda:recipe:: bioconductor-m3drop
   :replaces_section_title:
   :noindex:

   Michaelis\-Menten Modelling of Dropouts in single\-cell RNASeq

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/M3Drop.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-m3drop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3drop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-m3drop/meta.yaml>`_
   :links: biotools: :biotools:`m3drop`, doi: :doi:`10.1002/1873-3468.12684`

   This package fits a Michaelis\-Menten model to the pattern of dropouts in single\-cell RNASeq data. This model is used as a null to identify significantly variable \(i.e. differentially expressed\) genes for use in downstream analysis\, such as clustering cells.


.. conda:package:: bioconductor-m3drop

   |downloads_bioconductor-m3drop| |docker_bioconductor-m3drop|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-scater: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bbmle: 
   :depends r-gplots: 
   :depends r-hmisc: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-numderiv: 
   :depends r-rcolorbrewer: 
   :depends r-reldist: 
   :depends r-statmod: 
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

      mamba install bioconductor-m3drop

   and update with::

      mamba update bioconductor-m3drop

  To create a new environment, run::

      mamba create --name myenvname bioconductor-m3drop

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-m3drop:<tag>

   (see `bioconductor-m3drop/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-m3drop| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-m3drop.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-m3drop
   :alt:   (downloads)
.. |docker_bioconductor-m3drop| image:: https://quay.io/repository/biocontainers/bioconductor-m3drop/status
   :target: https://quay.io/repository/biocontainers/bioconductor-m3drop
.. _`bioconductor-m3drop/tags`: https://quay.io/repository/biocontainers/bioconductor-m3drop?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-m3drop";
        var versions = ["1.32.0","1.28.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-m3drop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-m3drop/README.html