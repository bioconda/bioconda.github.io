:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'decoupler'
.. highlight: bash

decoupler
=========

.. conda:recipe:: decoupler
   :replaces_section_title:
   :noindex:

   Ensemble of methods to infer biological activities from omics data

   :homepage: https://github.com/saezlab/decoupler-py
   :license: GPL-3.0
   :recipe: /`decoupler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decoupler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decoupler/meta.yaml>`_

   


.. conda:package:: decoupler

   |downloads_decoupler| |docker_decoupler|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends anndata: 
   :depends numba: 
   :depends python: ``>=3.6``
   :depends tqdm: 
   :depends typing-extensions: 
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

      mamba install decoupler

   and update with::

      mamba update decoupler

  To create a new environment, run::

      mamba create --name myenvname decoupler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/decoupler:<tag>

   (see `decoupler/tags`_ for valid values for ``<tag>``)


.. |downloads_decoupler| image:: https://img.shields.io/conda/dn/bioconda/decoupler.svg?style=flat
   :target: https://anaconda.org/bioconda/decoupler
   :alt:   (downloads)
.. |docker_decoupler| image:: https://quay.io/repository/biocontainers/decoupler/status
   :target: https://quay.io/repository/biocontainers/decoupler
.. _`decoupler/tags`: https://quay.io/repository/biocontainers/decoupler?tab=tags


.. raw:: html

    <script>
        var package = "decoupler";
        var versions = ["1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/decoupler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/decoupler/README.html