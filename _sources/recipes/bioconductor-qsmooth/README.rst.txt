:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qsmooth'
.. highlight: bash

bioconductor-qsmooth
====================

.. conda:recipe:: bioconductor-qsmooth
   :replaces_section_title:
   :noindex:

   Smooth quantile normalization

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/qsmooth.html
   :license: GPL-3
   :recipe: /`bioconductor-qsmooth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsmooth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsmooth/meta.yaml>`_

   Smooth quantile normalization is a generalization of quantile normalization\, which is average of the two types of assumptions about the data generation process\: quantile normalization and quantile normalization between groups.


.. conda:package:: bioconductor-qsmooth

   |downloads_bioconductor-qsmooth| |docker_bioconductor-qsmooth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-hmisc: 
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

      mamba install bioconductor-qsmooth

   and update with::

      mamba update bioconductor-qsmooth

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qsmooth

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qsmooth:<tag>

   (see `bioconductor-qsmooth/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qsmooth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qsmooth.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qsmooth
   :alt:   (downloads)
.. |docker_bioconductor-qsmooth| image:: https://quay.io/repository/biocontainers/bioconductor-qsmooth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qsmooth
.. _`bioconductor-qsmooth/tags`: https://quay.io/repository/biocontainers/bioconductor-qsmooth?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qsmooth";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qsmooth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qsmooth/README.html