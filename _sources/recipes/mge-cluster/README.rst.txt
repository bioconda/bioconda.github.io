:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mge-cluster'
.. highlight: bash

mge-cluster
===========

.. conda:recipe:: mge-cluster
   :replaces_section_title:
   :noindex:

   A classification framework for mobile genetic elements \(MGEs\)

   :homepage: https://gitlab.com/sirarredondo/mge_cluster
   :license: MIT / MIT
   :recipe: /`mge-cluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mge-cluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mge-cluster/meta.yaml>`_

   


.. conda:package:: mge-cluster

   |downloads_mge-cluster| |docker_mge-cluster|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.2-0``

      

   
   :depends bifrost: ``>=1.0.6``
   :depends hdbscan: 
   :depends joblib: ``1.1.0``
   :depends numpy: ``>=1.16.6``
   :depends opentsne: 
   :depends pandas: 
   :depends python: 
   :depends scikit-learn: ``>=0.20``
   :depends unitig-caller: ``1.3.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mge-cluster

   and update with::

      mamba update mge-cluster

  To create a new environment, run::

      mamba create --name myenvname mge-cluster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mge-cluster:<tag>

   (see `mge-cluster/tags`_ for valid values for ``<tag>``)


.. |downloads_mge-cluster| image:: https://img.shields.io/conda/dn/bioconda/mge-cluster.svg?style=flat
   :target: https://anaconda.org/bioconda/mge-cluster
   :alt:   (downloads)
.. |docker_mge-cluster| image:: https://quay.io/repository/biocontainers/mge-cluster/status
   :target: https://quay.io/repository/biocontainers/mge-cluster
.. _`mge-cluster/tags`: https://quay.io/repository/biocontainers/mge-cluster?tab=tags


.. raw:: html

    <script>
        var package = "mge-cluster";
        var versions = ["1.1.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mge-cluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mge-cluster/README.html