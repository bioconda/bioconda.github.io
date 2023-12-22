:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsri'
.. highlight: bash

bioconductor-gsri
=================

.. conda:recipe:: bioconductor-gsri
   :replaces_section_title:
   :noindex:

   Gene Set Regulation Index

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GSRI.html
   :license: GPL-3
   :recipe: /`bioconductor-gsri <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsri>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsri/meta.yaml>`_
   :links: biotools: :biotools:`gsri`, doi: :doi:`10.1038/nmeth.3252`

   The GSRI package estimates the number of differentially expressed genes in gene sets\, utilizing the concept of the Gene Set Regulation Index \(GSRI\).


.. conda:package:: bioconductor-gsri

   |downloads_bioconductor-gsri| |docker_bioconductor-gsri|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.50.0-0</code>,  <code>2.48.0-0</code>,  <code>2.46.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.0-0</code>,  <code>2.38.0-1</code>,  <code>2.38.0-0</code>,  <code>2.36.0-0</code>,  <code>2.34.0-0</code>,  </span></summary>
      

      ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-0``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.36.0-0``,  ``2.34.0-0``,  ``2.32.0-1``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genefilter: ``>=1.84.0,<1.85.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends bioconductor-les: ``>=1.52.0,<1.53.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fdrtool: 
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

      mamba install bioconductor-gsri

   and update with::

      mamba update bioconductor-gsri

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gsri

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsri:<tag>

   (see `bioconductor-gsri/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsri| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsri.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsri
   :alt:   (downloads)
.. |docker_bioconductor-gsri| image:: https://quay.io/repository/biocontainers/bioconductor-gsri/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsri
.. _`bioconductor-gsri/tags`: https://quay.io/repository/biocontainers/bioconductor-gsri?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gsri";
        var versions = ["2.50.0","2.48.0","2.46.0","2.42.0","2.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsri/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsri/README.html