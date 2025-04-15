:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gsmap'
.. highlight: bash

gsmap
=====

.. conda:recipe:: gsmap
   :replaces_section_title:
   :noindex:

   gsMap \(genetically informed spatial mapping of cells for complex traits\).

   :homepage: https://github.com/LeonSong1995/gsMap
   :documentation: https://yanglab.westlake.edu.cn/gsmap/document
   
   :license: MIT / MIT
   :recipe: /`gsmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsmap/meta.yaml>`_

   gsMap integrates spatial transcriptomics \(ST\) data with genome\-wide association study \(GWAS\) summary statistics to map cells to human complex traits\, including diseases\, in a spatially resolved manner.



.. conda:package:: gsmap

   |downloads_gsmap| |docker_gsmap|

   :versions:
      
      

      ``1.73.0-0``,  ``1.71.2-0``,  ``1.71.1-0``,  ``1.70-0``

      

   
   :depends bitarray: 
   :depends jinja2: 
   :depends matplotlib-base: 
   :depends numpy: ``<2.0.0``
   :depends pandas: 
   :depends plotly: 
   :depends progress: 
   :depends psutil: 
   :depends pyarrow: 
   :depends pyfiglet: 
   :depends pyranges: 
   :depends python: ``>=3.10``
   :depends python-kaleido: 
   :depends pyyaml: 
   :depends scanpy: ``>=1.8``
   :depends scikit-learn: 
   :depends scikit-misc: 
   :depends scipy: 
   :depends seaborn-base: 
   :depends tqdm: 
   :depends zarr: 
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

      mamba install gsmap

   and update with::

      mamba update gsmap

  To create a new environment, run::

      mamba create --name myenvname gsmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gsmap:<tag>

   (see `gsmap/tags`_ for valid values for ``<tag>``)


.. |downloads_gsmap| image:: https://img.shields.io/conda/dn/bioconda/gsmap.svg?style=flat
   :target: https://anaconda.org/bioconda/gsmap
   :alt:   (downloads)
.. |docker_gsmap| image:: https://quay.io/repository/biocontainers/gsmap/status
   :target: https://quay.io/repository/biocontainers/gsmap
.. _`gsmap/tags`: https://quay.io/repository/biocontainers/gsmap?tab=tags


.. raw:: html

    <script>
        var package = "gsmap";
        var versions = ["1.73.0","1.71.2","1.71.1","1.70"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gsmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gsmap/README.html