:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mindagap'
.. highlight: bash

mindagap
========

.. conda:recipe:: mindagap
   :replaces_section_title:
   :noindex:

   Takes a single panorama image and fills the empty grid lines with neighbour\-weighted values.

   :homepage: https://github.com/ViriatoII/MindaGap
   :documentation: https://github.com/ViriatoII/MindaGap/blob/main/README.md
   
   :license: BSD 3-Clause License
   :recipe: /`mindagap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mindagap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mindagap/meta.yaml>`_

   


.. conda:package:: mindagap

   |downloads_mindagap| |docker_mindagap|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends libopencv: 
   :depends matplotlib-base: 
   :depends mesa-libgl-cos7-x86_64: 
   :depends numpy: 
   :depends opencv: 
   :depends pandas: 
   :depends procps-ng: 
   :depends py-opencv: 
   :depends python: ``3.9.13``
   :depends rich: 
   :depends scipy: 
   :depends tifffile: 
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

      mamba install mindagap

   and update with::

      mamba update mindagap

  To create a new environment, run::

      mamba create --name myenvname mindagap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mindagap:<tag>

   (see `mindagap/tags`_ for valid values for ``<tag>``)


.. |downloads_mindagap| image:: https://img.shields.io/conda/dn/bioconda/mindagap.svg?style=flat
   :target: https://anaconda.org/bioconda/mindagap
   :alt:   (downloads)
.. |docker_mindagap| image:: https://quay.io/repository/biocontainers/mindagap/status
   :target: https://quay.io/repository/biocontainers/mindagap
.. _`mindagap/tags`: https://quay.io/repository/biocontainers/mindagap?tab=tags


.. raw:: html

    <script>
        var package = "mindagap";
        var versions = ["0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mindagap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mindagap/README.html