:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakesee'
.. highlight: bash

snakesee
========

.. conda:recipe:: snakesee
   :replaces_section_title:
   :noindex:

   A terminal UI for monitoring Snakemake workflows

   :homepage: https://github.com/nh13/snakesee
   :documentation: https://snakesee.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`snakesee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakesee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakesee/meta.yaml>`_

   


.. conda:package:: snakesee

   |downloads_snakesee| |docker_snakesee|

   :versions:
      
      

      ``0.6.1-0``,  ``0.4.1-0``,  ``0.2.1-0``,  ``0.1.0-0``

      

   
   :depends defopt: ``>=6.4.0``
   :depends orjson: ``>=3.9.0``
   :depends python: ``>=3.11``
   :depends rich: ``>=13.0.0``
   :depends snakemake: ``>=8.0.0``
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

      mamba install snakesee

   and update with::

      mamba update snakesee

  To create a new environment, run::

      mamba create --name myenvname snakesee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakesee:<tag>

   (see `snakesee/tags`_ for valid values for ``<tag>``)


.. |downloads_snakesee| image:: https://img.shields.io/conda/dn/bioconda/snakesee.svg?style=flat
   :target: https://anaconda.org/bioconda/snakesee
   :alt:   (downloads)
.. |docker_snakesee| image:: https://quay.io/repository/biocontainers/snakesee/status
   :target: https://quay.io/repository/biocontainers/snakesee
.. _`snakesee/tags`: https://quay.io/repository/biocontainers/snakesee?tab=tags


.. raw:: html

    <script>
        var package = "snakesee";
        var versions = ["0.6.1","0.4.1","0.2.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakesee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakesee/README.html