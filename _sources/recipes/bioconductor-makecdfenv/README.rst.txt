:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-makecdfenv'
.. highlight: bash

bioconductor-makecdfenv
=======================

.. conda:recipe:: bioconductor-makecdfenv
   :replaces_section_title:
   :noindex:

   CDF Environment Maker

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/makecdfenv.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-makecdfenv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-makecdfenv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-makecdfenv/meta.yaml>`_
   :links: biotools: :biotools:`makecdfenv`, doi: :doi:`10.1186/1471-2105-13-56`

   This package has two functions. One reads a Affymetrix chip description file \(CDF\) and creates a hash table environment containing the location\/probe set membership mapping. The other creates a package that automatically loads that environment.


.. conda:package:: bioconductor-makecdfenv

   |downloads_bioconductor-makecdfenv| |docker_bioconductor-makecdfenv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.82.0-0</code>,  <code>1.78.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-1</code>,  <code>1.74.0-0</code>,  <code>1.70.0-2</code>,  <code>1.70.0-1</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  </span></summary>
      

      ``1.82.0-0``,  ``1.78.0-0``,  ``1.76.0-0``,  ``1.74.0-1``,  ``1.74.0-0``,  ``1.70.0-2``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0``
   :depends bioconductor-affy: ``>=1.84.0,<1.85.0a0``
   :depends bioconductor-affyio: ``>=1.76.0,<1.77.0``
   :depends bioconductor-affyio: ``>=1.76.0,<1.77.0a0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-makecdfenv

   and update with::

      mamba update bioconductor-makecdfenv

  To create a new environment, run::

      mamba create --name myenvname bioconductor-makecdfenv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-makecdfenv:<tag>

   (see `bioconductor-makecdfenv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-makecdfenv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-makecdfenv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-makecdfenv
   :alt:   (downloads)
.. |docker_bioconductor-makecdfenv| image:: https://quay.io/repository/biocontainers/bioconductor-makecdfenv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-makecdfenv
.. _`bioconductor-makecdfenv/tags`: https://quay.io/repository/biocontainers/bioconductor-makecdfenv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-makecdfenv";
        var versions = ["1.82.0","1.78.0","1.76.0","1.74.0","1.74.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-makecdfenv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-makecdfenv/README.html