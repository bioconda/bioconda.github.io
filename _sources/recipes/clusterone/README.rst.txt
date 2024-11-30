:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clusterone'
.. highlight: bash

clusterone
==========

.. conda:recipe:: clusterone
   :replaces_section_title:
   :noindex:

   Graph clustering algorithm

   :homepage: https://paccanarolab.org/cluster-one/
   :license: GPL-3.0
   :recipe: /`clusterone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusterone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusterone/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.1938`

   ClusterONE is a graph clustering algorithm that is able to handle weighted graphs and readily generates overlapping clusters


.. conda:package:: clusterone

   |downloads_clusterone| |docker_clusterone|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends openjdk: ``>=8``
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

      mamba install clusterone

   and update with::

      mamba update clusterone

  To create a new environment, run::

      mamba create --name myenvname clusterone

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clusterone:<tag>

   (see `clusterone/tags`_ for valid values for ``<tag>``)


.. |downloads_clusterone| image:: https://img.shields.io/conda/dn/bioconda/clusterone.svg?style=flat
   :target: https://anaconda.org/bioconda/clusterone
   :alt:   (downloads)
.. |docker_clusterone| image:: https://quay.io/repository/biocontainers/clusterone/status
   :target: https://quay.io/repository/biocontainers/clusterone
.. _`clusterone/tags`: https://quay.io/repository/biocontainers/clusterone?tab=tags


.. raw:: html

    <script>
        var package = "clusterone";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clusterone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clusterone/README.html