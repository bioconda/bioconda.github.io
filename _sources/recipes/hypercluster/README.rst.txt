:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hypercluster'
.. highlight: bash

hypercluster
============

.. conda:recipe:: hypercluster
   :replaces_section_title:
   :noindex:

   A package for automatic clustering hyperparameter optmization

   :homepage: https://github.com/liliblu/hypercluster
   :documentation: https://hypercluster.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`hypercluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hypercluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hypercluster/meta.yaml>`_

   


.. conda:package:: hypercluster

   |downloads_hypercluster| |docker_hypercluster|

   :versions:
      
      

      ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.0.2-0``

      

   
   :depends hdbscan: ``>=0.8.24``
   :depends igraph: ``>=0.7.1``
   :depends leidenalg: ``>=0.7.0``
   :depends louvain: ``>=0.6.1``
   :depends matplotlib: ``>=3.1.0``
   :depends numpy: ``>=1.16.4``
   :depends pandas: ``>=0.24.2``
   :depends scikit-learn: ``>=0.22.0``
   :depends scipy: ``>=1.2.1``
   :depends seaborn: ``>=0.9.0``
   :depends snakemake: ``>=5.8.2``
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

      mamba install hypercluster

   and update with::

      mamba update hypercluster

  To create a new environment, run::

      mamba create --name myenvname hypercluster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hypercluster:<tag>

   (see `hypercluster/tags`_ for valid values for ``<tag>``)


.. |downloads_hypercluster| image:: https://img.shields.io/conda/dn/bioconda/hypercluster.svg?style=flat
   :target: https://anaconda.org/bioconda/hypercluster
   :alt:   (downloads)
.. |docker_hypercluster| image:: https://quay.io/repository/biocontainers/hypercluster/status
   :target: https://quay.io/repository/biocontainers/hypercluster
.. _`hypercluster/tags`: https://quay.io/repository/biocontainers/hypercluster?tab=tags


.. raw:: html

    <script>
        var package = "hypercluster";
        var versions = ["0.1.13","0.1.12","0.1.10","0.1.9","0.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hypercluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hypercluster/README.html