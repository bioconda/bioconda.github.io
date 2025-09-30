:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sccellfie'
.. highlight: bash

sccellfie
=========

.. conda:recipe:: sccellfie
   :replaces_section_title:
   :noindex:

   A tool for inferring metabolic activities from single\-cell and spatial transcriptomics

   :homepage: https://github.com/earmingol/scCellFie
   :license: MIT
   :recipe: /`sccellfie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sccellfie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sccellfie/meta.yaml>`_

   


.. conda:package:: sccellfie

   |downloads_sccellfie| |docker_sccellfie|

   :versions:
      
      

      ``0.5.0-0``

      

   
   :depends anndata: ``<0.11``
   :depends cobra: 
   :depends esda: 
   :depends geopandas: 
   :depends glasbey: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: ``>=1.23.5,<2.3``
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends scanpy: 
   :depends scipy: 
   :depends seaborn: 
   :depends squidpy: 
   :depends tqdm: 
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

      mamba install sccellfie

   and update with::

      mamba update sccellfie

  To create a new environment, run::

      mamba create --name myenvname sccellfie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sccellfie:<tag>

   (see `sccellfie/tags`_ for valid values for ``<tag>``)


.. |downloads_sccellfie| image:: https://img.shields.io/conda/dn/bioconda/sccellfie.svg?style=flat
   :target: https://anaconda.org/bioconda/sccellfie
   :alt:   (downloads)
.. |docker_sccellfie| image:: https://quay.io/repository/biocontainers/sccellfie/status
   :target: https://quay.io/repository/biocontainers/sccellfie
.. _`sccellfie/tags`: https://quay.io/repository/biocontainers/sccellfie?tab=tags


.. raw:: html

    <script>
        var package = "sccellfie";
        var versions = ["0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sccellfie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sccellfie/README.html