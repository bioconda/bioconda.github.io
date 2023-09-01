:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autogenes'
.. highlight: bash

autogenes
=========

.. conda:recipe:: autogenes
   :replaces_section_title:
   :noindex:

   Automatic Gene Selection for Bulk Deconvolution.

   :homepage: https://github.com/theislab/AutoGeneS
   :license: MIT
   :recipe: /`autogenes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autogenes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autogenes/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2021.05.006`

   


.. conda:package:: autogenes

   |downloads_autogenes| |docker_autogenes|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends anndata: ``>=0.6.22.post1``
   :depends cachetools: ``>=3.1.1``
   :depends deap: ``>=1.3.0``
   :depends dill: ``>=0.3.1.1``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.17.2``
   :depends pandas: ``>=0.25.1``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``>=0.21.3``
   :depends scipy: ``>=1.3``
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

      mamba install autogenes

   and update with::

      mamba update autogenes

  To create a new environment, run::

      mamba create --name myenvname autogenes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/autogenes:<tag>

   (see `autogenes/tags`_ for valid values for ``<tag>``)


.. |downloads_autogenes| image:: https://img.shields.io/conda/dn/bioconda/autogenes.svg?style=flat
   :target: https://anaconda.org/bioconda/autogenes
   :alt:   (downloads)
.. |docker_autogenes| image:: https://quay.io/repository/biocontainers/autogenes/status
   :target: https://quay.io/repository/biocontainers/autogenes
.. _`autogenes/tags`: https://quay.io/repository/biocontainers/autogenes?tab=tags


.. raw:: html

    <script>
        var package = "autogenes";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autogenes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autogenes/README.html