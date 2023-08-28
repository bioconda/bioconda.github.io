:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-peca'
.. highlight: bash

bioconductor-peca
=================

.. conda:recipe:: bioconductor-peca
   :replaces_section_title:
   :noindex:

   Probe\-level Expression Change Averaging

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PECA.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-peca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peca/meta.yaml>`_
   :links: biotools: :biotools:`peca`, doi: :doi:`10.1007/978-1-4939-6518-2_11`

   Calculates Probe\-level Expression Change Averages \(PECA\) to identify differential expression in Affymetrix gene expression microarray studies or in proteomic studies using peptide\-level mesurements respectively.


.. conda:package:: bioconductor-peca

   |downloads_bioconductor-peca| |docker_bioconductor-peca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.78.0,<1.79.0``
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rots: ``>=1.28.0,<1.29.0``
   :depends r-aroma.affymetrix: 
   :depends r-aroma.core: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-peca

   and update with::

      mamba update bioconductor-peca

  To create a new environment, run::

      mamba create --name myenvname bioconductor-peca

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-peca:<tag>

   (see `bioconductor-peca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-peca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-peca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-peca
   :alt:   (downloads)
.. |docker_bioconductor-peca| image:: https://quay.io/repository/biocontainers/bioconductor-peca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-peca
.. _`bioconductor-peca/tags`: https://quay.io/repository/biocontainers/bioconductor-peca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-peca";
        var versions = ["1.36.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-peca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-peca/README.html