:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scmidas'
.. highlight: bash

scmidas
=======

.. conda:recipe:: scmidas
   :replaces_section_title:
   :noindex:

   A torch\-based integration method for single\-cell multi\-omic data.

   :homepage: https://github.com/labomics/midas
   :documentation: https://scmidas.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`scmidas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scmidas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scmidas/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-02040-y`

   


.. conda:package:: scmidas

   |downloads_scmidas| |docker_scmidas|

   :versions:
      
      

      ``0.1.3-0``,  ``0.0.18-0``,  ``0.0.17-0``

      

   
   :depends anndata: 
   :depends ipykernel: 
   :depends lightning: ``>=2.4.0``
   :depends lightning-utilities: ``>=0.11.8``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends pytorch: ``>=2.5.1``
   :depends requests: 
   :depends scanpy: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends tensorboard: 
   :depends toml: 
   :depends torchaudio: ``>=2.5.1``
   :depends torchmetrics: ``>=1.5.1``
   :depends torchvision: ``>=0.20.1``
   :depends tornado: 
   :depends tqdm: 
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

      mamba install scmidas

   and update with::

      mamba update scmidas

  To create a new environment, run::

      mamba create --name myenvname scmidas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scmidas:<tag>

   (see `scmidas/tags`_ for valid values for ``<tag>``)


.. |downloads_scmidas| image:: https://img.shields.io/conda/dn/bioconda/scmidas.svg?style=flat
   :target: https://anaconda.org/bioconda/scmidas
   :alt:   (downloads)
.. |docker_scmidas| image:: https://quay.io/repository/biocontainers/scmidas/status
   :target: https://quay.io/repository/biocontainers/scmidas
.. _`scmidas/tags`: https://quay.io/repository/biocontainers/scmidas?tab=tags


.. raw:: html

    <script>
        var package = "scmidas";
        var versions = ["0.1.3","0.0.18","0.0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scmidas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scmidas/README.html