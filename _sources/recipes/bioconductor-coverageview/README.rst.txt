:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-coverageview'
.. highlight: bash

bioconductor-coverageview
=========================

.. conda:recipe:: bioconductor-coverageview
   :replaces_section_title:
   :noindex:

   Coverage visualization package for R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CoverageView.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-coverageview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coverageview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-coverageview/meta.yaml>`_

   This package provides a framework for the visualization of genome coverage profiles. It can be used for ChIP\-seq experiments\, but it can be also used for genome\-wide nucleosome positioning experiments or other experiment types where it is important to have a framework in order to inspect how the coverage distributed across the genome


.. conda:package:: bioconductor-coverageview

   |downloads_bioconductor-coverageview| |docker_bioconductor-coverageview|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicalignments: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
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

      mamba install bioconductor-coverageview

   and update with::

      mamba update bioconductor-coverageview

  To create a new environment, run::

      mamba create --name myenvname bioconductor-coverageview

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-coverageview:<tag>

   (see `bioconductor-coverageview/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-coverageview| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-coverageview.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-coverageview
   :alt:   (downloads)
.. |docker_bioconductor-coverageview| image:: https://quay.io/repository/biocontainers/bioconductor-coverageview/status
   :target: https://quay.io/repository/biocontainers/bioconductor-coverageview
.. _`bioconductor-coverageview/tags`: https://quay.io/repository/biocontainers/bioconductor-coverageview?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-coverageview";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-coverageview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-coverageview/README.html