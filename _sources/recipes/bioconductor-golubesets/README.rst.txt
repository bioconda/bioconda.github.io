:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-golubesets'
.. highlight: bash

bioconductor-golubesets
=======================

.. conda:recipe:: bioconductor-golubesets
   :replaces_section_title:
   :noindex:

   exprSets for golub leukemia data

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/golubEsets.html
   :license: LGPL
   :recipe: /`bioconductor-golubesets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-golubesets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-golubesets/meta.yaml>`_

   representation of public golub data with some covariate data of provenance unknown to the maintainer at present\; now employs ExpressionSet format


.. conda:package:: bioconductor-golubesets

   |downloads_bioconductor-golubesets| |docker_bioconductor-golubesets|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
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

      mamba install bioconductor-golubesets

   and update with::

      mamba update bioconductor-golubesets

  To create a new environment, run::

      mamba create --name myenvname bioconductor-golubesets

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-golubesets:<tag>

   (see `bioconductor-golubesets/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-golubesets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-golubesets.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-golubesets
   :alt:   (downloads)
.. |docker_bioconductor-golubesets| image:: https://quay.io/repository/biocontainers/bioconductor-golubesets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-golubesets
.. _`bioconductor-golubesets/tags`: https://quay.io/repository/biocontainers/bioconductor-golubesets?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-golubesets";
        var versions = ["1.44.0","1.42.0","1.40.0","1.36.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-golubesets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-golubesets/README.html