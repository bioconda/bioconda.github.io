:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psauron'
.. highlight: bash

psauron
=======

.. conda:recipe:: psauron
   :replaces_section_title:
   :noindex:

   PSAURON\: a machine learning model for rapid assessment of protein coding gene annotation

   :homepage: https://github.com/salzberg-lab/PSAURON
   :license: MIT / MIT License
   :recipe: /`psauron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psauron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psauron/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqae189`

   


.. conda:package:: psauron

   |downloads_psauron| |docker_psauron|

   :versions:
      
      

      ``1.0.6-0``

      

   
   :depends numpy: ``>=1.24.4,<2``
   :depends pandas: 
   :depends python: ``>=3.9,<3.13``
   :depends pytorch: ``>=2.1.2``
   :depends scipy: ``>=1.10.1``
   :depends setuptools: 
   :depends torchaudio: ``>=2.1.2``
   :depends torchvision: ``>=0.16.2``
   :depends tqdm: ``>=4.66.1``
   :depends typing_extensions: ``>=4.9.0``
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

      mamba install psauron

   and update with::

      mamba update psauron

  To create a new environment, run::

      mamba create --name myenvname psauron

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/psauron:<tag>

   (see `psauron/tags`_ for valid values for ``<tag>``)


.. |downloads_psauron| image:: https://img.shields.io/conda/dn/bioconda/psauron.svg?style=flat
   :target: https://anaconda.org/bioconda/psauron
   :alt:   (downloads)
.. |docker_psauron| image:: https://quay.io/repository/biocontainers/psauron/status
   :target: https://quay.io/repository/biocontainers/psauron
.. _`psauron/tags`: https://quay.io/repository/biocontainers/psauron?tab=tags


.. raw:: html

    <script>
        var package = "psauron";
        var versions = ["1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psauron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psauron/README.html