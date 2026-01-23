:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piaso'
.. highlight: bash

piaso
=====

.. conda:recipe:: piaso
   :replaces_section_title:
   :noindex:

   PIASO\: Precise Integrative Analysis of Single\-cell Omics

   :homepage: https://piaso.org
   :developer docs: https://github.com/genecell/PIASO
   :license: BSD / BSD-3-Clause
   :recipe: /`piaso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piaso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piaso/meta.yaml>`_

   PIASO is a Python toolkit for precise integrative analysis of single\-cell omics data.
   It provides methods for single\-cell RNA\-seq and ATAC\-seq data analysis\, including
   batch integration\, clustering\, and visualization.



.. conda:package:: piaso

   |downloads_piaso| |docker_piaso|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends anndata: ``>=0.8``
   :depends cosg: ``>=1.0.3``
   :depends matplotlib-base: ``>=3.5.2``
   :depends numpy: ``>=1.21.6``
   :depends pandas: ``>=1.4.4``
   :depends python: ``>=3.9``
   :depends requests: 
   :depends scanpy: ``>=1.9.1``
   :depends scikit-learn: ``>=1.1``
   :depends scipy: ``>=1.7.3``
   :depends seaborn: ``>=0.11.2``
   :depends statsmodels: ``>=0.13.2``
   :depends tqdm: 
   :depends typing_extensions: 
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

      mamba install piaso

   and update with::

      mamba update piaso

  To create a new environment, run::

      mamba create --name myenvname piaso

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/piaso:<tag>

   (see `piaso/tags`_ for valid values for ``<tag>``)


.. |downloads_piaso| image:: https://img.shields.io/conda/dn/bioconda/piaso.svg?style=flat
   :target: https://anaconda.org/bioconda/piaso
   :alt:   (downloads)
.. |docker_piaso| image:: https://quay.io/repository/biocontainers/piaso/status
   :target: https://quay.io/repository/biocontainers/piaso
.. _`piaso/tags`: https://quay.io/repository/biocontainers/piaso?tab=tags


.. raw:: html

    <script>
        var package = "piaso";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piaso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piaso/README.html