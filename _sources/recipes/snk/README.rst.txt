:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snk'
.. highlight: bash

snk
===

.. conda:recipe:: snk
   :replaces_section_title:
   :noindex:

   A Snakemake CLI and Workflow Management System.

   :homepage: https://snk.wytamma.com
   :developer docs: https://github.com/wytamma/snk
   :license: MIT
   :recipe: /`snk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snk/meta.yaml>`_

   


.. conda:package:: snk

   |downloads_snk| |docker_snk|

   :versions:
      
      

      ``0.31.1-0``,  ``0.31.0-0``,  ``0.30.1-0``

      

   
   :depends git: 
   :depends gitpython: ``>=3.1.0,<3.2.dev0``
   :depends python: ``>=3.8``
   :depends snk-cli: ``>=0.7.0``
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

      mamba install snk

   and update with::

      mamba update snk

  To create a new environment, run::

      mamba create --name myenvname snk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snk:<tag>

   (see `snk/tags`_ for valid values for ``<tag>``)


.. |downloads_snk| image:: https://img.shields.io/conda/dn/bioconda/snk.svg?style=flat
   :target: https://anaconda.org/bioconda/snk
   :alt:   (downloads)
.. |docker_snk| image:: https://quay.io/repository/biocontainers/snk/status
   :target: https://quay.io/repository/biocontainers/snk
.. _`snk/tags`: https://quay.io/repository/biocontainers/snk?tab=tags


.. raw:: html

    <script>
        var package = "snk";
        var versions = ["0.31.1","0.31.0","0.30.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snk/README.html