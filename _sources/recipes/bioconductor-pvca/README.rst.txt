:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pvca'
.. highlight: bash

bioconductor-pvca
=================

.. conda:recipe:: bioconductor-pvca
   :replaces_section_title:
   :noindex:

   Principal Variance Component Analysis \(PVCA\)

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/pvca.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-pvca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pvca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pvca/meta.yaml>`_
   :links: biotools: :biotools:`pvca`, doi: :doi:`10.1002/9780470685983.ch12`

   This package contains the function to assess the batch sourcs by fitting all \"sources\" as random effects including two\-way interaction terms in the Mixed Model\(depends on lme4 package\) to selected principal components\, which were obtained from the original data correlation matrix. This package accompanies the book \"Batch Effects and Noise in Microarray Experiements\, chapter 12.


.. conda:package:: bioconductor-pvca

   |downloads_bioconductor-pvca| |docker_bioconductor-pvca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-vsn: ``>=3.68.0,<3.69.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-lme4: 
   :depends r-matrix: 
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

      mamba install bioconductor-pvca

   and update with::

      mamba update bioconductor-pvca

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pvca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pvca:<tag>

   (see `bioconductor-pvca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pvca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pvca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pvca
   :alt:   (downloads)
.. |docker_bioconductor-pvca| image:: https://quay.io/repository/biocontainers/bioconductor-pvca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pvca
.. _`bioconductor-pvca/tags`: https://quay.io/repository/biocontainers/bioconductor-pvca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pvca";
        var versions = ["1.40.0","1.38.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pvca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pvca/README.html