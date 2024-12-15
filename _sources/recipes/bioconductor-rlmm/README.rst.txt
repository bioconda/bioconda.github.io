:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rlmm'
.. highlight: bash

bioconductor-rlmm
=================

.. conda:recipe:: bioconductor-rlmm
   :replaces_section_title:
   :noindex:

   A Genotype Calling Algorithm for Affymetrix SNP Arrays

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RLMM.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-rlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlmm/meta.yaml>`_
   :links: biotools: :biotools:`rlmm`, doi: :doi:`10.1093/bioinformatics/bti741`

   A classification algorithm\, based on a multi\-chip\, multi\-SNP approach for Affymetrix SNP arrays. Using a large training sample where the genotype labels are known\, this aglorithm will obtain more accurate classification results on new data. RLMM is based on a robust\, linear model and uses the Mahalanobis distance for classification. The chip\-to\-chip non\-biological variation is removed through normalization. This model\-based algorithm captures the similarities across genotype groups and probes\, as well as thousands other SNPs for accurate classification. NOTE\: 100K\-Xba only at for now.


.. conda:package:: bioconductor-rlmm

   |downloads_bioconductor-rlmm| |docker_bioconductor-rlmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.68.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  </span></summary>
      

      ``1.68.0-0``,  ``1.64.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-rlmm

   and update with::

      mamba update bioconductor-rlmm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rlmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rlmm:<tag>

   (see `bioconductor-rlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rlmm
   :alt:   (downloads)
.. |docker_bioconductor-rlmm| image:: https://quay.io/repository/biocontainers/bioconductor-rlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rlmm
.. _`bioconductor-rlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-rlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rlmm";
        var versions = ["1.68.0","1.64.0","1.62.0","1.60.0","1.56.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rlmm/README.html