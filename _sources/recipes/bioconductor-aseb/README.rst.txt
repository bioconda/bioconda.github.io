:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aseb'
.. highlight: bash

bioconductor-aseb
=================

.. conda:recipe:: bioconductor-aseb
   :replaces_section_title:
   :noindex:

   Predict Acetylated Lysine Sites

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ASEB.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-aseb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aseb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aseb/meta.yaml>`_
   :links: biotools: :biotools:`aseb`, doi: :doi:`10.1093/nar/gks437`

   ASEB is an R package to predict lysine sites that can be acetylated by a specific KAT\-family.


.. conda:package:: bioconductor-aseb

   |downloads_bioconductor-aseb| |docker_bioconductor-aseb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.46.3-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-2</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.38.0-2</code>,  <code>1.38.0-1</code>,  </span></summary>
      

      ``1.50.0-1``,  ``1.50.0-0``,  ``1.46.3-0``,  ``1.44.0-0``,  ``1.42.0-2``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.38.0-2``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-aseb

   and update with::

      mamba update bioconductor-aseb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-aseb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aseb:<tag>

   (see `bioconductor-aseb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aseb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aseb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aseb
   :alt:   (downloads)
.. |docker_bioconductor-aseb| image:: https://quay.io/repository/biocontainers/bioconductor-aseb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aseb
.. _`bioconductor-aseb/tags`: https://quay.io/repository/biocontainers/bioconductor-aseb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aseb";
        var versions = ["1.50.0","1.50.0","1.46.3","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aseb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aseb/README.html