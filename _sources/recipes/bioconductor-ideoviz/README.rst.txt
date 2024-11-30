:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ideoviz'
.. highlight: bash

bioconductor-ideoviz
====================

.. conda:recipe:: bioconductor-ideoviz
   :replaces_section_title:
   :noindex:

   Plots data \(continuous\/discrete\) along chromosomal ideogram

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/IdeoViz.html
   :license: GPL-2
   :recipe: /`bioconductor-ideoviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ideoviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ideoviz/meta.yaml>`_
   :links: biotools: :biotools:`ideoviz`, doi: :doi:`10.1038/nmeth.3252`

   Plots data associated with arbitrary genomic intervals along chromosomal ideogram.


.. conda:package:: bioconductor-ideoviz

   |downloads_bioconductor-ideoviz| |docker_bioconductor-ideoviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.37.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.37.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-ideoviz

   and update with::

      mamba update bioconductor-ideoviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ideoviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ideoviz:<tag>

   (see `bioconductor-ideoviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ideoviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ideoviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ideoviz
   :alt:   (downloads)
.. |docker_bioconductor-ideoviz| image:: https://quay.io/repository/biocontainers/bioconductor-ideoviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ideoviz
.. _`bioconductor-ideoviz/tags`: https://quay.io/repository/biocontainers/bioconductor-ideoviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ideoviz";
        var versions = ["1.37.0","1.36.0","1.34.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ideoviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ideoviz/README.html