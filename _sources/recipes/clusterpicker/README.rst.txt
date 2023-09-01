:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clusterpicker'
.. highlight: bash

clusterpicker
=============

.. conda:recipe:: clusterpicker
   :replaces_section_title:
   :noindex:

   The Cluster Picker identifies clusters in newick\-formatted trees containing thousands of sequences within a few minutes.

   :homepage: https://github.com/emmahodcroft/cluster-picker-and-cluster-matcher
   :license: GPL / GPLv3
   :recipe: /`clusterpicker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusterpicker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusterpicker/meta.yaml>`_

   


.. conda:package:: clusterpicker

   |downloads_clusterpicker| |docker_clusterpicker|

   :versions:
      
      

      ``1.2.5-1``,  ``1.2.5-0``,  ``1.2.3-2``

      

   
   :depends openjdk: ``>=6``
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

      mamba install clusterpicker

   and update with::

      mamba update clusterpicker

  To create a new environment, run::

      mamba create --name myenvname clusterpicker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clusterpicker:<tag>

   (see `clusterpicker/tags`_ for valid values for ``<tag>``)


.. |downloads_clusterpicker| image:: https://img.shields.io/conda/dn/bioconda/clusterpicker.svg?style=flat
   :target: https://anaconda.org/bioconda/clusterpicker
   :alt:   (downloads)
.. |docker_clusterpicker| image:: https://quay.io/repository/biocontainers/clusterpicker/status
   :target: https://quay.io/repository/biocontainers/clusterpicker
.. _`clusterpicker/tags`: https://quay.io/repository/biocontainers/clusterpicker?tab=tags


.. raw:: html

    <script>
        var package = "clusterpicker";
        var versions = ["1.2.5","1.2.5","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clusterpicker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clusterpicker/README.html