:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macarron'
.. highlight: bash

bioconductor-macarron
=====================

.. conda:recipe:: bioconductor-macarron
   :replaces_section_title:
   :noindex:

   Prioritization of potentially bioactive metabolic features from epidemiological and environmental metabolomics datasets

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/Macarron.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-macarron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macarron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macarron/meta.yaml>`_

   Macarron is a workflow for the prioritization of potentially bioactive metabolites from metabolomics experiments. Prioritization integrates strengths of evidences of bioactivity such as covariation with a known metabolite\, abundance relative to a known metabolite and association with an environmental or phenotypic indicator of bioactivity. Broadly\, the workflow consists of stratified clustering of metabolic spectral features which co\-vary in abundance in a condition\, transfer of functional annotations\, estimation of relative abundance and differential abundance analysis to identify associations between features and phenotype\/condition.


.. conda:package:: bioconductor-macarron

   |downloads_bioconductor-macarron| |docker_bioconductor-macarron|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-maaslin2: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dynamictreecut: 
   :depends r-ff: 
   :depends r-logging: 
   :depends r-plyr: 
   :depends r-psych: 
   :depends r-rcurl: 
   :depends r-rjsonio: 
   :depends r-wgcna: 
   :depends r-xml2: 
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

      mamba install bioconductor-macarron

   and update with::

      mamba update bioconductor-macarron

  To create a new environment, run::

      mamba create --name myenvname bioconductor-macarron

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-macarron:<tag>

   (see `bioconductor-macarron/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macarron| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macarron.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macarron
   :alt:   (downloads)
.. |docker_bioconductor-macarron| image:: https://quay.io/repository/biocontainers/bioconductor-macarron/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macarron
.. _`bioconductor-macarron/tags`: https://quay.io/repository/biocontainers/bioconductor-macarron?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-macarron";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macarron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macarron/README.html