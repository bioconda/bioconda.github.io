:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gaschyhs'
.. highlight: bash

bioconductor-gaschyhs
=====================

.. conda:recipe:: bioconductor-gaschyhs
   :replaces_section_title:
   :noindex:

   ExpressionSet for response of yeast to heat shock and other environmental stresses

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/gaschYHS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gaschyhs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaschyhs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gaschyhs/meta.yaml>`_

   Data from PMID 11102521


.. conda:package:: bioconductor-gaschyhs

   |downloads_bioconductor-gaschyhs| |docker_bioconductor-gaschyhs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
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

      mamba install bioconductor-gaschyhs

   and update with::

      mamba update bioconductor-gaschyhs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gaschyhs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gaschyhs:<tag>

   (see `bioconductor-gaschyhs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gaschyhs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gaschyhs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gaschyhs
   :alt:   (downloads)
.. |docker_bioconductor-gaschyhs| image:: https://quay.io/repository/biocontainers/bioconductor-gaschyhs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gaschyhs
.. _`bioconductor-gaschyhs/tags`: https://quay.io/repository/biocontainers/bioconductor-gaschyhs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gaschyhs";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gaschyhs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gaschyhs/README.html