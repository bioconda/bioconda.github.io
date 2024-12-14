:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-proteus-bartongroup'
.. highlight: bash

r-proteus-bartongroup
=====================

.. conda:recipe:: r-proteus-bartongroup
   :replaces_section_title:
   :noindex:

   R package for analysing proteomics data

   :homepage: https://github.com/bartongroup/Proteus
   :license: MIT / MIT
   :recipe: /`r-proteus-bartongroup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-proteus-bartongroup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-proteus-bartongroup/meta.yaml>`_

   Proteus is an R package for downstream analysis of MaxQuant output.
   The input for Proteus is the evidence file. Evidence data are aggregated
   into peptides and then into proteins. Proteus offers many visualisation
   and data analysis tools both at peptide and protein level. In particular
   it allows simple differential expression using limma.



.. conda:package:: r-proteus-bartongroup

   |downloads_r-proteus-bartongroup| |docker_r-proteus-bartongroup|

   :versions:
      
      

      ``0.2.16-2``,  ``0.2.16-1``,  ``0.2.16-0``

      

   
   :depends bioconductor-limma: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggdendro: 
   :depends r-ggextra: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-hexbin: 
   :depends r-reshape2: 
   :depends r-shiny: 
   :depends r-viridis: 
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

      mamba install r-proteus-bartongroup

   and update with::

      mamba update r-proteus-bartongroup

  To create a new environment, run::

      mamba create --name myenvname r-proteus-bartongroup

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-proteus-bartongroup:<tag>

   (see `r-proteus-bartongroup/tags`_ for valid values for ``<tag>``)


.. |downloads_r-proteus-bartongroup| image:: https://img.shields.io/conda/dn/bioconda/r-proteus-bartongroup.svg?style=flat
   :target: https://anaconda.org/bioconda/r-proteus-bartongroup
   :alt:   (downloads)
.. |docker_r-proteus-bartongroup| image:: https://quay.io/repository/biocontainers/r-proteus-bartongroup/status
   :target: https://quay.io/repository/biocontainers/r-proteus-bartongroup
.. _`r-proteus-bartongroup/tags`: https://quay.io/repository/biocontainers/r-proteus-bartongroup?tab=tags


.. raw:: html

    <script>
        var package = "r-proteus-bartongroup";
        var versions = ["0.2.16","0.2.16","0.2.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-proteus-bartongroup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-proteus-bartongroup/README.html