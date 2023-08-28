:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellprofiler'
.. highlight: bash

cellprofiler
============

.. conda:recipe:: cellprofiler
   :replaces_section_title:
   :noindex:

   CellProfiler is free\, open\-source software for quantitative analysis of biological images

   :homepage: https://github.com/CellProfiler/CellProfiler
   :license: BSD / 3-clause BSD
   :recipe: /`cellprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellprofiler/meta.yaml>`_

   CellProfiler is free\, open\-source software for quantitative analysis of biological images.No prior experience in programming or computer vision is required.



.. conda:package:: cellprofiler

   |downloads_cellprofiler| |docker_cellprofiler|

   :versions:
      
      

      ``4.2.1-3``,  ``4.2.1-2``,  ``4.2.1-1``,  ``4.2.1-0``,  ``4.2.0-0``,  ``3.1.9-1``,  ``3.1.9-0``

      

   
   :depends cellprofiler-core: ``4.2.1.*``
   :depends centrosome: 
   :depends docutils: 
   :depends h5py: ``>=2.10``
   :depends inflect: 
   :depends jinja2: 
   :depends joblib: 
   :depends libgcc-ng: ``>=12``
   :depends mahotas: 
   :depends matplotlib-base: 
   :depends mysqlclient: 
   :depends numpy: ``>=1.18.2,<=1.20.0``
   :depends pillow: 
   :depends prokaryote: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python-bioformats: 
   :depends python-javabridge: 
   :depends python_abi: ``3.8.* *_cp38``
   :depends requests: 
   :depends scikit-image: ``>=0.17.2``
   :depends scikit-learn: ``>=0.20``
   :depends scipy: ``>=1.4.1``
   :depends sentry-sdk: 
   :depends six: 
   :depends wxpython: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cellprofiler

   and update with::

      mamba update cellprofiler

  To create a new environment, run::

      mamba create --name myenvname cellprofiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cellprofiler:<tag>

   (see `cellprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_cellprofiler| image:: https://img.shields.io/conda/dn/bioconda/cellprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/cellprofiler
   :alt:   (downloads)
.. |docker_cellprofiler| image:: https://quay.io/repository/biocontainers/cellprofiler/status
   :target: https://quay.io/repository/biocontainers/cellprofiler
.. _`cellprofiler/tags`: https://quay.io/repository/biocontainers/cellprofiler?tab=tags


.. raw:: html

    <script>
        var package = "cellprofiler";
        var versions = ["4.2.1","4.2.1","4.2.1","4.2.1","4.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellprofiler/README.html