:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circulocov'
.. highlight: bash

circulocov
==========

.. conda:recipe:: circulocov
   :replaces_section_title:
   :noindex:

   CirculoCov is a Python tool designed for circular\-aware coverage analysis of draft genomes

   :homepage: https://github.com/erinyoung/CirculoCov
   :documentation: https://github.com/erinyoung/CirculoCov/blob/main/README.md
   
   :license: GPL / GPL-3.0
   :recipe: /`circulocov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circulocov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circulocov/meta.yaml>`_

   


.. conda:package:: circulocov

   |downloads_circulocov| |docker_circulocov|

   :versions:
      
      

      ``0.1.20240104-0``

      

   
   :depends biopython: ``>=1.58``
   :depends matplotlib-base: ``>=3.8.2``
   :depends minimap2: ``>=2.25``
   :depends numpy: ``>=1.26.2``
   :depends pandas: ``>=2.1.4``
   :depends pycirclize: ``>=1.3.0``
   :depends pysam: ``>=0.22.0``
   :depends python: ``>=3.8,<4.0``
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

      mamba install circulocov

   and update with::

      mamba update circulocov

  To create a new environment, run::

      mamba create --name myenvname circulocov

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/circulocov:<tag>

   (see `circulocov/tags`_ for valid values for ``<tag>``)


.. |downloads_circulocov| image:: https://img.shields.io/conda/dn/bioconda/circulocov.svg?style=flat
   :target: https://anaconda.org/bioconda/circulocov
   :alt:   (downloads)
.. |docker_circulocov| image:: https://quay.io/repository/biocontainers/circulocov/status
   :target: https://quay.io/repository/biocontainers/circulocov
.. _`circulocov/tags`: https://quay.io/repository/biocontainers/circulocov?tab=tags


.. raw:: html

    <script>
        var package = "circulocov";
        var versions = ["0.1.20240104"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circulocov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circulocov/README.html