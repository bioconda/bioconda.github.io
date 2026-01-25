:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgnify-genome-search'
.. highlight: bash

mgnify-genome-search
====================

.. conda:recipe:: mgnify-genome-search
   :replaces_section_title:
   :noindex:

   MAGs queue script against MGnify database

   :homepage: https://github.com/SantaMcCloud/MGnify-genome-search
   :license: GPL / GPL-3.0-only
   :recipe: /`mgnify-genome-search <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgnify-genome-search>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgnify-genome-search/meta.yaml>`_

   Script for queue MAGs against MGnify database 



.. conda:package:: mgnify-genome-search

   |downloads_mgnify-genome-search| |docker_mgnify-genome-search|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends jsonapi-client: 
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends requests: 
   :depends sourmash: 
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

      mamba install mgnify-genome-search

   and update with::

      mamba update mgnify-genome-search

  To create a new environment, run::

      mamba create --name myenvname mgnify-genome-search

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mgnify-genome-search:<tag>

   (see `mgnify-genome-search/tags`_ for valid values for ``<tag>``)


.. |downloads_mgnify-genome-search| image:: https://img.shields.io/conda/dn/bioconda/mgnify-genome-search.svg?style=flat
   :target: https://anaconda.org/bioconda/mgnify-genome-search
   :alt:   (downloads)
.. |docker_mgnify-genome-search| image:: https://quay.io/repository/biocontainers/mgnify-genome-search/status
   :target: https://quay.io/repository/biocontainers/mgnify-genome-search
.. _`mgnify-genome-search/tags`: https://quay.io/repository/biocontainers/mgnify-genome-search?tab=tags


.. raw:: html

    <script>
        var package = "mgnify-genome-search";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgnify-genome-search/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgnify-genome-search/README.html