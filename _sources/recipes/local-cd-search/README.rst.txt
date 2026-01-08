:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'local-cd-search'
.. highlight: bash

local-cd-search
===============

.. conda:recipe:: local-cd-search
   :replaces_section_title:
   :noindex:

   Protein annotation using local PSSM databases from CDD.

   :homepage: https://github.com/apcamargo/local-cd-search
   :license: MIT / MIT
   :recipe: /`local-cd-search <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/local-cd-search>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/local-cd-search/meta.yaml>`_

   


.. conda:package:: local-cd-search

   |downloads_local-cd-search| |docker_local-cd-search|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends blast: ``>=2.16.0,<3``
   :depends click: ``>=8.3``
   :depends python: ``>=3.10``
   :depends rich: ``>=14.2``
   :depends rich-click: ``>=1.9``
   :depends rpsbproc: ``>=0.5,<0.6``
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

      mamba install local-cd-search

   and update with::

      mamba update local-cd-search

  To create a new environment, run::

      mamba create --name myenvname local-cd-search

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/local-cd-search:<tag>

   (see `local-cd-search/tags`_ for valid values for ``<tag>``)


.. |downloads_local-cd-search| image:: https://img.shields.io/conda/dn/bioconda/local-cd-search.svg?style=flat
   :target: https://anaconda.org/bioconda/local-cd-search
   :alt:   (downloads)
.. |docker_local-cd-search| image:: https://quay.io/repository/biocontainers/local-cd-search/status
   :target: https://quay.io/repository/biocontainers/local-cd-search
.. _`local-cd-search/tags`: https://quay.io/repository/biocontainers/local-cd-search?tab=tags


.. raw:: html

    <script>
        var package = "local-cd-search";
        var versions = ["0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/local-cd-search/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/local-cd-search/README.html