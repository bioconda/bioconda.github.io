:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pfamanalyzer'
.. highlight: bash

bioconductor-pfamanalyzer
=========================

.. conda:recipe:: bioconductor-pfamanalyzer
   :replaces_section_title:
   :noindex:

   Identification of domain isotypes in pfam data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/pfamAnalyzeR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pfamanalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pfamanalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pfamanalyzer/meta.yaml>`_

   Protein domains is one of the most import annoation of proteins we have with the Pfam database\/tool being \(by far\) the most used tool. This R package enables the user to read the pfam prediction from both webserver and stand\-alone runs into R. We have recently shown most human protein domains exist as multiple distinct variants termed domain isotypes. Different domain isotypes are used in a cell\, tissue\, and disease\-specific manner. Accordingly\, we find that domain isotypes\, compared to each other\, modulate\, or abolish the functionality of a protein domain. This R package enables the identification and classification of such domain isotypes from Pfam data.


.. conda:package:: bioconductor-pfamanalyzer

   |downloads_bioconductor-pfamanalyzer| |docker_bioconductor-pfamanalyzer|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-readr: 
   :depends r-stringr: 
   :depends r-tibble: 
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

      mamba install bioconductor-pfamanalyzer

   and update with::

      mamba update bioconductor-pfamanalyzer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pfamanalyzer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pfamanalyzer:<tag>

   (see `bioconductor-pfamanalyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pfamanalyzer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pfamanalyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pfamanalyzer
   :alt:   (downloads)
.. |docker_bioconductor-pfamanalyzer| image:: https://quay.io/repository/biocontainers/bioconductor-pfamanalyzer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pfamanalyzer
.. _`bioconductor-pfamanalyzer/tags`: https://quay.io/repository/biocontainers/bioconductor-pfamanalyzer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pfamanalyzer";
        var versions = ["1.2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pfamanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pfamanalyzer/README.html