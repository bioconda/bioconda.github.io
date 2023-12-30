:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rfarm'
.. highlight: bash

bioconductor-rfarm
==================

.. conda:recipe:: bioconductor-rfarm
   :replaces_section_title:
   :noindex:

   An R interface to the Rfam database

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/rfaRm.html
   :license: GPL-3
   :recipe: /`bioconductor-rfarm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfarm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rfarm/meta.yaml>`_

   rfaRm provides a client interface to the Rfam database of RNA families. Data that can be retrieved include RNA families\, secondary structure images\, covariance models\, sequences within each family\, alignments leading to the identification of a family and secondary structures in the dot\-bracket format.


.. conda:package:: bioconductor-rfarm

   |downloads_bioconductor-rfarm| |docker_bioconductor-rfarm|

   :versions:
      
      

      ``1.14.0-0``,  ``1.11.2-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-magick: 
   :depends r-rsvg: 
   :depends r-rvest: 
   :depends r-stringi: 
   :depends r-xml2: 
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

      mamba install bioconductor-rfarm

   and update with::

      mamba update bioconductor-rfarm

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rfarm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rfarm:<tag>

   (see `bioconductor-rfarm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rfarm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rfarm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rfarm
   :alt:   (downloads)
.. |docker_bioconductor-rfarm| image:: https://quay.io/repository/biocontainers/bioconductor-rfarm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rfarm
.. _`bioconductor-rfarm/tags`: https://quay.io/repository/biocontainers/bioconductor-rfarm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rfarm";
        var versions = ["1.14.0","1.11.2","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rfarm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rfarm/README.html