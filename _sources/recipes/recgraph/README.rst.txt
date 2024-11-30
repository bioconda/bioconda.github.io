:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recgraph'
.. highlight: bash

recgraph
========

.. conda:recipe:: recgraph
   :replaces_section_title:
   :noindex:

   Optimal sequence\-to\-graph alignment with recombinations

   :homepage: https://github.com/AlgoLab/RecGraph
   :license: MIT
   :recipe: /`recgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recgraph/meta.yaml>`_

   


.. conda:package:: recgraph

   |downloads_recgraph| |docker_recgraph|

   :versions:
      
      

      ``1.0.0-0``,  ``0.3.0-0``

      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install recgraph

   and update with::

      mamba update recgraph

  To create a new environment, run::

      mamba create --name myenvname recgraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/recgraph:<tag>

   (see `recgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_recgraph| image:: https://img.shields.io/conda/dn/bioconda/recgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/recgraph
   :alt:   (downloads)
.. |docker_recgraph| image:: https://quay.io/repository/biocontainers/recgraph/status
   :target: https://quay.io/repository/biocontainers/recgraph
.. _`recgraph/tags`: https://quay.io/repository/biocontainers/recgraph?tab=tags


.. raw:: html

    <script>
        var package = "recgraph";
        var versions = ["1.0.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recgraph/README.html