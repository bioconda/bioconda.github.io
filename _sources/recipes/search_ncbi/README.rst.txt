:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'search_ncbi'
.. highlight: bash

search_ncbi
===========

.. conda:recipe:: search_ncbi
   :replaces_section_title:
   :noindex:

   A package for searching and processing NCBI data

   :homepage: https://github.com/Bluetea577/search_ncbi
   :license: MIT / MIT
   :recipe: /`search_ncbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/search_ncbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/search_ncbi/meta.yaml>`_

   


.. conda:package:: search_ncbi

   |downloads_search_ncbi| |docker_search_ncbi|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends biopython: ``>=1.78``
   :depends pandas: ``>=1.3.0``
   :depends python: ``>=3.7``
   :depends requests: ``>=2.32.0``
   :depends setuptools: 
   :depends tqdm: ``>=4.66.3``
   :depends xmltodict: ``>=0.13.0``
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

      mamba install search_ncbi

   and update with::

      mamba update search_ncbi

  To create a new environment, run::

      mamba create --name myenvname search_ncbi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/search_ncbi:<tag>

   (see `search_ncbi/tags`_ for valid values for ``<tag>``)


.. |downloads_search_ncbi| image:: https://img.shields.io/conda/dn/bioconda/search_ncbi.svg?style=flat
   :target: https://anaconda.org/bioconda/search_ncbi
   :alt:   (downloads)
.. |docker_search_ncbi| image:: https://quay.io/repository/biocontainers/search_ncbi/status
   :target: https://quay.io/repository/biocontainers/search_ncbi
.. _`search_ncbi/tags`: https://quay.io/repository/biocontainers/search_ncbi?tab=tags


.. raw:: html

    <script>
        var package = "search_ncbi";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/search_ncbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/search_ncbi/README.html