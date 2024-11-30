:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macat'
.. highlight: bash

bioconductor-macat
==================

.. conda:recipe:: bioconductor-macat
   :replaces_section_title:
   :noindex:

   MicroArray Chromosome Analysis Tool

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/macat.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-macat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macat/meta.yaml>`_
   :links: biotools: :biotools:`macat`

   This library contains functions to investigate links between differential gene expression and the chromosomal localization of the genes. MACAT is motivated by the common observation of phenomena involving large chromosomal regions in tumor cells. MACAT is the implementation of a statistical approach for identifying significantly differentially expressed chromosome regions. The functions have been tested on a publicly available data set about acute lymphoblastic leukemia \(Yeoh et al.Cancer Cell 2002\)\, which is provided in the library \'stjudem\'.


.. conda:package:: bioconductor-macat

   |downloads_bioconductor-macat| |docker_bioconductor-macat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  </span></summary>
      

      ``1.76.0-0``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotate: ``>=1.80.0,<1.81.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-macat

   and update with::

      mamba update bioconductor-macat

  To create a new environment, run::

      mamba create --name myenvname bioconductor-macat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-macat:<tag>

   (see `bioconductor-macat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macat
   :alt:   (downloads)
.. |docker_bioconductor-macat| image:: https://quay.io/repository/biocontainers/bioconductor-macat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macat
.. _`bioconductor-macat/tags`: https://quay.io/repository/biocontainers/bioconductor-macat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-macat";
        var versions = ["1.76.0","1.74.0","1.72.0","1.68.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macat/README.html