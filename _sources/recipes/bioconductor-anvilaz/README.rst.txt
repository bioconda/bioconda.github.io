:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anvilaz'
.. highlight: bash

bioconductor-anvilaz
====================

.. conda:recipe:: bioconductor-anvilaz
   :replaces_section_title:
   :noindex:

   R \/ Bioconductor Support for the AnVIL Azure Platform

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AnVILAz.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-anvilaz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilaz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anvilaz/meta.yaml>`_

   The AnVIL is a cloud computing resource developed in part by the National Human Genome Research Institute. The AnVILAz package supports end\-users and developers using the AnVIL platform in the Azure cloud. The package provides a programmatic interface to AnVIL resources\, including workspaces\, notebooks\, tables\, and workflows. The package also provides utilities for managing resources\, including copying files to and from Azure Blob Storage\, and creating shared access signatures \(SAS\) for secure access to Azure resources.


.. conda:package:: bioconductor-anvilaz

   |downloads_bioconductor-anvilaz| |docker_bioconductor-anvilaz|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-anvilbase: ``>=1.0.0,<1.1.0``
   :depends bioconductor-biocbaseutils: ``>=1.8.0,<1.9.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-curl: 
   :depends r-httr2: 
   :depends r-jsonlite: 
   :depends r-rjsoncons: 
   :depends r-tibble: 
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

      mamba install bioconductor-anvilaz

   and update with::

      mamba update bioconductor-anvilaz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-anvilaz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anvilaz:<tag>

   (see `bioconductor-anvilaz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anvilaz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anvilaz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anvilaz
   :alt:   (downloads)
.. |docker_bioconductor-anvilaz| image:: https://quay.io/repository/biocontainers/bioconductor-anvilaz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anvilaz
.. _`bioconductor-anvilaz/tags`: https://quay.io/repository/biocontainers/bioconductor-anvilaz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anvilaz";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anvilaz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anvilaz/README.html