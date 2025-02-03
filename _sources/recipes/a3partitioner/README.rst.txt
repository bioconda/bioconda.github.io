:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'a3partitioner'
.. highlight: bash

a3partitioner
=============

.. conda:recipe:: a3partitioner
   :replaces_section_title:
   :noindex:

   A bioinformatics tool for creating APOBEC3 and non\-APOBEC3 partitions

   :homepage: https://github.com/DaanJansen94/a3partitioner
   :documentation: https://github.com/DaanJansen94/a3partitioner/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`a3partitioner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a3partitioner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a3partitioner/meta.yaml>`_

   


.. conda:package:: a3partitioner

   |downloads_a3partitioner| |docker_a3partitioner|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends biopython: ``>=1.80``
   :depends python: ``>=3.6,<4.0``
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

      mamba install a3partitioner

   and update with::

      mamba update a3partitioner

  To create a new environment, run::

      mamba create --name myenvname a3partitioner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/a3partitioner:<tag>

   (see `a3partitioner/tags`_ for valid values for ``<tag>``)


.. |downloads_a3partitioner| image:: https://img.shields.io/conda/dn/bioconda/a3partitioner.svg?style=flat
   :target: https://anaconda.org/bioconda/a3partitioner
   :alt:   (downloads)
.. |docker_a3partitioner| image:: https://quay.io/repository/biocontainers/a3partitioner/status
   :target: https://quay.io/repository/biocontainers/a3partitioner
.. _`a3partitioner/tags`: https://quay.io/repository/biocontainers/a3partitioner?tab=tags


.. raw:: html

    <script>
        var package = "a3partitioner";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/a3partitioner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/a3partitioner/README.html