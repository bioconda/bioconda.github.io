:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-schema'
.. highlight: bash

galaxy-schema
=============

.. conda:recipe:: galaxy-schema
   :replaces_section_title:
   :noindex:

   The Galaxy API schema objects.

   :homepage: https://galaxyproject.org
   :documentation: https://docs.galaxyproject.org
   
   :developer docs: https://github.com/galaxyproject/galaxy
   :license: MIT / MIT
   :recipe: /`galaxy-schema <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-schema>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-schema/meta.yaml>`_
   :links: biotools: :biotools:`galaxy`, doi: :doi:`10.1093/nar/gky379`

   


.. conda:package:: galaxy-schema

   |downloads_galaxy-schema| |docker_galaxy-schema|

   :versions:
      
      

      ``24.2.4-0``,  ``24.2.3-0``,  ``24.2.2-0``,  ``24.2.1-0``,  ``24.2.0-0``,  ``24.1.4-0``,  ``24.1.3-0``,  ``24.1.2-0``,  ``24.1.1-0``

      

   
   :depends email-validator: 
   :depends galaxy-util: ``>=24.2``
   :depends pydantic: ``>=2.7.4``
   :depends python: ``>=3.8``
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

      mamba install galaxy-schema

   and update with::

      mamba update galaxy-schema

  To create a new environment, run::

      mamba create --name myenvname galaxy-schema

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy-schema:<tag>

   (see `galaxy-schema/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-schema| image:: https://img.shields.io/conda/dn/bioconda/galaxy-schema.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-schema
   :alt:   (downloads)
.. |docker_galaxy-schema| image:: https://quay.io/repository/biocontainers/galaxy-schema/status
   :target: https://quay.io/repository/biocontainers/galaxy-schema
.. _`galaxy-schema/tags`: https://quay.io/repository/biocontainers/galaxy-schema?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-schema";
        var versions = ["24.2.4","24.2.3","24.2.2","24.2.1","24.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-schema/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-schema/README.html