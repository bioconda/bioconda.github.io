:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svjedi-graph'
.. highlight: bash

svjedi-graph
============

.. conda:recipe:: svjedi-graph
   :replaces_section_title:
   :noindex:

   SVJedi\-graph is a structural variation \(SV\) genotyper for long read data using a variation graph to represent SVs.

   :homepage: https://github.com/SandraLouise/SVJedi-graph
   :license: AGPL-3.0-or-later
   :recipe: /`svjedi-graph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svjedi-graph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svjedi-graph/meta.yaml>`_

   


.. conda:package:: svjedi-graph

   |downloads_svjedi-graph| |docker_svjedi-graph|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends minigraph: 
   :depends numpy: 
   :depends python: ``>=3.8.13``
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

      mamba install svjedi-graph

   and update with::

      mamba update svjedi-graph

  To create a new environment, run::

      mamba create --name myenvname svjedi-graph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svjedi-graph:<tag>

   (see `svjedi-graph/tags`_ for valid values for ``<tag>``)


.. |downloads_svjedi-graph| image:: https://img.shields.io/conda/dn/bioconda/svjedi-graph.svg?style=flat
   :target: https://anaconda.org/bioconda/svjedi-graph
   :alt:   (downloads)
.. |docker_svjedi-graph| image:: https://quay.io/repository/biocontainers/svjedi-graph/status
   :target: https://quay.io/repository/biocontainers/svjedi-graph
.. _`svjedi-graph/tags`: https://quay.io/repository/biocontainers/svjedi-graph?tab=tags


.. raw:: html

    <script>
        var package = "svjedi-graph";
        var versions = ["1.2.0","1.1.1","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svjedi-graph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svjedi-graph/README.html