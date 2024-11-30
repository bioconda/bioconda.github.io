:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yanagiba'
.. highlight: bash

yanagiba
========

.. conda:recipe:: yanagiba
   :replaces_section_title:
   :noindex:

   Filter short or low quality Oxford Nanopore reads which have been basecalled with Albacore.

   :homepage: https://github.com/Adamtaranto/Yanagiba
   :license: MIT / MIT License
   :recipe: /`yanagiba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yanagiba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yanagiba/meta.yaml>`_

   


.. conda:package:: yanagiba

   |downloads_yanagiba| |docker_yanagiba|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.0-0``

      

   
   :depends biopython: ``>=1.70``
   :depends nanomath: ``>=0.13.0``
   :depends pandas: ``>=0.20.3``
   :depends python: ``>=3``
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

      mamba install yanagiba

   and update with::

      mamba update yanagiba

  To create a new environment, run::

      mamba create --name myenvname yanagiba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yanagiba:<tag>

   (see `yanagiba/tags`_ for valid values for ``<tag>``)


.. |downloads_yanagiba| image:: https://img.shields.io/conda/dn/bioconda/yanagiba.svg?style=flat
   :target: https://anaconda.org/bioconda/yanagiba
   :alt:   (downloads)
.. |docker_yanagiba| image:: https://quay.io/repository/biocontainers/yanagiba/status
   :target: https://quay.io/repository/biocontainers/yanagiba
.. _`yanagiba/tags`: https://quay.io/repository/biocontainers/yanagiba?tab=tags


.. raw:: html

    <script>
        var package = "yanagiba";
        var versions = ["1.0.0","1.0.0","1.0.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yanagiba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yanagiba/README.html