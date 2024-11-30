:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mapgl'
.. highlight: bash

mapgl
=====

.. conda:recipe:: mapgl
   :replaces_section_title:
   :noindex:

   Prediction of lineage\-specific gain and loss of sequence elements using phylogenetic maximum parsimony.

   :homepage: https://github.com/adadiehl/mapGL
   :license: MIT / MIT
   :recipe: /`mapgl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapgl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mapgl/meta.yaml>`_

   


.. conda:package:: mapgl

   |downloads_mapgl| |docker_mapgl|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``0.1.1-0``,  ``0.0.6-0``

      

   
   :depends bx-python: 
   :depends numpy: 
   :depends python: ``>=3``
   :depends six: 
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

      mamba install mapgl

   and update with::

      mamba update mapgl

  To create a new environment, run::

      mamba create --name myenvname mapgl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mapgl:<tag>

   (see `mapgl/tags`_ for valid values for ``<tag>``)


.. |downloads_mapgl| image:: https://img.shields.io/conda/dn/bioconda/mapgl.svg?style=flat
   :target: https://anaconda.org/bioconda/mapgl
   :alt:   (downloads)
.. |docker_mapgl| image:: https://quay.io/repository/biocontainers/mapgl/status
   :target: https://quay.io/repository/biocontainers/mapgl
.. _`mapgl/tags`: https://quay.io/repository/biocontainers/mapgl?tab=tags


.. raw:: html

    <script>
        var package = "mapgl";
        var versions = ["1.3.1","1.3.0","1.2.0","1.0.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mapgl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mapgl/README.html