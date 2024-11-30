:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepmased'
.. highlight: bash

deepmased
=========

.. conda:recipe:: deepmased
   :replaces_section_title:
   :noindex:

   Deep learning for Metagenome Assembly Error Detection

   :homepage: https://github.com/leylabmpi/DeepMAsED
   :license: MIT / MIT
   :recipe: /`deepmased <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmased>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmased/meta.yaml>`_

   Deep learning for Metagenome Assembly Error Detection
    See README for more information.


.. conda:package:: deepmased

   |downloads_deepmased| |docker_deepmased|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends ipython: 
   :depends keras: 
   :depends numpy: ``>=1.17.0``
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends scikit-learn: 
   :depends scipy: ``>=1.3.1``
   :depends snakemake: 
   :depends tensorboard: 
   :depends tensorflow: ``>=2.0``
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

      mamba install deepmased

   and update with::

      mamba update deepmased

  To create a new environment, run::

      mamba create --name myenvname deepmased

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepmased:<tag>

   (see `deepmased/tags`_ for valid values for ``<tag>``)


.. |downloads_deepmased| image:: https://img.shields.io/conda/dn/bioconda/deepmased.svg?style=flat
   :target: https://anaconda.org/bioconda/deepmased
   :alt:   (downloads)
.. |docker_deepmased| image:: https://quay.io/repository/biocontainers/deepmased/status
   :target: https://quay.io/repository/biocontainers/deepmased
.. _`deepmased/tags`: https://quay.io/repository/biocontainers/deepmased?tab=tags


.. raw:: html

    <script>
        var package = "deepmased";
        var versions = ["0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepmased/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepmased/README.html