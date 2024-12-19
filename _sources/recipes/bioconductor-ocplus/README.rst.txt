:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ocplus'
.. highlight: bash

bioconductor-ocplus
===================

.. conda:recipe:: bioconductor-ocplus
   :replaces_section_title:
   :noindex:

   Operating characteristics plus sample size and local fdr for microarray experiments

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/OCplus.html
   :license: LGPL
   :recipe: /`bioconductor-ocplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ocplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ocplus/meta.yaml>`_

   This package allows to characterize the operating characteristics of a microarray experiment\, i.e. the trade\-off between false discovery rate and the power to detect truly regulated genes. The package includes tools both for planned experiments \(for sample size assessment\) and for already collected data \(identification of differentially expressed genes\).


.. conda:package:: bioconductor-ocplus

   |downloads_bioconductor-ocplus| |docker_bioconductor-ocplus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.80.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-1</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  </span></summary>
      

      ``1.80.0-0``,  ``1.76.0-0``,  ``1.74.0-0``,  ``1.72.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.64.0-1``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.56.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-multtest: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-interp: 
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

      mamba install bioconductor-ocplus

   and update with::

      mamba update bioconductor-ocplus

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ocplus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ocplus:<tag>

   (see `bioconductor-ocplus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ocplus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ocplus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ocplus
   :alt:   (downloads)
.. |docker_bioconductor-ocplus| image:: https://quay.io/repository/biocontainers/bioconductor-ocplus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ocplus
.. _`bioconductor-ocplus/tags`: https://quay.io/repository/biocontainers/bioconductor-ocplus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ocplus";
        var versions = ["1.80.0","1.76.0","1.74.0","1.72.0","1.68.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ocplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ocplus/README.html