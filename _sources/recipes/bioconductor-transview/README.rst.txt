:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-transview'
.. highlight: bash

bioconductor-transview
======================

.. conda:recipe:: bioconductor-transview
   :replaces_section_title:
   :noindex:

   Read density map construction and accession. Visualization of ChIPSeq and RNASeq data sets

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TransView.html
   :license: GPL-3
   :recipe: /`bioconductor-transview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-transview/meta.yaml>`_
   :links: biotools: :biotools:`transview`, doi: :doi:`10.1038/nmeth.3252`

   This package provides efficient tools to generate\, access and display read densities of sequencing based data sets such as from RNA\-Seq and ChIP\-Seq.


.. conda:package:: bioconductor-transview

   |downloads_bioconductor-transview| |docker_bioconductor-transview|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.38.0-2</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.38.0-2``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rhtslib: ``>=2.4.0,<2.5.0``
   :depends bioconductor-rhtslib: ``>=2.4.0,<2.5.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gplots: 
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

      mamba install bioconductor-transview

   and update with::

      mamba update bioconductor-transview

  To create a new environment, run::

      mamba create --name myenvname bioconductor-transview

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-transview:<tag>

   (see `bioconductor-transview/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-transview| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-transview.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-transview
   :alt:   (downloads)
.. |docker_bioconductor-transview| image:: https://quay.io/repository/biocontainers/bioconductor-transview/status
   :target: https://quay.io/repository/biocontainers/bioconductor-transview
.. _`bioconductor-transview/tags`: https://quay.io/repository/biocontainers/bioconductor-transview?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-transview";
        var versions = ["1.46.0","1.44.0","1.42.0","1.42.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-transview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-transview/README.html