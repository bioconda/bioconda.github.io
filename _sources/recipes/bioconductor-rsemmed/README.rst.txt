:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsemmed'
.. highlight: bash

bioconductor-rsemmed
====================

.. conda:recipe:: bioconductor-rsemmed
   :replaces_section_title:
   :noindex:

   An interface to the Semantic MEDLINE database

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/rsemmed.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rsemmed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsemmed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsemmed/meta.yaml>`_

   A programmatic interface to the Semantic MEDLINE database. It provides functions for searching the database for concepts and finding paths between concepts. Path searching can also be tailored to user specifications\, such as placing restrictions on concept types and the type of link between concepts. It also provides functions for summarizing and visualizing those paths.


.. conda:package:: bioconductor-rsemmed

   |downloads_bioconductor-rsemmed| |docker_bioconductor-rsemmed|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-stringr: 
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

      mamba install bioconductor-rsemmed

   and update with::

      mamba update bioconductor-rsemmed

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rsemmed

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rsemmed:<tag>

   (see `bioconductor-rsemmed/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rsemmed| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsemmed.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsemmed
   :alt:   (downloads)
.. |docker_bioconductor-rsemmed| image:: https://quay.io/repository/biocontainers/bioconductor-rsemmed/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsemmed
.. _`bioconductor-rsemmed/tags`: https://quay.io/repository/biocontainers/bioconductor-rsemmed?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rsemmed";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsemmed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsemmed/README.html