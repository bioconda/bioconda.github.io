:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dlbcl'
.. highlight: bash

bioconductor-dlbcl
==================

.. conda:recipe:: bioconductor-dlbcl
   :replaces_section_title:
   :noindex:

   Diffuse large B\-cell lymphoma expression data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/DLBCL.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-dlbcl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dlbcl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dlbcl/meta.yaml>`_

   This package provides additional expression data on diffuse large B\-cell lymphomas for the BioNet package.


.. conda:package:: bioconductor-dlbcl

   |downloads_bioconductor-dlbcl| |docker_bioconductor-dlbcl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.1-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  </span></summary>
      

      ``1.42.1-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
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

      mamba install bioconductor-dlbcl

   and update with::

      mamba update bioconductor-dlbcl

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dlbcl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dlbcl:<tag>

   (see `bioconductor-dlbcl/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dlbcl| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dlbcl.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dlbcl
   :alt:   (downloads)
.. |docker_bioconductor-dlbcl| image:: https://quay.io/repository/biocontainers/bioconductor-dlbcl/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dlbcl
.. _`bioconductor-dlbcl/tags`: https://quay.io/repository/biocontainers/bioconductor-dlbcl?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dlbcl";
        var versions = ["1.42.1","1.40.0","1.38.0","1.34.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dlbcl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dlbcl/README.html