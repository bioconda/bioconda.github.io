:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgsim'
.. highlight: bash

wgsim
=====

.. conda:recipe:: wgsim
   :replaces_section_title:
   :noindex:

   Wgsim is a small tool for simulating sequence reads from a reference genome.

   :homepage: https://github.com/lh3/wgsim
   :license: MIT
   :recipe: /`wgsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgsim/meta.yaml>`_

   


.. conda:package:: wgsim

   |downloads_wgsim| |docker_wgsim|

   :versions:
      
      

      ``1.0-7``,  ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: 
   :depends zlib: 
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

      mamba install wgsim

   and update with::

      mamba update wgsim

  To create a new environment, run::

      mamba create --name myenvname wgsim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wgsim:<tag>

   (see `wgsim/tags`_ for valid values for ``<tag>``)


.. |downloads_wgsim| image:: https://img.shields.io/conda/dn/bioconda/wgsim.svg?style=flat
   :target: https://anaconda.org/bioconda/wgsim
   :alt:   (downloads)
.. |docker_wgsim| image:: https://quay.io/repository/biocontainers/wgsim/status
   :target: https://quay.io/repository/biocontainers/wgsim
.. _`wgsim/tags`: https://quay.io/repository/biocontainers/wgsim?tab=tags


.. raw:: html

    <script>
        var package = "wgsim";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgsim/README.html