:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wrench'
.. highlight: bash

bioconductor-wrench
===================

.. conda:recipe:: bioconductor-wrench
   :replaces_section_title:
   :noindex:

   Wrench normalization for sparse count data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Wrench.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-wrench <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wrench>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wrench/meta.yaml>`_

   Wrench is a package for normalization sparse genomic count data\, like that arising from 16s metagenomic surveys.


.. conda:package:: bioconductor-wrench

   |downloads_bioconductor-wrench| |docker_bioconductor-wrench|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-locfit: 
   :depends r-matrixstats: 
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

      mamba install bioconductor-wrench

   and update with::

      mamba update bioconductor-wrench

  To create a new environment, run::

      mamba create --name myenvname bioconductor-wrench

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wrench:<tag>

   (see `bioconductor-wrench/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wrench| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wrench.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wrench
   :alt:   (downloads)
.. |docker_bioconductor-wrench| image:: https://quay.io/repository/biocontainers/bioconductor-wrench/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wrench
.. _`bioconductor-wrench/tags`: https://quay.io/repository/biocontainers/bioconductor-wrench?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-wrench";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wrench/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wrench/README.html