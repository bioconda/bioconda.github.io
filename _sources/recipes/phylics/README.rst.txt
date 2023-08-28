:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylics'
.. highlight: bash

phylics
=======

.. conda:recipe:: phylics
   :replaces_section_title:
   :noindex:

   Single\-cell CNV data analysis toolkit

   :homepage: https://github.com/bioinformatics-polito/PhyliCS
   :license: AGPL3
   :recipe: /`phylics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylics/meta.yaml>`_

   


.. conda:package:: phylics

   |downloads_phylics| |docker_phylics|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends anndata: ``>=0.7.5``
   :depends ipython: ``>=7.19.0``
   :depends joblib: ``>=1.0.0``
   :depends matplotlib-base: ``>=3.3.1``
   :depends numpy: ``>=1.19.5``
   :depends pandas: ``>=1.1.3``
   :depends python: ``>=3.7,<3.9``
   :depends scikit-learn: ``>=0.24``
   :depends scipy: ``>=1.6.0``
   :depends seaborn: ``>=0.11.1``
   :depends statsmodels: ``>=0.12.0``
   :depends typing: 
   :depends umap-learn: ``>=0.4.6``
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

      mamba install phylics

   and update with::

      mamba update phylics

  To create a new environment, run::

      mamba create --name myenvname phylics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylics:<tag>

   (see `phylics/tags`_ for valid values for ``<tag>``)


.. |downloads_phylics| image:: https://img.shields.io/conda/dn/bioconda/phylics.svg?style=flat
   :target: https://anaconda.org/bioconda/phylics
   :alt:   (downloads)
.. |docker_phylics| image:: https://quay.io/repository/biocontainers/phylics/status
   :target: https://quay.io/repository/biocontainers/phylics
.. _`phylics/tags`: https://quay.io/repository/biocontainers/phylics?tab=tags


.. raw:: html

    <script>
        var package = "phylics";
        var versions = ["1.0.7","1.0.5","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylics/README.html