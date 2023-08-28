:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'argparse2tool'
.. highlight: bash

argparse2tool
=============

.. conda:recipe:: argparse2tool
   :replaces_section_title:
   :noindex:

   Instrument for forming Galaxy XML and CWL tool descriptions from argparse arguments

   :homepage: https://github.com/erasche/argparse2tool
   :license: Apache / Apache-2.0
   :recipe: /`argparse2tool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argparse2tool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argparse2tool/meta.yaml>`_

   


.. conda:package:: argparse2tool

   |downloads_argparse2tool| |docker_argparse2tool|

   :versions:
      
      

      ``0.4.9-0``

      

   
   :depends click: 
   :depends galaxyxml: ``>=0.2.3``
   :depends jinja2: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install argparse2tool

   and update with::

      mamba update argparse2tool

  To create a new environment, run::

      mamba create --name myenvname argparse2tool

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/argparse2tool:<tag>

   (see `argparse2tool/tags`_ for valid values for ``<tag>``)


.. |downloads_argparse2tool| image:: https://img.shields.io/conda/dn/bioconda/argparse2tool.svg?style=flat
   :target: https://anaconda.org/bioconda/argparse2tool
   :alt:   (downloads)
.. |docker_argparse2tool| image:: https://quay.io/repository/biocontainers/argparse2tool/status
   :target: https://quay.io/repository/biocontainers/argparse2tool
.. _`argparse2tool/tags`: https://quay.io/repository/biocontainers/argparse2tool?tab=tags


.. raw:: html

    <script>
        var package = "argparse2tool";
        var versions = ["0.4.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/argparse2tool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/argparse2tool/README.html