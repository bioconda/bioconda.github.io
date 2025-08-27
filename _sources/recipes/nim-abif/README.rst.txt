:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nim-abif'
.. highlight: bash

nim-abif
========

.. conda:recipe:: nim-abif
   :replaces_section_title:
   :noindex:

   Parse ABIF files from the command line

   :homepage: https://github.com/quadram-institute-bioscience/nim-abif
   :documentation: https://quadram-institute-bioscience.github.io/nim-abif
   
   :license: MIT
   :recipe: /`nim-abif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nim-abif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nim-abif/meta.yaml>`_

   


.. conda:package:: nim-abif

   |downloads_nim-abif| |docker_nim-abif|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
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

      mamba install nim-abif

   and update with::

      mamba update nim-abif

  To create a new environment, run::

      mamba create --name myenvname nim-abif

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nim-abif:<tag>

   (see `nim-abif/tags`_ for valid values for ``<tag>``)


.. |downloads_nim-abif| image:: https://img.shields.io/conda/dn/bioconda/nim-abif.svg?style=flat
   :target: https://anaconda.org/bioconda/nim-abif
   :alt:   (downloads)
.. |docker_nim-abif| image:: https://quay.io/repository/biocontainers/nim-abif/status
   :target: https://quay.io/repository/biocontainers/nim-abif
.. _`nim-abif/tags`: https://quay.io/repository/biocontainers/nim-abif?tab=tags


.. raw:: html

    <script>
        var package = "nim-abif";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nim-abif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nim-abif/README.html