:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stemhypoxia'
.. highlight: bash

bioconductor-stemhypoxia
========================

.. conda:recipe:: bioconductor-stemhypoxia
   :replaces_section_title:
   :noindex:

   Differentiation of Human Embryonic Stem Cells under Hypoxia gene expression dataset by Prado\-Lopez et al. \(2010\)

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/stemHypoxia.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-stemhypoxia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stemhypoxia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stemhypoxia/meta.yaml>`_

   Expression profiling using microarray technology to prove if \'Hypoxia Promotes Efficient Differentiation of Human Embryonic Stem Cells to Functional Endothelium\' by Prado\-Lopez et al. \(2010\) Stem Cells 28\:407\-418. Full data available at Gene Expression Omnibus series GSE37761.


.. conda:package:: bioconductor-stemhypoxia

   |downloads_bioconductor-stemhypoxia| |docker_bioconductor-stemhypoxia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.33.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.33.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install bioconductor-stemhypoxia

   and update with::

      mamba update bioconductor-stemhypoxia

  To create a new environment, run::

      mamba create --name myenvname bioconductor-stemhypoxia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stemhypoxia:<tag>

   (see `bioconductor-stemhypoxia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stemhypoxia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stemhypoxia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stemhypoxia
   :alt:   (downloads)
.. |docker_bioconductor-stemhypoxia| image:: https://quay.io/repository/biocontainers/bioconductor-stemhypoxia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stemhypoxia
.. _`bioconductor-stemhypoxia/tags`: https://quay.io/repository/biocontainers/bioconductor-stemhypoxia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stemhypoxia";
        var versions = ["1.38.0","1.36.0","1.33.0","1.30.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stemhypoxia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stemhypoxia/README.html