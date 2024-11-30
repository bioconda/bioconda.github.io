:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrovelocity'
.. highlight: bash

pyrovelocity
============

.. conda:recipe:: pyrovelocity
   :replaces_section_title:
   :noindex:

   Probabilistic RNA velocity for cell fate uncertainty estimation

   :homepage: https://github.com/pinellolab/pyrovelocity
   :documentation: https://pyrovelocity.readthedocs.io/en/latest/
   
   :license: GPL / Affero GPL V3
   :recipe: /`pyrovelocity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrovelocity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrovelocity/meta.yaml>`_

   


.. conda:package:: pyrovelocity

   |downloads_pyrovelocity| |docker_pyrovelocity|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends adjusttext: 
   :depends anndata: ``0.7.5``
   :depends astropy: 
   :depends h5py: 
   :depends ipykernel: 
   :depends ipywidgets: 
   :depends jupyterlab: 
   :depends pyro-ppl: ``1.6.0``
   :depends python: ``3.8.8``
   :depends pytorch-gpu: ``1.8.*``
   :depends pytorch-lightning: ``1.3.0``
   :depends scvelo: ``0.2.4``
   :depends scvi-tools: ``0.13.0``
   :depends seaborn: ``0.11.2``
   :depends torchmetrics: ``0.5.1``
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

      mamba install pyrovelocity

   and update with::

      mamba update pyrovelocity

  To create a new environment, run::

      mamba create --name myenvname pyrovelocity

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyrovelocity:<tag>

   (see `pyrovelocity/tags`_ for valid values for ``<tag>``)


.. |downloads_pyrovelocity| image:: https://img.shields.io/conda/dn/bioconda/pyrovelocity.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrovelocity
   :alt:   (downloads)
.. |docker_pyrovelocity| image:: https://quay.io/repository/biocontainers/pyrovelocity/status
   :target: https://quay.io/repository/biocontainers/pyrovelocity
.. _`pyrovelocity/tags`: https://quay.io/repository/biocontainers/pyrovelocity?tab=tags


.. raw:: html

    <script>
        var package = "pyrovelocity";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrovelocity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrovelocity/README.html