:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cntools'
.. highlight: bash

bioconductor-cntools
====================

.. conda:recipe:: bioconductor-cntools
   :replaces_section_title:
   :noindex:

   Convert segment data into a region by sample matrix to allow for other high level computational analyses.

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CNTools.html
   :license: LGPL
   :recipe: /`bioconductor-cntools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cntools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cntools/meta.yaml>`_
   :links: biotools: :biotools:`cntools`, doi: :doi:`10.1038/nmeth.3252`

   This package provides tools to convert the output of segmentation analysis using DNAcopy to a matrix structure with overlapping segments as rows and samples as columns so that other computational analyses can be applied to segmented data


.. conda:package:: bioconductor-cntools

   |downloads_bioconductor-cntools| |docker_bioconductor-cntools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.50.0-2</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.50.0-2``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-cntools

   and update with::

      mamba update bioconductor-cntools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cntools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cntools:<tag>

   (see `bioconductor-cntools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cntools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cntools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cntools
   :alt:   (downloads)
.. |docker_bioconductor-cntools| image:: https://quay.io/repository/biocontainers/bioconductor-cntools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cntools
.. _`bioconductor-cntools/tags`: https://quay.io/repository/biocontainers/bioconductor-cntools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cntools";
        var versions = ["1.56.0","1.54.0","1.54.0","1.50.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cntools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cntools/README.html