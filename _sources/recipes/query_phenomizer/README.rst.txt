:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'query_phenomizer'
.. highlight: bash

query_phenomizer
================

.. conda:recipe:: query_phenomizer
   :replaces_section_title:
   :noindex:

   Tool for query and parsing the phenomizer tool

   :homepage: https://www.github.com/moonso/query_phenomizer
   :license: MIT / MIT
   :recipe: /`query_phenomizer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/query_phenomizer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/query_phenomizer/meta.yaml>`_

   


.. conda:package:: query_phenomizer

   |downloads_query_phenomizer| |docker_query_phenomizer|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2-0``,  ``0.5-2``,  ``0.5-0``

      

   
   :depends click: 
   :depends pytest: 
   :depends python: 
   :depends requests: 
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

      mamba install query_phenomizer

   and update with::

      mamba update query_phenomizer

  To create a new environment, run::

      mamba create --name myenvname query_phenomizer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/query_phenomizer:<tag>

   (see `query_phenomizer/tags`_ for valid values for ``<tag>``)


.. |downloads_query_phenomizer| image:: https://img.shields.io/conda/dn/bioconda/query_phenomizer.svg?style=flat
   :target: https://anaconda.org/bioconda/query_phenomizer
   :alt:   (downloads)
.. |docker_query_phenomizer| image:: https://quay.io/repository/biocontainers/query_phenomizer/status
   :target: https://quay.io/repository/biocontainers/query_phenomizer
.. _`query_phenomizer/tags`: https://quay.io/repository/biocontainers/query_phenomizer?tab=tags


.. raw:: html

    <script>
        var package = "query_phenomizer";
        var versions = ["1.2.1","1.2","0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/query_phenomizer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/query_phenomizer/README.html