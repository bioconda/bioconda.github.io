:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mikrokondo-tools'
.. highlight: bash

mikrokondo-tools
================

.. conda:recipe:: mikrokondo-tools
   :replaces_section_title:
   :noindex:

   A collection of utilities to make using the mikrokondo pipeline easier

   :homepage: https://pypi.org/project/mikrokondo-tools
   :developer docs: https://github.com/DOED-DAAD/mikrokondo-tools
   :license: Apache-2.0
   :recipe: /`mikrokondo-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikrokondo-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikrokondo-tools/meta.yaml>`_

   


.. conda:package:: mikrokondo-tools

   |downloads_mikrokondo-tools| |docker_mikrokondo-tools|

   :versions:
      
      

      ``0.0.1rc0-0``

      

   
   :depends click: 
   :depends jsonschema: 
   :depends python: ``>=3.8``
   :depends requests: 
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

      mamba install mikrokondo-tools

   and update with::

      mamba update mikrokondo-tools

  To create a new environment, run::

      mamba create --name myenvname mikrokondo-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mikrokondo-tools:<tag>

   (see `mikrokondo-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_mikrokondo-tools| image:: https://img.shields.io/conda/dn/bioconda/mikrokondo-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/mikrokondo-tools
   :alt:   (downloads)
.. |docker_mikrokondo-tools| image:: https://quay.io/repository/biocontainers/mikrokondo-tools/status
   :target: https://quay.io/repository/biocontainers/mikrokondo-tools
.. _`mikrokondo-tools/tags`: https://quay.io/repository/biocontainers/mikrokondo-tools?tab=tags


.. raw:: html

    <script>
        var package = "mikrokondo-tools";
        var versions = ["0.0.1rc0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mikrokondo-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mikrokondo-tools/README.html