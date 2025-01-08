:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ucsc.utils'
.. highlight: bash

bioconductor-ucsc.utils
=======================

.. conda:recipe:: bioconductor-ucsc.utils
   :replaces_section_title:
   :noindex:

   Low\-level utilities to retrieve data from the UCSC Genome Browser

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/UCSC.utils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ucsc.utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ucsc.utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ucsc.utils/meta.yaml>`_

   A set of low\-level utilities to retrieve data from the UCSC Genome Browser. Most functions in the package access the data via the UCSC REST API but some of them query the UCSC MySQL server directly. Note that the primary purpose of the package is to support higher\-level functionalities implemented in downstream packages like GenomeInfoDb or txdbmaker.


.. conda:package:: bioconductor-ucsc.utils

   |downloads_bioconductor-ucsc.utils| |docker_bioconductor-ucsc.utils|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-httr: 
   :depends r-jsonlite: 
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

      mamba install bioconductor-ucsc.utils

   and update with::

      mamba update bioconductor-ucsc.utils

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ucsc.utils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ucsc.utils:<tag>

   (see `bioconductor-ucsc.utils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ucsc.utils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ucsc.utils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ucsc.utils
   :alt:   (downloads)
.. |docker_bioconductor-ucsc.utils| image:: https://quay.io/repository/biocontainers/bioconductor-ucsc.utils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ucsc.utils
.. _`bioconductor-ucsc.utils/tags`: https://quay.io/repository/biocontainers/bioconductor-ucsc.utils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ucsc.utils";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ucsc.utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ucsc.utils/README.html