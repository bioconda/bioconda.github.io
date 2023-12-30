:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioplex'
.. highlight: bash

bioconductor-bioplex
====================

.. conda:recipe:: bioconductor-bioplex
   :replaces_section_title:
   :noindex:

   R\-side access to BioPlex protein\-protein interaction data

   :homepage: https://bioconductor.org/packages/3.18/data/experiment/html/BioPlex.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bioplex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioplex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioplex/meta.yaml>`_

   The BioPlex package implements access to the BioPlex protein\-protein interaction networks and related resources from within R. Besides protein\-protein interaction networks for HEK293 and HCT116 cells\, this includes access to CORUM protein complex data\, and transcriptome and proteome data for the two cell lines. Functionality focuses on importing the various data resources and storing them in dedicated Bioconductor data structures\, as a foundation for integrative downstream analysis of the data.


.. conda:package:: bioconductor-bioplex

   |downloads_bioconductor-bioplex| |docker_bioconductor-bioplex|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-geoquery: ``>=2.70.0,<2.71.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-bioplex

   and update with::

      mamba update bioconductor-bioplex

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bioplex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bioplex:<tag>

   (see `bioconductor-bioplex/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bioplex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioplex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bioplex
   :alt:   (downloads)
.. |docker_bioconductor-bioplex| image:: https://quay.io/repository/biocontainers/bioconductor-bioplex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioplex
.. _`bioconductor-bioplex/tags`: https://quay.io/repository/biocontainers/bioconductor-bioplex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bioplex";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioplex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioplex/README.html