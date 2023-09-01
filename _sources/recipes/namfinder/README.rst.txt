:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'namfinder'
.. highlight: bash

namfinder
=========

.. conda:recipe:: namfinder
   :replaces_section_title:
   :noindex:

   Finds Non\-overlapping Approximate Matches \(NAMs\) between query and reference sequences using strobemers 

   :homepage: https://github.com/ksahlin/namfinder
   :license: MIT License
   :recipe: /`namfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/namfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/namfinder/meta.yaml>`_

   


.. conda:package:: namfinder

   |downloads_namfinder| |docker_namfinder|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends zlib: 
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

      mamba install namfinder

   and update with::

      mamba update namfinder

  To create a new environment, run::

      mamba create --name myenvname namfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/namfinder:<tag>

   (see `namfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_namfinder| image:: https://img.shields.io/conda/dn/bioconda/namfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/namfinder
   :alt:   (downloads)
.. |docker_namfinder| image:: https://quay.io/repository/biocontainers/namfinder/status
   :target: https://quay.io/repository/biocontainers/namfinder
.. _`namfinder/tags`: https://quay.io/repository/biocontainers/namfinder?tab=tags


.. raw:: html

    <script>
        var package = "namfinder";
        var versions = ["0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/namfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/namfinder/README.html