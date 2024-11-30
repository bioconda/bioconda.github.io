:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminaio'
.. highlight: bash

bioconductor-illuminaio
=======================

.. conda:recipe:: bioconductor-illuminaio
   :replaces_section_title:
   :noindex:

   Parsing Illumina Microarray Output Files

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/illuminaio.html
   :license: GPL-2
   :recipe: /`bioconductor-illuminaio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminaio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminaio/meta.yaml>`_
   :links: biotools: :biotools:`illuminaio`

   Tools for parsing Illumina\'s microarray output files\, including IDAT.


.. conda:package:: bioconductor-illuminaio

   |downloads_bioconductor-illuminaio| |docker_bioconductor-illuminaio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.44.0-2</code>,  <code>0.44.0-1</code>,  <code>0.44.0-0</code>,  <code>0.42.0-0</code>,  <code>0.40.0-2</code>,  <code>0.40.0-1</code>,  <code>0.40.0-0</code>,  <code>0.36.0-2</code>,  <code>0.36.0-1</code>,  </span></summary>
      

      ``0.44.0-2``,  ``0.44.0-1``,  ``0.44.0-0``,  ``0.42.0-0``,  ``0.40.0-2``,  ``0.40.0-1``,  ``0.40.0-0``,  ``0.36.0-2``,  ``0.36.0-1``,  ``0.36.0-0``,  ``0.34.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-0``,  ``0.26.0-1``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-0``,  ``0.20.0-0``,  ``0.18.0-0``,  ``0.14.0-0``,  ``0.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-base64: 
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

      mamba install bioconductor-illuminaio

   and update with::

      mamba update bioconductor-illuminaio

  To create a new environment, run::

      mamba create --name myenvname bioconductor-illuminaio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminaio:<tag>

   (see `bioconductor-illuminaio/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminaio| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminaio.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminaio
   :alt:   (downloads)
.. |docker_bioconductor-illuminaio| image:: https://quay.io/repository/biocontainers/bioconductor-illuminaio/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminaio
.. _`bioconductor-illuminaio/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminaio?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminaio";
        var versions = ["0.44.0","0.44.0","0.44.0","0.42.0","0.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminaio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminaio/README.html