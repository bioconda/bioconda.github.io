:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidsinglecell'
.. highlight: bash

r-acidsinglecell
================

.. conda:recipe:: r-acidsinglecell
   :replaces_section_title:
   :noindex:

   Toolkit for single\-cell RNA\-seq analysis that extends the functionality of SingleCellExperiment.

   :homepage: https://r.acidgenomics.com/packages/acidsinglecell/
   :developer docs: https://github.com/acidgenomics/r-acidsinglecell
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidsinglecell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidsinglecell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidsinglecell/meta.yaml>`_

   


.. conda:package:: r-acidsinglecell

   |downloads_r-acidsinglecell| |docker_r-acidsinglecell|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.6-0</code>,  <code>0.3.5-2</code>,  <code>0.3.5-1</code>,  <code>0.3.5-0</code>,  <code>0.3.4-1</code>,  <code>0.3.4-0</code>,  <code>0.3.3-1</code>,  <code>0.3.3-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.3.6-0``,  ``0.3.5-2``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-1``,  ``0.3.3-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.56.0``
   :depends bioconductor-biocgenerics: ``>=0.42.0``
   :depends bioconductor-biocio: ``>=1.6.0``
   :depends bioconductor-biocparallel: ``>=1.30.0``
   :depends bioconductor-deseq2: ``>=1.36.0``
   :depends bioconductor-dropletutils: ``>=1.16.0``
   :depends bioconductor-edger: ``>=3.38.4``
   :depends bioconductor-iranges: ``>=2.30.1``
   :depends bioconductor-s4vectors: ``>=0.34.0``
   :depends bioconductor-scuttle: ``>=1.6.3``
   :depends bioconductor-singlecellexperiment: ``>=1.18.0``
   :depends bioconductor-summarizedexperiment: ``>=1.26.0``
   :depends r-acidbase: ``>=0.6.8``
   :depends r-acidcli: ``>=0.2.4``
   :depends r-acidexperiment: ``>=0.4.4``
   :depends r-acidgenerics: ``>=0.6.4``
   :depends r-acidgenomes: ``>=0.4.4``
   :depends r-acidplyr: ``>=0.3.2``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-goalie: ``>=0.6.6``
   :depends r-matrix: ``>=1.5.1``
   :depends r-pipette: ``>=0.10.0``
   :depends r-stringi: ``>=1.7.8``
   :depends r-syntactic: ``>=0.6.3``
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

      mamba install r-acidsinglecell

   and update with::

      mamba update r-acidsinglecell

  To create a new environment, run::

      mamba create --name myenvname r-acidsinglecell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-acidsinglecell:<tag>

   (see `r-acidsinglecell/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidsinglecell| image:: https://img.shields.io/conda/dn/bioconda/r-acidsinglecell.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidsinglecell
   :alt:   (downloads)
.. |docker_r-acidsinglecell| image:: https://quay.io/repository/biocontainers/r-acidsinglecell/status
   :target: https://quay.io/repository/biocontainers/r-acidsinglecell
.. _`r-acidsinglecell/tags`: https://quay.io/repository/biocontainers/r-acidsinglecell?tab=tags


.. raw:: html

    <script>
        var package = "r-acidsinglecell";
        var versions = ["0.3.6","0.3.5","0.3.5","0.3.5","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidsinglecell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidsinglecell/README.html