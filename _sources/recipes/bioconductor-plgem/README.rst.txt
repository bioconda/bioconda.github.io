:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plgem'
.. highlight: bash

bioconductor-plgem
==================

.. conda:recipe:: bioconductor-plgem
   :replaces_section_title:
   :noindex:

   Detect differential expression in microarray and proteomics datasets with the Power Law Global Error Model \(PLGEM\)

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/plgem.html
   :license: GPL-2
   :recipe: /`bioconductor-plgem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plgem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plgem/meta.yaml>`_
   :links: biotools: :biotools:`plgem`

   The Power Law Global Error Model \(PLGEM\) has been shown to faithfully model the variance\-versus\-mean dependence that exists in a variety of genome\-wide datasets\, including microarray and proteomics data. The use of PLGEM has been shown to improve the detection of differentially expressed genes or proteins in these datasets.


.. conda:package:: bioconductor-plgem

   |downloads_bioconductor-plgem| |docker_bioconductor-plgem|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.74.0-0</code>,  <code>1.72.0-0</code>,  <code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.74.0-0``,  ``1.72.0-0``,  ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.54.1-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-mass: 
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

      mamba install bioconductor-plgem

   and update with::

      mamba update bioconductor-plgem

  To create a new environment, run::

      mamba create --name myenvname bioconductor-plgem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plgem:<tag>

   (see `bioconductor-plgem/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plgem| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plgem.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plgem
   :alt:   (downloads)
.. |docker_bioconductor-plgem| image:: https://quay.io/repository/biocontainers/bioconductor-plgem/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plgem
.. _`bioconductor-plgem/tags`: https://quay.io/repository/biocontainers/bioconductor-plgem?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plgem";
        var versions = ["1.74.0","1.72.0","1.70.0","1.66.0","1.64.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plgem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plgem/README.html