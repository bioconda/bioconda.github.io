:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oct4'
.. highlight: bash

bioconductor-oct4
=================

.. conda:recipe:: bioconductor-oct4
   :replaces_section_title:
   :noindex:

   Conditional knockdown of OCT4 in mouse ESCs

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/oct4.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-oct4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oct4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oct4/meta.yaml>`_

   This package provides the output of running Salmon on a set of 12 RNA\-seq samples from King \& Klose\, \"The pioneer factor OCT4 requires the chromatin remodeller BRG1 to support gene regulatory element function in mouse embryonic stem cells\"\, published in eLIFE\, March 2017. For details on version numbers and how the samples were processed see the package vignette.


.. conda:package:: bioconductor-oct4

   |downloads_bioconductor-oct4| |docker_bioconductor-oct4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.13.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.13.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
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

      mamba install bioconductor-oct4

   and update with::

      mamba update bioconductor-oct4

  To create a new environment, run::

      mamba create --name myenvname bioconductor-oct4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oct4:<tag>

   (see `bioconductor-oct4/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oct4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oct4.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oct4
   :alt:   (downloads)
.. |docker_bioconductor-oct4| image:: https://quay.io/repository/biocontainers/bioconductor-oct4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oct4
.. _`bioconductor-oct4/tags`: https://quay.io/repository/biocontainers/bioconductor-oct4?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oct4";
        var versions = ["1.16.0","1.13.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oct4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oct4/README.html