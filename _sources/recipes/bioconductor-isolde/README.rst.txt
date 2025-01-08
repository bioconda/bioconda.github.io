:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isolde'
.. highlight: bash

bioconductor-isolde
===================

.. conda:recipe:: bioconductor-isolde
   :replaces_section_title:
   :noindex:

   Integrative Statistics of alleLe Dependent Expression

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ISoLDE.html
   :license: GPL (>= 2.0)
   :recipe: /`bioconductor-isolde <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isolde>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isolde/meta.yaml>`_

   This package provides ISoLDE a new method for identifying imprinted genes. This method is dedicated to data arising from RNA sequencing technologies. The ISoLDE package implements original statistical methodology described in the publication below.


.. conda:package:: bioconductor-isolde

   |downloads_bioconductor-isolde| |docker_bioconductor-isolde|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-2</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-2</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-2``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
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

      mamba install bioconductor-isolde

   and update with::

      mamba update bioconductor-isolde

  To create a new environment, run::

      mamba create --name myenvname bioconductor-isolde

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isolde:<tag>

   (see `bioconductor-isolde/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isolde| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isolde.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isolde
   :alt:   (downloads)
.. |docker_bioconductor-isolde| image:: https://quay.io/repository/biocontainers/bioconductor-isolde/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isolde
.. _`bioconductor-isolde/tags`: https://quay.io/repository/biocontainers/bioconductor-isolde?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-isolde";
        var versions = ["1.34.0","1.30.0","1.30.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isolde/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isolde/README.html