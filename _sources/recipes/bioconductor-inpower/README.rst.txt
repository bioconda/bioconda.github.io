:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-inpower'
.. highlight: bash

bioconductor-inpower
====================

.. conda:recipe:: bioconductor-inpower
   :replaces_section_title:
   :noindex:

   An R package for computing the number of susceptibility SNPs

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/INPower.html
   :license: GPL-2 + file LICENSE
   :recipe: /`bioconductor-inpower <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inpower>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-inpower/meta.yaml>`_
   :links: biotools: :biotools:`inpower`, doi: :doi:`10.1038/nmeth.3252`

   An R package for computing the number of susceptibility SNPs and power of future studies


.. conda:package:: bioconductor-inpower

   |downloads_bioconductor-inpower| |docker_bioconductor-inpower|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mvtnorm: 
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

      mamba install bioconductor-inpower

   and update with::

      mamba update bioconductor-inpower

  To create a new environment, run::

      mamba create --name myenvname bioconductor-inpower

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-inpower:<tag>

   (see `bioconductor-inpower/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-inpower| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-inpower.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-inpower
   :alt:   (downloads)
.. |docker_bioconductor-inpower| image:: https://quay.io/repository/biocontainers/bioconductor-inpower/status
   :target: https://quay.io/repository/biocontainers/bioconductor-inpower
.. _`bioconductor-inpower/tags`: https://quay.io/repository/biocontainers/bioconductor-inpower?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-inpower";
        var versions = ["1.38.0","1.36.0","1.34.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-inpower/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-inpower/README.html