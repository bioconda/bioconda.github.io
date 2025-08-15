:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'remag'
.. highlight: bash

remag
=====

.. conda:recipe:: remag
   :replaces_section_title:
   :noindex:

   Recovery of high\-quality eukaryotic genomes from complex metagenomes

   :homepage: https://github.com/danielzmbp/remag
   :license: MIT / MIT
   :recipe: /`remag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/remag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/remag/meta.yaml>`_

   REMAG is a specialized metagenomic binning tool designed for recovering 
   high\-quality eukaryotic genomes from mixed prokaryotic\-eukaryotic samples. 
   It uses contrastive learning with Siamese neural networks to generate 
   meaningful contig embeddings for clustering.



.. conda:package:: remag

   |downloads_remag| |docker_remag|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends biopython: 
   :depends hdbscan: ``>=0.8.28``
   :depends joblib: ``>=1.1.0``
   :depends leidenalg: ``>=0.9.0``
   :depends loguru: ``>=0.6.0``
   :depends matplotlib-base: ``>=3.5.0``
   :depends numpy: ``>=1.21.0``
   :depends pandas: ``>=1.3.0``
   :depends psutil: ``>=5.8.0``
   :depends pysam: ``>=0.18.0``
   :depends python: ``>=3.8``
   :depends python-igraph: ``>=0.10.0``
   :depends pytorch: ``>=1.11.0``
   :depends rich-click: ``>=1.5.0``
   :depends scikit-learn: ``>=1.0.0``
   :depends tqdm: ``>=4.62.0``
   :depends umap-learn: ``>=0.5.0``
   :depends xgboost: ``>=1.6.0``
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

      mamba install remag

   and update with::

      mamba update remag

  To create a new environment, run::

      mamba create --name myenvname remag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/remag:<tag>

   (see `remag/tags`_ for valid values for ``<tag>``)


.. |downloads_remag| image:: https://img.shields.io/conda/dn/bioconda/remag.svg?style=flat
   :target: https://anaconda.org/bioconda/remag
   :alt:   (downloads)
.. |docker_remag| image:: https://quay.io/repository/biocontainers/remag/status
   :target: https://quay.io/repository/biocontainers/remag
.. _`remag/tags`: https://quay.io/repository/biocontainers/remag?tab=tags


.. raw:: html

    <script>
        var package = "remag";
        var versions = ["0.2.2","0.2.1","0.2.0","0.1.5","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/remag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/remag/README.html