:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cromwell-tools'
.. highlight: bash

cromwell-tools
==============

.. conda:recipe:: cromwell-tools
   :replaces_section_title:
   :noindex:

   Utilities for interacting with the Cromwell workflow engine

   :homepage: http://github.com/broadinstitute/cromwell-tools
   :documentation: https://cromwell-tools.readthedocs.io/en/stable/
   
   :license: BSD / BSD
   :recipe: /`cromwell-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cromwell-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cromwell-tools/meta.yaml>`_

   


.. conda:package:: cromwell-tools

   |downloads_cromwell-tools| |docker_cromwell-tools|

   :versions:
      
      

      ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.3-0``,  ``2.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends google-api-python-client: ``1.7.11.*``
   :depends google-auth: ``>=1.6.1,<2``
   :depends python: ``>=3.6``
   :depends python-dateutil: ``2.8.0.*``
   :depends requests: ``>=2.20.0,<3``
   :depends setuptools_scm: ``>=3.1.0,<4``
   :depends six: ``>=1.11.0``
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

      mamba install cromwell-tools

   and update with::

      mamba update cromwell-tools

  To create a new environment, run::

      mamba create --name myenvname cromwell-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cromwell-tools:<tag>

   (see `cromwell-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_cromwell-tools| image:: https://img.shields.io/conda/dn/bioconda/cromwell-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/cromwell-tools
   :alt:   (downloads)
.. |docker_cromwell-tools| image:: https://quay.io/repository/biocontainers/cromwell-tools/status
   :target: https://quay.io/repository/biocontainers/cromwell-tools
.. _`cromwell-tools/tags`: https://quay.io/repository/biocontainers/cromwell-tools?tab=tags


.. raw:: html

    <script>
        var package = "cromwell-tools";
        var versions = ["2.4.1","2.4.0","2.3.0","2.2.3","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cromwell-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cromwell-tools/README.html