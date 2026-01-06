:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'altex-be'
.. highlight: bash

altex-be
========

.. conda:recipe:: altex-be
   :replaces_section_title:
   :noindex:

   Automatically design sgRNA for exon skipping with many base editors.

   :homepage: https://github.com/kinari-labwork/AltEx-BE
   :license: MIT / MIT
   :recipe: /`altex-be <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/altex-be>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/altex-be/meta.yaml>`_

   


.. conda:package:: altex-be

   |downloads_altex-be| |docker_altex-be|

   :versions:
      
      

      ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends pandas: ``>=2.3.0,<3.0.0``
   :depends pyahocorasick: ``>=2.2.0,<3.0.0``
   :depends pybedtools: ``>=0.12.0,<0.13.0``
   :depends python: ``>=3.12.0,<4.0.0``
   :depends tqdm: ``>=4.67.1,<5.0.0``
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

      mamba install altex-be

   and update with::

      mamba update altex-be

  To create a new environment, run::

      mamba create --name myenvname altex-be

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/altex-be:<tag>

   (see `altex-be/tags`_ for valid values for ``<tag>``)


.. |downloads_altex-be| image:: https://img.shields.io/conda/dn/bioconda/altex-be.svg?style=flat
   :target: https://anaconda.org/bioconda/altex-be
   :alt:   (downloads)
.. |docker_altex-be| image:: https://quay.io/repository/biocontainers/altex-be/status
   :target: https://quay.io/repository/biocontainers/altex-be
.. _`altex-be/tags`: https://quay.io/repository/biocontainers/altex-be?tab=tags


.. raw:: html

    <script>
        var package = "altex-be";
        var versions = ["1.0.5","1.0.3","1.0.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/altex-be/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/altex-be/README.html