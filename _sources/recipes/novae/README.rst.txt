:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'novae'
.. highlight: bash

novae
=====

.. conda:recipe:: novae
   :replaces_section_title:
   :noindex:

   Graph\-based foundation model for spatial transcriptomics data.

   :homepage: https://mics-lab.github.io/novae
   :developer docs: https://github.com/MICS-Lab/novae
   :license: BSD / BSD-3-Clause
   :recipe: /`novae <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novae>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novae/meta.yaml>`_

   


.. conda:package:: novae

   |downloads_novae| |docker_novae|

   :versions:
      
      

      ``1.0.0-0``,  ``0.2.4-0``,  ``0.2.2-0``

      

   
   :depends huggingface_hub: ``>=0.24.0``
   :depends lightning: ``>=2.2.1``
   :depends pandas: ``>=2.0.0``
   :depends python: ``>=3.10,<3.13``
   :depends python-igraph: ``>=0.11.8``
   :depends pytorch: ``>=2.2.1``
   :depends pytorch_geometric: ``>=2.5.2``
   :depends safetensors: ``>=0.4.3``
   :depends scanpy: ``>=1.9.8``
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

      mamba install novae

   and update with::

      mamba update novae

  To create a new environment, run::

      mamba create --name myenvname novae

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/novae:<tag>

   (see `novae/tags`_ for valid values for ``<tag>``)


.. |downloads_novae| image:: https://img.shields.io/conda/dn/bioconda/novae.svg?style=flat
   :target: https://anaconda.org/bioconda/novae
   :alt:   (downloads)
.. |docker_novae| image:: https://quay.io/repository/biocontainers/novae/status
   :target: https://quay.io/repository/biocontainers/novae
.. _`novae/tags`: https://quay.io/repository/biocontainers/novae?tab=tags


.. raw:: html

    <script>
        var package = "novae";
        var versions = ["1.0.0","0.2.4","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/novae/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/novae/README.html