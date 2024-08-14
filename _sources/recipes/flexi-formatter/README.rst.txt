:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexi-formatter'
.. highlight: bash

flexi-formatter
===============

.. conda:recipe:: flexi-formatter
   :replaces_section_title:
   :noindex:

   Moving flexiplex barcode and UMI to bam tags

   :homepage: https://github.com/VIB-CCB-BioIT/flexiplex_tag_formatter
   :license: MIT
   :recipe: /`flexi-formatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexi-formatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexi-formatter/meta.yaml>`_

   


.. conda:package:: flexi-formatter

   |downloads_flexi-formatter| |docker_flexi-formatter|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends python: ``>=3``
   :depends samtools: 
   :depends simplesam: 
   :depends typer: 
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

      mamba install flexi-formatter

   and update with::

      mamba update flexi-formatter

  To create a new environment, run::

      mamba create --name myenvname flexi-formatter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/flexi-formatter:<tag>

   (see `flexi-formatter/tags`_ for valid values for ``<tag>``)


.. |downloads_flexi-formatter| image:: https://img.shields.io/conda/dn/bioconda/flexi-formatter.svg?style=flat
   :target: https://anaconda.org/bioconda/flexi-formatter
   :alt:   (downloads)
.. |docker_flexi-formatter| image:: https://quay.io/repository/biocontainers/flexi-formatter/status
   :target: https://quay.io/repository/biocontainers/flexi-formatter
.. _`flexi-formatter/tags`: https://quay.io/repository/biocontainers/flexi-formatter?tab=tags


.. raw:: html

    <script>
        var package = "flexi-formatter";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexi-formatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexi-formatter/README.html