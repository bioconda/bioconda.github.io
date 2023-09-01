:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-terratcgadata'
.. highlight: bash

bioconductor-terratcgadata
==========================

.. conda:recipe:: bioconductor-terratcgadata
   :replaces_section_title:
   :noindex:

   OpenAccess TCGA Data on Terra as MultiAssayExperiment

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/terraTCGAdata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-terratcgadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-terratcgadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-terratcgadata/meta.yaml>`_

   Leverage the existing open access TCGA data on Terra with well\-established Bioconductor infrastructure. Make use of the Terra data model without learning its complexities. With a few functions\, you can copy \/ download and generate a MultiAssayExperiment from the TCGA example workspaces provided by Terra.


.. conda:package:: bioconductor-terratcgadata

   |downloads_bioconductor-terratcgadata| |docker_bioconductor-terratcgadata|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-anvil: ``>=1.12.0,<1.13.0``
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-raggedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-tcgautils: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-readr: 
   :depends r-tidyr: 
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

      mamba install bioconductor-terratcgadata

   and update with::

      mamba update bioconductor-terratcgadata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-terratcgadata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-terratcgadata:<tag>

   (see `bioconductor-terratcgadata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-terratcgadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-terratcgadata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-terratcgadata
   :alt:   (downloads)
.. |docker_bioconductor-terratcgadata| image:: https://quay.io/repository/biocontainers/bioconductor-terratcgadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-terratcgadata
.. _`bioconductor-terratcgadata/tags`: https://quay.io/repository/biocontainers/bioconductor-terratcgadata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-terratcgadata";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-terratcgadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-terratcgadata/README.html