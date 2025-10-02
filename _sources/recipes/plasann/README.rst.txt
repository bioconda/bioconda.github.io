:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasann'
.. highlight: bash

plasann
=======

.. conda:recipe:: plasann
   :replaces_section_title:
   :noindex:

   A tool for plasmid annotation and visualization.

   :homepage: https://github.com/ajlopatkin/PlasAnn
   :license: MIT / MIT
   :recipe: /`plasann <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasann>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasann/meta.yaml>`_

   A comprehensive tool for annotating plasmid sequences\, identifying coding
   sequences\, detecting origins of replication and transfer\, and generating
   plasmid maps.

   For Mac \(Apple Silicon\) users\, please install these additional dependencies\:
   \- brew install blast
   \- brew install brewsci\/bio\/prodigal

   Please ensure both tools are available in your PATH before running PlasAnn.



.. conda:package:: plasann

   |downloads_plasann| |docker_plasann|

   :versions:
      
      

      ``1.1.6-0``,  ``1.1.3-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends biopython: ``>=1.79``
   :depends blast: 
   :depends gdown: ``>=4.0.0``
   :depends infernal: 
   :depends matplotlib-base: ``>=3.5.0``
   :depends numpy: ``>=1.21.0``
   :depends pandas: ``>=1.3.0``
   :depends prodigal: 
   :depends pycirclize: ``>=0.3.0``
   :depends python: ``>=3.8``
   :depends requests: ``>=2.25.0``
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

      mamba install plasann

   and update with::

      mamba update plasann

  To create a new environment, run::

      mamba create --name myenvname plasann

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plasann:<tag>

   (see `plasann/tags`_ for valid values for ``<tag>``)


.. |downloads_plasann| image:: https://img.shields.io/conda/dn/bioconda/plasann.svg?style=flat
   :target: https://anaconda.org/bioconda/plasann
   :alt:   (downloads)
.. |docker_plasann| image:: https://quay.io/repository/biocontainers/plasann/status
   :target: https://quay.io/repository/biocontainers/plasann
.. _`plasann/tags`: https://quay.io/repository/biocontainers/plasann?tab=tags


.. raw:: html

    <script>
        var package = "plasann";
        var versions = ["1.1.6","1.1.3","1.0.8","1.0.8","1.0.3"];
    </script>





Notes
-----
This package requires external dependencies \(BLAST and Prodigal\) for Apple Silicon Macs
which must be installed separately due to platform compatibility issues.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasann/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasann/README.html