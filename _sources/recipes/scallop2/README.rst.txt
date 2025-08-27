:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scallop2'
.. highlight: bash

scallop2
========

.. conda:recipe:: scallop2
   :replaces_section_title:
   :noindex:

   A reference\-based transcript assembler optimized for paired\-\/multiple\-end RNA\-seq data.

   :homepage: https://github.com/Shao-Group/scallop2
   :license: BSD-3-Clause
   :recipe: /`scallop2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scallop2/meta.yaml>`_

   


.. conda:package:: scallop2

   |downloads_scallop2| |docker_scallop2|

   :versions:
      
      

      ``1.1.2-7``,  ``1.1.2-6``,  ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``

      

   
   :depends boost-cpp: 
   :depends htslib: ``>=1.21,<1.23.0a0``
   :depends libcxx: ``>=18``
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

      mamba install scallop2

   and update with::

      mamba update scallop2

  To create a new environment, run::

      mamba create --name myenvname scallop2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scallop2:<tag>

   (see `scallop2/tags`_ for valid values for ``<tag>``)


.. |downloads_scallop2| image:: https://img.shields.io/conda/dn/bioconda/scallop2.svg?style=flat
   :target: https://anaconda.org/bioconda/scallop2
   :alt:   (downloads)
.. |docker_scallop2| image:: https://quay.io/repository/biocontainers/scallop2/status
   :target: https://quay.io/repository/biocontainers/scallop2
.. _`scallop2/tags`: https://quay.io/repository/biocontainers/scallop2?tab=tags


.. raw:: html

    <script>
        var package = "scallop2";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scallop2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scallop2/README.html