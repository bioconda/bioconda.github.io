:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fletcher2013b'
.. highlight: bash

bioconductor-fletcher2013b
==========================

.. conda:recipe:: bioconductor-fletcher2013b
   :replaces_section_title:
   :noindex:

   Master regulators of FGFR2 signalling and breast cancer risk

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/Fletcher2013b.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-fletcher2013b <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fletcher2013b>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fletcher2013b/meta.yaml>`_

   This package reproduces the systems biology analysis for the data in package Fletcher2013a using RTN.


.. conda:package:: bioconductor-fletcher2013b

   |downloads_bioconductor-fletcher2013b| |docker_bioconductor-fletcher2013b|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-fletcher2013a: ``>=1.36.0,<1.37.0``
   :depends bioconductor-reder: ``>=2.4.0,<2.5.0``
   :depends bioconductor-rtn: ``>=2.24.0,<2.25.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
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

      mamba install bioconductor-fletcher2013b

   and update with::

      mamba update bioconductor-fletcher2013b

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fletcher2013b

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fletcher2013b:<tag>

   (see `bioconductor-fletcher2013b/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fletcher2013b| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fletcher2013b.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fletcher2013b
   :alt:   (downloads)
.. |docker_bioconductor-fletcher2013b| image:: https://quay.io/repository/biocontainers/bioconductor-fletcher2013b/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fletcher2013b
.. _`bioconductor-fletcher2013b/tags`: https://quay.io/repository/biocontainers/bioconductor-fletcher2013b?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fletcher2013b";
        var versions = ["1.36.0","1.34.0","1.30.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fletcher2013b/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fletcher2013b/README.html