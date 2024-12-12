:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-oncopharmadb'
.. highlight: bash

r-oncopharmadb
==============

.. conda:recipe:: r-oncopharmadb
   :replaces_section_title:
   :noindex:

   Targeted and non\-targeted anticancer drugs and drug regimens

   :homepage: https://github.com/sigven/oncoPharmaDB
   :license: MIT / MIT
   :recipe: /`r-oncopharmadb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-oncopharmadb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-oncopharmadb/meta.yaml>`_

   


.. conda:package:: r-oncopharmadb

   |downloads_r-oncopharmadb| |docker_r-oncopharmadb|

   :versions:
      
      

      ``1.8.1-1``,  ``1.8.1-0``,  ``1.7.0-0``,  ``1.5.1-0``,  ``1.4.6-0``,  ``1.4.4-0``,  ``1.3.7-0``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-googledrive: 
   :depends r-lgr: 
   :depends r-magrittr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tidyr: 
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

      mamba install r-oncopharmadb

   and update with::

      mamba update r-oncopharmadb

  To create a new environment, run::

      mamba create --name myenvname r-oncopharmadb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-oncopharmadb:<tag>

   (see `r-oncopharmadb/tags`_ for valid values for ``<tag>``)


.. |downloads_r-oncopharmadb| image:: https://img.shields.io/conda/dn/bioconda/r-oncopharmadb.svg?style=flat
   :target: https://anaconda.org/bioconda/r-oncopharmadb
   :alt:   (downloads)
.. |docker_r-oncopharmadb| image:: https://quay.io/repository/biocontainers/r-oncopharmadb/status
   :target: https://quay.io/repository/biocontainers/r-oncopharmadb
.. _`r-oncopharmadb/tags`: https://quay.io/repository/biocontainers/r-oncopharmadb?tab=tags


.. raw:: html

    <script>
        var package = "r-oncopharmadb";
        var versions = ["1.8.1","1.8.1","1.7.0","1.5.1","1.4.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-oncopharmadb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-oncopharmadb/README.html