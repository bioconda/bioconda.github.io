:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ifeature'
.. highlight: bash

ifeature
========

.. conda:recipe:: ifeature
   :replaces_section_title:
   :noindex:

   A python package for feature extraction and selection from protein and peptide sequences

   :homepage: https://github.com/Jie-Yuan/iFeature
   :license: MIT / MIT
   :recipe: /`ifeature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ifeature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ifeature/meta.yaml>`_

   


.. conda:package:: ifeature

   |downloads_ifeature| |docker_ifeature|

   :versions:
      
      

      ``0.0.6-0``

      

   
   :depends jieba: 
   :depends lightgbm: ``3.0.0``
   :depends numpy: ``>=1.10.4``
   :depends pandas: ``>=0.18.1``
   :depends python: 
   :depends six: ``1.15.0``
   :depends tqdm: ``4.49.0``
   :depends wrapt: ``1.12.1``
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

      mamba install ifeature

   and update with::

      mamba update ifeature

  To create a new environment, run::

      mamba create --name myenvname ifeature

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ifeature:<tag>

   (see `ifeature/tags`_ for valid values for ``<tag>``)


.. |downloads_ifeature| image:: https://img.shields.io/conda/dn/bioconda/ifeature.svg?style=flat
   :target: https://anaconda.org/bioconda/ifeature
   :alt:   (downloads)
.. |docker_ifeature| image:: https://quay.io/repository/biocontainers/ifeature/status
   :target: https://quay.io/repository/biocontainers/ifeature
.. _`ifeature/tags`: https://quay.io/repository/biocontainers/ifeature?tab=tags


.. raw:: html

    <script>
        var package = "ifeature";
        var versions = ["0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ifeature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ifeature/README.html