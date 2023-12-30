:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gwascatdata'
.. highlight: bash

bioconductor-gwascatdata
========================

.. conda:recipe:: bioconductor-gwascatdata
   :replaces_section_title:
   :noindex:

   A text file in cloud with March 30 2021 snapshot of EBI\/EMBL GWAS catalog

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/gwascatData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gwascatdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwascatdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gwascatdata/meta.yaml>`_

   This package manages a text file in cloud with March 30 2021 snapshot of EBI\/EMBL GWAS catalog.This simplifies access to a snapshot of EBI GWASCAT.  More current images can be obtained using the gwascat package.


.. conda:package:: bioconductor-gwascatdata

   |downloads_bioconductor-gwascatdata| |docker_bioconductor-gwascatdata|

   :versions:
      
      

      ``0.99.6-5``,  ``0.99.6-4``,  ``0.99.6-3``,  ``0.99.6-2``,  ``0.99.6-1``,  ``0.99.6-0``

      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
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

      mamba install bioconductor-gwascatdata

   and update with::

      mamba update bioconductor-gwascatdata

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gwascatdata

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gwascatdata:<tag>

   (see `bioconductor-gwascatdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gwascatdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gwascatdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gwascatdata
   :alt:   (downloads)
.. |docker_bioconductor-gwascatdata| image:: https://quay.io/repository/biocontainers/bioconductor-gwascatdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gwascatdata
.. _`bioconductor-gwascatdata/tags`: https://quay.io/repository/biocontainers/bioconductor-gwascatdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gwascatdata";
        var versions = ["0.99.6","0.99.6","0.99.6","0.99.6","0.99.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gwascatdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gwascatdata/README.html