:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-crisprcleanr'
.. highlight: bash

r-crisprcleanr
==============

.. conda:recipe:: r-crisprcleanr
   :replaces_section_title:
   :noindex:

   Analysis of CRISPR functional genomics\, remove false positive due to CNVs.

   :homepage: https://github.com/francescojm/CRISPRcleanR
   :license: MIT / MIT
   :recipe: /`r-crisprcleanr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crisprcleanr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-crisprcleanr/meta.yaml>`_

   


.. conda:package:: r-crisprcleanr

   |downloads_r-crisprcleanr| |docker_r-crisprcleanr|

   :versions:
      
      

      ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.3.1-1``,  ``2.3.1-0``

      

   
   :depends bioconductor-biostrings: 
   :depends bioconductor-dnacopy: 
   :depends bioconductor-genomicalignments: 
   :depends bioconductor-rqc: 
   :depends bioconductor-rsubread: 
   :depends bioconductor-shortread: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :depends r-jsonlite: 
   :depends r-pracma: 
   :depends r-proc: 
   :depends r-prroc: 
   :depends r-stringr: 
   :depends r-withr: 
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

      mamba install r-crisprcleanr

   and update with::

      mamba update r-crisprcleanr

  To create a new environment, run::

      mamba create --name myenvname r-crisprcleanr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-crisprcleanr:<tag>

   (see `r-crisprcleanr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-crisprcleanr| image:: https://img.shields.io/conda/dn/bioconda/r-crisprcleanr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-crisprcleanr
   :alt:   (downloads)
.. |docker_r-crisprcleanr| image:: https://quay.io/repository/biocontainers/r-crisprcleanr/status
   :target: https://quay.io/repository/biocontainers/r-crisprcleanr
.. _`r-crisprcleanr/tags`: https://quay.io/repository/biocontainers/r-crisprcleanr?tab=tags


.. raw:: html

    <script>
        var package = "r-crisprcleanr";
        var versions = ["3.0.0","3.0.0","3.0.0","2.3.1","2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-crisprcleanr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-crisprcleanr/README.html