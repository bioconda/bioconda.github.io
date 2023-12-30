:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tpp2d'
.. highlight: bash

bioconductor-tpp2d
==================

.. conda:recipe:: bioconductor-tpp2d
   :replaces_section_title:
   :noindex:

   Detection of ligand\-protein interactions from 2D thermal profiles \(DLPTP\)

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TPP2D.html
   :license: GPL-3
   :recipe: /`bioconductor-tpp2d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpp2d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpp2d/meta.yaml>`_

   Detection of ligand\-protein interactions from 2D thermal profiles \(DLPTP\)\, Performs an FDR\-controlled analysis of 2D\-TPP experiments by functional analysis of dose\-response curves across temperatures.


.. conda:package:: bioconductor-tpp2d

   |downloads_bioconductor-tpp2d| |docker_bioconductor-tpp2d|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-openxlsx: 
   :depends r-rcurl: 
   :depends r-stringr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-tpp2d

   and update with::

      mamba update bioconductor-tpp2d

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tpp2d

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tpp2d:<tag>

   (see `bioconductor-tpp2d/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tpp2d| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tpp2d.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tpp2d
   :alt:   (downloads)
.. |docker_bioconductor-tpp2d| image:: https://quay.io/repository/biocontainers/bioconductor-tpp2d/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tpp2d
.. _`bioconductor-tpp2d/tags`: https://quay.io/repository/biocontainers/bioconductor-tpp2d?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tpp2d";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tpp2d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tpp2d/README.html