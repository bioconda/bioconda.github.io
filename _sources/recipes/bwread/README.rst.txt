:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwread'
.. highlight: bash

bwread
======

.. conda:recipe:: bwread
   :replaces_section_title:
   :noindex:

   Read bigwig files quickly into PyRanges or DataFrames

   :homepage: http://github.com/endrebak/bwread
   :license: MIT / MIT
   :recipe: /`bwread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwread/meta.yaml>`_

   


.. conda:package:: bwread

   |downloads_bwread| |docker_bwread|

   :versions:
      
      

      ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends natsort: 
   :depends numpy: 
   :depends pandas: 
   :depends pybigwig: 
   :depends pyranges: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends setuptools: 
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

      mamba install bwread

   and update with::

      mamba update bwread

  To create a new environment, run::

      mamba create --name myenvname bwread

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bwread:<tag>

   (see `bwread/tags`_ for valid values for ``<tag>``)


.. |downloads_bwread| image:: https://img.shields.io/conda/dn/bioconda/bwread.svg?style=flat
   :target: https://anaconda.org/bioconda/bwread
   :alt:   (downloads)
.. |docker_bwread| image:: https://quay.io/repository/biocontainers/bwread/status
   :target: https://quay.io/repository/biocontainers/bwread
.. _`bwread/tags`: https://quay.io/repository/biocontainers/bwread?tab=tags


.. raw:: html

    <script>
        var package = "bwread";
        var versions = ["0.0.5","0.0.5","0.0.5","0.0.4","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwread/README.html