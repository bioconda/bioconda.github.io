:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactomecontentservice4r'
.. highlight: bash

bioconductor-reactomecontentservice4r
=====================================

.. conda:recipe:: bioconductor-reactomecontentservice4r
   :replaces_section_title:
   :noindex:

   Interface for the Reactome Content Service

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ReactomeContentService4R.html
   :license: Apache License (>= 2.0) | file LICENSE
   :recipe: /`bioconductor-reactomecontentservice4r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomecontentservice4r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactomecontentservice4r/meta.yaml>`_

   Reactome is a free\, open\-source\, open access\, curated and peer\-reviewed knowledgebase of bio\-molecular pathways. This package is to interact with the Reactome Content Service API. Pre\-built functions would allow users to retrieve data and images that consist of proteins\, pathways\, and other molecules related to a specific gene or entity in Reactome.


.. conda:package:: bioconductor-reactomecontentservice4r

   |downloads_bioconductor-reactomecontentservice4r| |docker_bioconductor-reactomecontentservice4r|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-magick: ``>=2.5.1``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-reactomecontentservice4r

   and update with::

      mamba update bioconductor-reactomecontentservice4r

  To create a new environment, run::

      mamba create --name myenvname bioconductor-reactomecontentservice4r

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-reactomecontentservice4r:<tag>

   (see `bioconductor-reactomecontentservice4r/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-reactomecontentservice4r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactomecontentservice4r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reactomecontentservice4r
   :alt:   (downloads)
.. |docker_bioconductor-reactomecontentservice4r| image:: https://quay.io/repository/biocontainers/bioconductor-reactomecontentservice4r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactomecontentservice4r
.. _`bioconductor-reactomecontentservice4r/tags`: https://quay.io/repository/biocontainers/bioconductor-reactomecontentservice4r?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reactomecontentservice4r";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactomecontentservice4r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactomecontentservice4r/README.html