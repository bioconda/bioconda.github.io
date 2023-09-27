:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'decom'
.. highlight: bash

decom
=====

.. conda:recipe:: decom
   :replaces_section_title:
   :noindex:

   decOM\: Similarity\-based microbial source tracking for contamination assessment of ancient oral samples using k\-mer\-based methods

   :homepage: https://github.com/CamilaDuitama/decOM
   :developer docs: https://camiladuitama.github.io/gradfolio/
   :license: MIT / MIT
   :recipe: /`decom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/decom/meta.yaml>`_

   


.. conda:package:: decom

   |downloads_decom| |docker_decom|

   :versions:
      
      

      ``0.0.32-0``

      

   
   :depends colorama: 
   :depends dask: ``>=2021.12.0``
   :depends git: 
   :depends importlib_resources: ``>=5.4.0``
   :depends numpy: ``>=1.7``
   :depends pandas: 
   :depends plotly: ``>=5.5.0``
   :depends python: 
   :depends python-kaleido: 
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

      mamba install decom

   and update with::

      mamba update decom

  To create a new environment, run::

      mamba create --name myenvname decom

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/decom:<tag>

   (see `decom/tags`_ for valid values for ``<tag>``)


.. |downloads_decom| image:: https://img.shields.io/conda/dn/bioconda/decom.svg?style=flat
   :target: https://anaconda.org/bioconda/decom
   :alt:   (downloads)
.. |docker_decom| image:: https://quay.io/repository/biocontainers/decom/status
   :target: https://quay.io/repository/biocontainers/decom
.. _`decom/tags`: https://quay.io/repository/biocontainers/decom?tab=tags


.. raw:: html

    <script>
        var package = "decom";
        var versions = ["0.0.32"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/decom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/decom/README.html