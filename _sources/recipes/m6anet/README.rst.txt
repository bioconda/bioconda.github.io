:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'm6anet'
.. highlight: bash

m6anet
======

.. conda:recipe:: m6anet
   :replaces_section_title:
   :noindex:

   m6anet is a python package for detection of m6a modifications from Nanopore direct RNA sequencing data.

   :homepage: https://github.com/GoekeLab/m6anet
   :license: MIT
   :recipe: /`m6anet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/m6anet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/m6anet/meta.yaml>`_

   


.. conda:package:: m6anet

   |downloads_m6anet| |docker_m6anet|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.2-0``

      

   
   :depends joblib: 
   :depends numpy: ``>=1.18.0``
   :depends pandas: ``>=0.25.3``
   :depends python: ``>=3.7,<3.9``
   :depends pytorch: ``1.6.0``
   :depends scikit-learn: ``>=0.24.0``
   :depends scipy: ``>=1.10``
   :depends toml: ``>=0.10.2``
   :depends tqdm: 
   :depends typing-extensions: 
   :depends ujson: 
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

      mamba install m6anet

   and update with::

      mamba update m6anet

  To create a new environment, run::

      mamba create --name myenvname m6anet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/m6anet:<tag>

   (see `m6anet/tags`_ for valid values for ``<tag>``)


.. |downloads_m6anet| image:: https://img.shields.io/conda/dn/bioconda/m6anet.svg?style=flat
   :target: https://anaconda.org/bioconda/m6anet
   :alt:   (downloads)
.. |docker_m6anet| image:: https://quay.io/repository/biocontainers/m6anet/status
   :target: https://quay.io/repository/biocontainers/m6anet
.. _`m6anet/tags`: https://quay.io/repository/biocontainers/m6anet?tab=tags


.. raw:: html

    <script>
        var package = "m6anet";
        var versions = ["2.1.0","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/m6anet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/m6anet/README.html