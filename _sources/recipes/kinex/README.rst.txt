:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kinex'
.. highlight: bash

kinex
=====

.. conda:recipe:: kinex
   :replaces_section_title:
   :noindex:

   Kinex infers causal kinases from phosphoproteomics data

   :homepage: https://github.com/bedapub/kinex
   :documentation: https://kinex.readthedocs.io/en/latest/
   
   :license: GPL-3.0-only
   :recipe: /`kinex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kinex/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.11.23.568445`

   


.. conda:package:: kinex

   |downloads_kinex| |docker_kinex|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends importlib-resources: 
   :depends nbformat: ``>=4.2.0``
   :depends numpy: ``>=1.19.5``
   :depends pandas: 
   :depends plotly: 
   :depends python: ``>=3.8,<=3.11``
   :depends scikit-learn: 
   :depends scipy: ``>=1.10.0``
   :depends statsmodels: 
   :depends umap-learn: 
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

      mamba install kinex

   and update with::

      mamba update kinex

  To create a new environment, run::

      mamba create --name myenvname kinex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kinex:<tag>

   (see `kinex/tags`_ for valid values for ``<tag>``)


.. |downloads_kinex| image:: https://img.shields.io/conda/dn/bioconda/kinex.svg?style=flat
   :target: https://anaconda.org/bioconda/kinex
   :alt:   (downloads)
.. |docker_kinex| image:: https://quay.io/repository/biocontainers/kinex/status
   :target: https://quay.io/repository/biocontainers/kinex
.. _`kinex/tags`: https://quay.io/repository/biocontainers/kinex?tab=tags


.. raw:: html

    <script>
        var package = "kinex";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kinex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kinex/README.html