:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ebisearch'
.. highlight: bash

ebisearch
=========

.. conda:recipe:: ebisearch
   :replaces_section_title:
   :noindex:

   A Python library for interacting with EBI Search\'s API

   :homepage: https://github.com/bebatut/ebisearch
   :license: MIT / MIT License
   :recipe: /`ebisearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebisearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebisearch/meta.yaml>`_

   


.. conda:package:: ebisearch

   |downloads_ebisearch| |docker_ebisearch|

   :versions:
      
      

      ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends click: 
   :depends flake8: 
   :depends python: ``<3``
   :depends requests: 
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

      mamba install ebisearch

   and update with::

      mamba update ebisearch

  To create a new environment, run::

      mamba create --name myenvname ebisearch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ebisearch:<tag>

   (see `ebisearch/tags`_ for valid values for ``<tag>``)


.. |downloads_ebisearch| image:: https://img.shields.io/conda/dn/bioconda/ebisearch.svg?style=flat
   :target: https://anaconda.org/bioconda/ebisearch
   :alt:   (downloads)
.. |docker_ebisearch| image:: https://quay.io/repository/biocontainers/ebisearch/status
   :target: https://quay.io/repository/biocontainers/ebisearch
.. _`ebisearch/tags`: https://quay.io/repository/biocontainers/ebisearch?tab=tags


.. raw:: html

    <script>
        var package = "ebisearch";
        var versions = ["0.0.3","0.0.3","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ebisearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ebisearch/README.html