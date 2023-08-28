:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gem'
.. highlight: bash

bioconductor-gem
================

.. conda:recipe:: bioconductor-gem
   :replaces_section_title:
   :noindex:

   GEM\: fast association study for the interplay of Gene\, Environment and Methylation

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GEM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gem/meta.yaml>`_

   Tools for analyzing EWAS\, methQTL and GxE genome widely.


.. conda:package:: bioconductor-gem

   |downloads_bioconductor-gem| |docker_bioconductor-gem|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-gem

   and update with::

      mamba update bioconductor-gem

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gem:<tag>

   (see `bioconductor-gem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gem
   :alt:   (downloads)
.. |docker_bioconductor-gem| image:: https://quay.io/repository/biocontainers/bioconductor-gem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gem
.. _`bioconductor-gem/tags`: https://quay.io/repository/biocontainers/bioconductor-gem?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gem";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gem/README.html