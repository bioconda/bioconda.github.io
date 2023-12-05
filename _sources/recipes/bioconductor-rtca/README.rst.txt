:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtca'
.. highlight: bash

bioconductor-rtca
=================

.. conda:recipe:: bioconductor-rtca
   :replaces_section_title:
   :noindex:

   Open\-source toolkit to analyse data from xCELLigence System \(RTCA\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RTCA.html
   :license: LGPL-3
   :recipe: /`bioconductor-rtca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtca/meta.yaml>`_
   :links: biotools: :biotools:`rtca`, doi: :doi:`10.1016/j.compbiolchem.2013.12.004`

   Import\, analyze and visualize data from Roche\(R\) xCELLigence RTCA systems. The package imports real\-time cell electrical impedance data into R. As an alternative to commercial software shipped along the system\, the Bioconductor package RTCA provides several unique transformation \(normalization\) strategies and various visualization tools.


.. conda:package:: bioconductor-rtca

   |downloads_bioconductor-rtca| |docker_bioconductor-rtca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.1-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gtools: 
   :depends r-rcolorbrewer: 
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

      mamba install bioconductor-rtca

   and update with::

      mamba update bioconductor-rtca

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rtca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rtca:<tag>

   (see `bioconductor-rtca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rtca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtca
   :alt:   (downloads)
.. |docker_bioconductor-rtca| image:: https://quay.io/repository/biocontainers/bioconductor-rtca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtca
.. _`bioconductor-rtca/tags`: https://quay.io/repository/biocontainers/bioconductor-rtca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtca";
        var versions = ["1.54.0","1.52.0","1.50.0","1.46.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtca/README.html