:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grz-pydantic-models'
.. highlight: bash

grz-pydantic-models
===================

.. conda:recipe:: grz-pydantic-models
   :replaces_section_title:
   :noindex:

   Pydantic models for the GRZ metadata schema

   :homepage: https://github.com/BfArM-MVH/grz-pydantic-models
   :license: MIT
   :recipe: /`grz-pydantic-models <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grz-pydantic-models>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grz-pydantic-models/meta.yaml>`_

   


.. conda:package:: grz-pydantic-models

   |downloads_grz-pydantic-models| |docker_grz-pydantic-models|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``

      

   
   :depends pydantic: ``>=2.9.2,<3``
   :depends python: ``>=3.12``
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

      mamba install grz-pydantic-models

   and update with::

      mamba update grz-pydantic-models

  To create a new environment, run::

      mamba create --name myenvname grz-pydantic-models

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/grz-pydantic-models:<tag>

   (see `grz-pydantic-models/tags`_ for valid values for ``<tag>``)


.. |downloads_grz-pydantic-models| image:: https://img.shields.io/conda/dn/bioconda/grz-pydantic-models.svg?style=flat
   :target: https://anaconda.org/bioconda/grz-pydantic-models
   :alt:   (downloads)
.. |docker_grz-pydantic-models| image:: https://quay.io/repository/biocontainers/grz-pydantic-models/status
   :target: https://quay.io/repository/biocontainers/grz-pydantic-models
.. _`grz-pydantic-models/tags`: https://quay.io/repository/biocontainers/grz-pydantic-models?tab=tags


.. raw:: html

    <script>
        var package = "grz-pydantic-models";
        var versions = ["1.3.0","1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grz-pydantic-models/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grz-pydantic-models/README.html