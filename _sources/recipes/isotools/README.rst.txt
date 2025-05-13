:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isotools'
.. highlight: bash

isotools
========

.. conda:recipe:: isotools
   :replaces_section_title:
   :noindex:

   Framework for the analysis of long read transcriptome sequencing data.

   :homepage: https://github.com/HerwigLab/IsoTools2
   :documentation: https://isotools.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`isotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isotools/meta.yaml>`_

   


.. conda:package:: isotools

   |downloads_isotools| |docker_isotools|

   :versions:
      
      

      ``2.0.0-0``,  ``0.3.4-0``

      

   
   :depends biopython: 
   :depends cpat: ``>=3.0``
   :depends intervaltree: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pyhmmer: 
   :depends pysam: 
   :depends python: ``>=3.10``
   :depends python-ternary: 
   :depends requests: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn-base: 
   :depends statsmodels: 
   :depends tqdm: 
   :depends umap-learn: 
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

      mamba install isotools

   and update with::

      mamba update isotools

  To create a new environment, run::

      mamba create --name myenvname isotools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isotools:<tag>

   (see `isotools/tags`_ for valid values for ``<tag>``)


.. |downloads_isotools| image:: https://img.shields.io/conda/dn/bioconda/isotools.svg?style=flat
   :target: https://anaconda.org/bioconda/isotools
   :alt:   (downloads)
.. |docker_isotools| image:: https://quay.io/repository/biocontainers/isotools/status
   :target: https://quay.io/repository/biocontainers/isotools
.. _`isotools/tags`: https://quay.io/repository/biocontainers/isotools?tab=tags


.. raw:: html

    <script>
        var package = "isotools";
        var versions = ["2.0.0","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isotools/README.html