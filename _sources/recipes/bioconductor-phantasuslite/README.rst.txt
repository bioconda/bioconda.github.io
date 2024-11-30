:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phantasuslite'
.. highlight: bash

bioconductor-phantasuslite
==========================

.. conda:recipe:: bioconductor-phantasuslite
   :replaces_section_title:
   :noindex:

   Loading and annotation RNA\-Seq counts matrices

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/phantasusLite.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-phantasuslite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phantasuslite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phantasuslite/meta.yaml>`_

   PhantasusLite – a lightweight package with helper functions of general interest extracted from phantasus package. In parituclar it simplifies working with public RNA\-seq datasets from GEO by providing access to the remote HSDS repository with the precomputed gene counts from ARCHS4 and DEE2 projects.


.. conda:package:: bioconductor-phantasuslite

   |downloads_bioconductor-phantasuslite| |docker_bioconductor-phantasuslite|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-rhdf5client: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-httr: 
   :depends r-stringr: 
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

      mamba install bioconductor-phantasuslite

   and update with::

      mamba update bioconductor-phantasuslite

  To create a new environment, run::

      mamba create --name myenvname bioconductor-phantasuslite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phantasuslite:<tag>

   (see `bioconductor-phantasuslite/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phantasuslite| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phantasuslite.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phantasuslite
   :alt:   (downloads)
.. |docker_bioconductor-phantasuslite| image:: https://quay.io/repository/biocontainers/bioconductor-phantasuslite/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phantasuslite
.. _`bioconductor-phantasuslite/tags`: https://quay.io/repository/biocontainers/bioconductor-phantasuslite?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phantasuslite";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phantasuslite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phantasuslite/README.html