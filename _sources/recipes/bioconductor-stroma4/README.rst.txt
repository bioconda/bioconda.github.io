:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stroma4'
.. highlight: bash

bioconductor-stroma4
====================

.. conda:recipe:: bioconductor-stroma4
   :replaces_section_title:
   :noindex:

   Assign Properties to TNBC Patients

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/STROMA4.html
   :license: GPL-3
   :recipe: /`bioconductor-stroma4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stroma4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stroma4/meta.yaml>`_

   This package estimates four stromal properties identified in TNBC patients in each patient of a gene expression datasets. These stromal property assignments can be combined to subtype patients. These four stromal properties were identified in Triple negative breast cancer \(TNBC\) patients and represent the presence of different cells in the stroma\: T\-cells \(T\)\, B\-cells \(B\)\, stromal infiltrating epithelial cells \(E\)\, and desmoplasia \(D\). Additionally this package can also be used to estimate generative properties for the Lehmann subtypes\, an alternative TNBC subtyping scheme \(PMID\: 21633166\).


.. conda:package:: bioconductor-stroma4

   |downloads_bioconductor-stroma4| |docker_bioconductor-stroma4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.1-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-matrixstats: 
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

      mamba install bioconductor-stroma4

   and update with::

      mamba update bioconductor-stroma4

  To create a new environment, run::

      mamba create --name myenvname bioconductor-stroma4

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stroma4:<tag>

   (see `bioconductor-stroma4/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stroma4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stroma4.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stroma4
   :alt:   (downloads)
.. |docker_bioconductor-stroma4| image:: https://quay.io/repository/biocontainers/bioconductor-stroma4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stroma4
.. _`bioconductor-stroma4/tags`: https://quay.io/repository/biocontainers/bioconductor-stroma4?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stroma4";
        var versions = ["1.24.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stroma4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stroma4/README.html