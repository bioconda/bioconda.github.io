:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneticsped'
.. highlight: bash

bioconductor-geneticsped
========================

.. conda:recipe:: bioconductor-geneticsped
   :replaces_section_title:
   :noindex:

   Pedigree and genetic relationship functions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GeneticsPed.html
   :license: LGPL (>= 2.1) | file LICENSE
   :recipe: /`bioconductor-geneticsped <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneticsped>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneticsped/meta.yaml>`_

   Classes and methods for handling pedigree data. It also includes functions to calculate genetic relationship measures as relationship and inbreeding coefficients and other utilities. Note that package is not yet stable. Use it with care\!


.. conda:package:: bioconductor-geneticsped

   |downloads_bioconductor-geneticsped| |docker_bioconductor-geneticsped|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.64.0-2</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.1-0</code>,  <code>1.60.0-1</code>,  <code>1.60.0-0</code>,  <code>1.56.0-2</code>,  <code>1.56.0-1</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.64.0-2``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.1-0``,  ``1.60.0-1``,  ``1.60.0-0``,  ``1.56.0-2``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends libgfortran: 
   :depends libgfortran5: ``>=13.3.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-gdata: 
   :depends r-genetics: 
   :depends r-mass: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-geneticsped

   and update with::

      mamba update bioconductor-geneticsped

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geneticsped

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneticsped:<tag>

   (see `bioconductor-geneticsped/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneticsped| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneticsped.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geneticsped
   :alt:   (downloads)
.. |docker_bioconductor-geneticsped| image:: https://quay.io/repository/biocontainers/bioconductor-geneticsped/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneticsped
.. _`bioconductor-geneticsped/tags`: https://quay.io/repository/biocontainers/bioconductor-geneticsped?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geneticsped";
        var versions = ["1.68.0","1.64.0","1.64.0","1.64.0","1.62.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneticsped/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneticsped/README.html