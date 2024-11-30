:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genocn'
.. highlight: bash

bioconductor-genocn
===================

.. conda:recipe:: bioconductor-genocn
   :replaces_section_title:
   :noindex:

   genotyping and copy number study tools

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/genoCN.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-genocn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genocn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genocn/meta.yaml>`_

   Simultaneous identification of copy number states and genotype calls for regions of either copy number variations or copy number aberrations


.. conda:package:: bioconductor-genocn

   |downloads_bioconductor-genocn| |docker_bioconductor-genocn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-2</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.46.0-2</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  </span></summary>
      

      ``1.54.0-1``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-2``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.46.0-2``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-genocn

   and update with::

      mamba update bioconductor-genocn

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genocn

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genocn:<tag>

   (see `bioconductor-genocn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genocn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genocn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genocn
   :alt:   (downloads)
.. |docker_bioconductor-genocn| image:: https://quay.io/repository/biocontainers/bioconductor-genocn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genocn
.. _`bioconductor-genocn/tags`: https://quay.io/repository/biocontainers/bioconductor-genocn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genocn";
        var versions = ["1.54.0","1.54.0","1.52.0","1.50.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genocn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genocn/README.html