:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scimpute'
.. highlight: bash

r-scimpute
==========

.. conda:recipe:: r-scimpute
   :replaces_section_title:
   :noindex:

   scImpute is accurate and robust imputation of single\-cell RNA sequencing data.

   :homepage: https://github.com/Vivianstats/scImpute
   :license: GPL / GPL
   :recipe: /`r-scimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scimpute/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-018-03405-7`

   


.. conda:package:: r-scimpute

   |downloads_r-scimpute| |docker_r-scimpute|

   :versions:
      
      

      ``0.0.8-5``,  ``0.0.8-4``,  ``0.0.8-3``,  ``0.0.8-2``,  ``0.0.8-1``,  ``0.0.8-0``,  ``0.0.6-1``,  ``0.0.6-0``

      

   
   :depends parallel: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-devtools: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-kernlab: 
   :depends r-knitr: 
   :depends r-markdown: 
   :depends r-penalized: 
   :depends r-rsvd: 
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

      mamba install r-scimpute

   and update with::

      mamba update r-scimpute

  To create a new environment, run::

      mamba create --name myenvname r-scimpute

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-scimpute:<tag>

   (see `r-scimpute/tags`_ for valid values for ``<tag>``)


.. |downloads_r-scimpute| image:: https://img.shields.io/conda/dn/bioconda/r-scimpute.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scimpute
   :alt:   (downloads)
.. |docker_r-scimpute| image:: https://quay.io/repository/biocontainers/r-scimpute/status
   :target: https://quay.io/repository/biocontainers/r-scimpute
.. _`r-scimpute/tags`: https://quay.io/repository/biocontainers/r-scimpute?tab=tags


.. raw:: html

    <script>
        var package = "r-scimpute";
        var versions = ["0.0.8","0.0.8","0.0.8","0.0.8","0.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scimpute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scimpute/README.html