:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ninja-nj'
.. highlight: bash

ninja-nj
========

.. conda:recipe:: ninja-nj
   :replaces_section_title:
   :noindex:

   Nearly Infinite Neighbor Joining Application

   :homepage: https://github.com/TravisWheelerLab/NINJA
   :documentation: https://github.com/TravisWheelerLab/NINJA/blob/1.00-cluster_only/README.md
   
   :license: MIT / MIT
   :recipe: /`ninja-nj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ninja-nj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ninja-nj/meta.yaml>`_
   :links: biotools: :biotools:`ninja`

   


.. conda:package:: ninja-nj

   |downloads_ninja-nj| |docker_ninja-nj|

   :versions:
      
      

      ``1.00-0``,  ``0.98-3``,  ``0.98-2``,  ``0.98-1``,  ``0.98-0``,  ``0.97-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=12``
   :depends libgomp: 
   :depends libstdcxx: ``>=12``
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

      mamba install ninja-nj

   and update with::

      mamba update ninja-nj

  To create a new environment, run::

      mamba create --name myenvname ninja-nj

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ninja-nj:<tag>

   (see `ninja-nj/tags`_ for valid values for ``<tag>``)


.. |downloads_ninja-nj| image:: https://img.shields.io/conda/dn/bioconda/ninja-nj.svg?style=flat
   :target: https://anaconda.org/bioconda/ninja-nj
   :alt:   (downloads)
.. |docker_ninja-nj| image:: https://quay.io/repository/biocontainers/ninja-nj/status
   :target: https://quay.io/repository/biocontainers/ninja-nj
.. _`ninja-nj/tags`: https://quay.io/repository/biocontainers/ninja-nj?tab=tags


.. raw:: html

    <script>
        var package = "ninja-nj";
        var versions = ["1.00","0.98","0.98","0.98","0.98"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ninja-nj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ninja-nj/README.html