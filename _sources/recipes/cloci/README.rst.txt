:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cloci'
.. highlight: bash

cloci
=====

.. conda:recipe:: cloci
   :replaces_section_title:
   :noindex:

   Co\-occurrence Locus and Orthologous Cluster Identifier.

   :homepage: https://github.com/xonq/cloci
   :license: AGPL / AGPL-3.0-only
   :recipe: /`cloci <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cloci>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cloci/meta.yaml>`_

   


.. conda:package:: cloci

   |downloads_cloci| |docker_cloci|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends cogent3: 
   :depends graph-tool: 
   :depends mycotools: 
   :depends plotly: 
   :depends python: ``>=3``
   :depends tqdm: 
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

      mamba install cloci

   and update with::

      mamba update cloci

  To create a new environment, run::

      mamba create --name myenvname cloci

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cloci:<tag>

   (see `cloci/tags`_ for valid values for ``<tag>``)


.. |downloads_cloci| image:: https://img.shields.io/conda/dn/bioconda/cloci.svg?style=flat
   :target: https://anaconda.org/bioconda/cloci
   :alt:   (downloads)
.. |docker_cloci| image:: https://quay.io/repository/biocontainers/cloci/status
   :target: https://quay.io/repository/biocontainers/cloci
.. _`cloci/tags`: https://quay.io/repository/biocontainers/cloci?tab=tags


.. raw:: html

    <script>
        var package = "cloci";
        var versions = ["0.4.0","0.3.1","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cloci/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cloci/README.html