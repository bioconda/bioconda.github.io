:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmult'
.. highlight: bash

mmult
=====

.. conda:recipe:: mmult
   :replaces_section_title:
   :noindex:

   Multiple sample analysis from large\-scale WGBS data

   :homepage: https://github.com/lijinbio/MMULT
   :license: MIT
   :recipe: /`mmult <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmult>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmult/meta.yaml>`_

   


.. conda:package:: mmult

   |downloads_mmult| |docker_mmult|

   :versions:
      
      

      ``0.0.0.2-0``

      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends eigen: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends rapidjson: 
   :depends sundials: ``>=5.3.0,<5.4.0a0``
   :depends tbb: ``>=2020.2,<2021.0.0a0``
   :depends tbb-devel: 
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

      mamba install mmult

   and update with::

      mamba update mmult

  To create a new environment, run::

      mamba create --name myenvname mmult

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mmult:<tag>

   (see `mmult/tags`_ for valid values for ``<tag>``)


.. |downloads_mmult| image:: https://img.shields.io/conda/dn/bioconda/mmult.svg?style=flat
   :target: https://anaconda.org/bioconda/mmult
   :alt:   (downloads)
.. |docker_mmult| image:: https://quay.io/repository/biocontainers/mmult/status
   :target: https://quay.io/repository/biocontainers/mmult
.. _`mmult/tags`: https://quay.io/repository/biocontainers/mmult?tab=tags


.. raw:: html

    <script>
        var package = "mmult";
        var versions = ["0.0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmult/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmult/README.html