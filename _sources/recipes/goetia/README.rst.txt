:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'goetia'
.. highlight: bash

goetia
======

.. conda:recipe:: goetia
   :replaces_section_title:
   :noindex:

   streaming de Bruijn graph compaction and sketching.

   :homepage: https://github.com/camillescott/goetia
   :license: MIT
   :recipe: /`goetia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goetia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/goetia/meta.yaml>`_

   


.. conda:package:: goetia

   |downloads_goetia| |docker_goetia|

   :versions:
      
      

      ``0.14-1``,  ``0.14-0``,  ``0.13-0``

      

   
   :depends blessings: 
   :depends clangdev: 
   :depends cppyy: ``>=1.5.5``
   :depends curio: 
   :depends jsonschema: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends numpy: 
   :depends openmp: 
   :depends py-cpuinfo: 
   :depends pyfiglet: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends screed: 
   :depends sourmash: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install goetia

   and update with::

      mamba update goetia

  To create a new environment, run::

      mamba create --name myenvname goetia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/goetia:<tag>

   (see `goetia/tags`_ for valid values for ``<tag>``)


.. |downloads_goetia| image:: https://img.shields.io/conda/dn/bioconda/goetia.svg?style=flat
   :target: https://anaconda.org/bioconda/goetia
   :alt:   (downloads)
.. |docker_goetia| image:: https://quay.io/repository/biocontainers/goetia/status
   :target: https://quay.io/repository/biocontainers/goetia
.. _`goetia/tags`: https://quay.io/repository/biocontainers/goetia?tab=tags


.. raw:: html

    <script>
        var package = "goetia";
        var versions = ["0.14","0.14","0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/goetia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/goetia/README.html