:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shiba'
.. highlight: bash

shiba
=====

.. conda:recipe:: shiba
   :replaces_section_title:
   :noindex:

   A versatile method for systematic identification of differential RNA splicing across platforms

   :homepage: https://github.com/Sika-Zheng-Lab/Shiba
   :documentation: https://sika-zheng-lab.github.io/Shiba
   
   :license: MIT / MIT
   :recipe: /`shiba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiba/meta.yaml>`_

   A versatile computational method for systematic identification of differential RNA splicing.
   Shiba\/scShiba can quantify and identify differential splicing events from bulk RNA\-seq data and single\-cell RNA\-seq data.
   Shiba and scShiba are also implemented as Snakemake workflows\, SnakeShiba and SnakeScShiba\, respectively.



.. conda:package:: shiba

   |downloads_shiba| |docker_shiba|

   :versions:
      
      

      ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``

      

   
   :depends bioconductor-deseq2: ``>=1.34.0``
   :depends numexpr: ``>=2.8.4``
   :depends numpy: ``>=1.26.4``
   :depends pandas: ``>=1.5.3``
   :depends plotly: ``>=5.13.0``
   :depends pysam: ``>=0.23.0``
   :depends python: 
   :depends pyyaml: ``>=6.0.2``
   :depends r-base: ``>=4.1.3``
   :depends r-data.table: ``>=1.14.2``
   :depends r-locfit: ``>=1.5_9.4``
   :depends regtools: ``>=1.0.0``
   :depends scanpy: ``>=1.9.5``
   :depends statsmodels: ``>=0.13.5``
   :depends stringtie: ``>=3.0.0``
   :depends subread: ``>=2.0.8``
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

      mamba install shiba

   and update with::

      mamba update shiba

  To create a new environment, run::

      mamba create --name myenvname shiba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shiba:<tag>

   (see `shiba/tags`_ for valid values for ``<tag>``)


.. |downloads_shiba| image:: https://img.shields.io/conda/dn/bioconda/shiba.svg?style=flat
   :target: https://anaconda.org/bioconda/shiba
   :alt:   (downloads)
.. |docker_shiba| image:: https://quay.io/repository/biocontainers/shiba/status
   :target: https://quay.io/repository/biocontainers/shiba
.. _`shiba/tags`: https://quay.io/repository/biocontainers/shiba?tab=tags


.. raw:: html

    <script>
        var package = "shiba";
        var versions = ["0.6.3","0.6.2","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shiba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shiba/README.html