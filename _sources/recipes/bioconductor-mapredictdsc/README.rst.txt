:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mapredictdsc'
.. highlight: bash

bioconductor-mapredictdsc
=========================

.. conda:recipe:: bioconductor-mapredictdsc
   :replaces_section_title:
   :noindex:

   Phenotype prediction using microarray data\: approach of the best overall team in the IMPROVER Diagnostic Signature Challenge

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/maPredictDSC.html
   :license: GPL-2
   :recipe: /`bioconductor-mapredictdsc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapredictdsc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mapredictdsc/meta.yaml>`_
   :links: biotools: :biotools:`mapredictdsc`, doi: :doi:`10.1093/bioinformatics/btt492`

   This package implements the classification pipeline of the best overall team \(Team221\) in the IMPROVER Diagnostic Signature Challenge. Additional functionality is added to compare 27 combinations of data preprocessing\, feature selection and classifier types.


.. conda:package:: bioconductor-mapredictdsc

   |downloads_bioconductor-mapredictdsc| |docker_bioconductor-mapredictdsc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-gcrma: ``>=2.74.0,<2.75.0``
   :depends bioconductor-hgu133plus2.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-lungcanceracvssccgeo: ``>=1.38.0,<1.39.0``
   :depends bioconductor-roc: ``>=1.78.0,<1.79.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-class: 
   :depends r-e1071: 
   :depends r-mass: 
   :depends r-rocr: 
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

      mamba install bioconductor-mapredictdsc

   and update with::

      mamba update bioconductor-mapredictdsc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mapredictdsc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mapredictdsc:<tag>

   (see `bioconductor-mapredictdsc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mapredictdsc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mapredictdsc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mapredictdsc
   :alt:   (downloads)
.. |docker_bioconductor-mapredictdsc| image:: https://quay.io/repository/biocontainers/bioconductor-mapredictdsc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mapredictdsc
.. _`bioconductor-mapredictdsc/tags`: https://quay.io/repository/biocontainers/bioconductor-mapredictdsc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mapredictdsc";
        var versions = ["1.40.0","1.38.0","1.36.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mapredictdsc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mapredictdsc/README.html