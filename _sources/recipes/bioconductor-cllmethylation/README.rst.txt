:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cllmethylation'
.. highlight: bash

bioconductor-cllmethylation
===========================

.. conda:recipe:: bioconductor-cllmethylation
   :replaces_section_title:
   :noindex:

   Methylation data of primary CLL samples in PACE project

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/CLLmethylation.html
   :license: LGPL
   :recipe: /`bioconductor-cllmethylation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cllmethylation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cllmethylation/meta.yaml>`_

   The package includes DNA methylation data for the primary Chronic Lymphocytic Leukemia samples included in the Primary Blood Cancer Encyclopedia \(PACE\) project. Raw data from the 450k DNA methylation arrays is stored in the European Genome\-Phenome Archive \(EGA\) under accession number EGAS0000100174. For more information concerning the project please refer to the paper \"Drug\-perturbation\-based stratification of blood cancer\" by Dietrich S\, Oles M\, Lu J et al.\, J. Clin. Invest. \(2018\) and R\/Bioconductor package BloodCancerMultiOmics2017.


.. conda:package:: bioconductor-cllmethylation

   |downloads_bioconductor-cllmethylation| |docker_bioconductor-cllmethylation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-cllmethylation

   and update with::

      mamba update bioconductor-cllmethylation

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cllmethylation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cllmethylation:<tag>

   (see `bioconductor-cllmethylation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cllmethylation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cllmethylation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cllmethylation
   :alt:   (downloads)
.. |docker_bioconductor-cllmethylation| image:: https://quay.io/repository/biocontainers/bioconductor-cllmethylation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cllmethylation
.. _`bioconductor-cllmethylation/tags`: https://quay.io/repository/biocontainers/bioconductor-cllmethylation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cllmethylation";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cllmethylation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cllmethylation/README.html