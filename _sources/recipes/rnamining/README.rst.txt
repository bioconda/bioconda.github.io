:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnamining'
.. highlight: bash

rnamining
=========

.. conda:recipe:: rnamining
   :replaces_section_title:
   :noindex:

   Package to predict potential coding of RNA sequences provided in fasta format

   :homepage: https://github.com/lfreitasl/RNAmining/tree/pypackage
   :license: MIT
   :recipe: /`rnamining <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnamining>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnamining/meta.yaml>`_

   


.. conda:package:: rnamining

   |downloads_rnamining| |docker_rnamining|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends biopython: ``>=1.78``
   :depends pandas: ``>=0.23.3``
   :depends python: ``>=3.8``
   :depends scikit-learn: ``>=0.21.3``
   :depends scipy: 
   :depends xgboost: ``1.2.0``
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

      mamba install rnamining

   and update with::

      mamba update rnamining

  To create a new environment, run::

      mamba create --name myenvname rnamining

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rnamining:<tag>

   (see `rnamining/tags`_ for valid values for ``<tag>``)


.. |downloads_rnamining| image:: https://img.shields.io/conda/dn/bioconda/rnamining.svg?style=flat
   :target: https://anaconda.org/bioconda/rnamining
   :alt:   (downloads)
.. |docker_rnamining| image:: https://quay.io/repository/biocontainers/rnamining/status
   :target: https://quay.io/repository/biocontainers/rnamining
.. _`rnamining/tags`: https://quay.io/repository/biocontainers/rnamining?tab=tags


.. raw:: html

    <script>
        var package = "rnamining";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnamining/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnamining/README.html