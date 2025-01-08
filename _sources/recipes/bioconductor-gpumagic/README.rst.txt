:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gpumagic'
.. highlight: bash

bioconductor-gpumagic
=====================

.. conda:recipe:: bioconductor-gpumagic
   :replaces_section_title:
   :noindex:

   An openCL compiler with the capacity to compile R functions and run the code on GPU

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gpuMagic.html
   :license: GPL-3
   :recipe: /`bioconductor-gpumagic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpumagic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gpumagic/meta.yaml>`_

   The package aims to help users write openCL code with little or no effort. It is able to compile an user\-defined R function and run it on a device such as a CPU or a GPU. The user can also write and run their openCL code directly by calling .kernel function.


.. conda:package:: bioconductor-gpumagic

   |downloads_bioconductor-gpumagic| |docker_bioconductor-gpumagic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-deriv: 
   :depends r-desctools: 
   :depends r-digest: 
   :depends r-pryr: 
   :depends r-rcpp: 
   :depends r-stringr: 
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

      mamba install bioconductor-gpumagic

   and update with::

      mamba update bioconductor-gpumagic

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gpumagic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gpumagic:<tag>

   (see `bioconductor-gpumagic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gpumagic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gpumagic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gpumagic
   :alt:   (downloads)
.. |docker_bioconductor-gpumagic| image:: https://quay.io/repository/biocontainers/bioconductor-gpumagic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gpumagic
.. _`bioconductor-gpumagic/tags`: https://quay.io/repository/biocontainers/bioconductor-gpumagic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gpumagic";
        var versions = ["1.22.0","1.18.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gpumagic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gpumagic/README.html