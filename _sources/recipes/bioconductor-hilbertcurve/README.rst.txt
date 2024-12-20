:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hilbertcurve'
.. highlight: bash

bioconductor-hilbertcurve
=========================

.. conda:recipe:: bioconductor-hilbertcurve
   :replaces_section_title:
   :noindex:

   Making 2D Hilbert Curve

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/HilbertCurve.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hilbertcurve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertcurve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertcurve/meta.yaml>`_

   Hilbert curve is a type of space\-filling curves that fold one dimensional axis into a two dimensional space\, but with still preserves the locality. This package aims to provide an easy and flexible way to visualize data through Hilbert curve.


.. conda:package:: bioconductor-hilbertcurve

   |downloads_bioconductor-hilbertcurve| |docker_bioconductor-hilbertcurve|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``2.0.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: ``>=0.3.3``
   :depends r-png: 
   :depends r-polylabelr: 
   :depends r-rcpp: 
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

      mamba install bioconductor-hilbertcurve

   and update with::

      mamba update bioconductor-hilbertcurve

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hilbertcurve

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hilbertcurve:<tag>

   (see `bioconductor-hilbertcurve/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hilbertcurve| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hilbertcurve.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hilbertcurve
   :alt:   (downloads)
.. |docker_bioconductor-hilbertcurve| image:: https://quay.io/repository/biocontainers/bioconductor-hilbertcurve/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hilbertcurve
.. _`bioconductor-hilbertcurve/tags`: https://quay.io/repository/biocontainers/bioconductor-hilbertcurve?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hilbertcurve";
        var versions = ["2.0.0","1.32.0","1.30.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hilbertcurve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hilbertcurve/README.html