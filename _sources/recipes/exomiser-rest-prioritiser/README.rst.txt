:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'exomiser-rest-prioritiser'
.. highlight: bash

exomiser-rest-prioritiser
=========================

.. conda:recipe:: exomiser-rest-prioritiser
   :replaces_section_title:
   :noindex:

   Exomiser prioritiser REST API

   :homepage: https://github.com/exomiser/Exomiser
   :license: AGPL3
   :recipe: /`exomiser-rest-prioritiser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/exomiser-rest-prioritiser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/exomiser-rest-prioritiser/meta.yaml>`_

   


.. conda:package:: exomiser-rest-prioritiser

   |downloads_exomiser-rest-prioritiser| |docker_exomiser-rest-prioritiser|

   :versions:
      
      

      ``13.2.1-0``,  ``13.2.0-0``,  ``12.1.0-2``,  ``12.1.0-1``,  ``12.1.0-0``

      

   
   :depends openjdk: ``>=8``
   :depends zlib: 
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

      mamba install exomiser-rest-prioritiser

   and update with::

      mamba update exomiser-rest-prioritiser

  To create a new environment, run::

      mamba create --name myenvname exomiser-rest-prioritiser

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/exomiser-rest-prioritiser:<tag>

   (see `exomiser-rest-prioritiser/tags`_ for valid values for ``<tag>``)


.. |downloads_exomiser-rest-prioritiser| image:: https://img.shields.io/conda/dn/bioconda/exomiser-rest-prioritiser.svg?style=flat
   :target: https://anaconda.org/bioconda/exomiser-rest-prioritiser
   :alt:   (downloads)
.. |docker_exomiser-rest-prioritiser| image:: https://quay.io/repository/biocontainers/exomiser-rest-prioritiser/status
   :target: https://quay.io/repository/biocontainers/exomiser-rest-prioritiser
.. _`exomiser-rest-prioritiser/tags`: https://quay.io/repository/biocontainers/exomiser-rest-prioritiser?tab=tags


.. raw:: html

    <script>
        var package = "exomiser-rest-prioritiser";
        var versions = ["13.2.1","13.2.0","12.1.0","12.1.0","12.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/exomiser-rest-prioritiser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/exomiser-rest-prioritiser/README.html