:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'data_hacks'
.. highlight: bash

data_hacks
==========

.. conda:recipe:: data_hacks
   :replaces_section_title:
   :noindex:

   Command line utilities for data analysis.

   :homepage: https://github.com/bitly/data_hacks
   :license: Apache 2.0
   :recipe: /`data_hacks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/data_hacks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/data_hacks/meta.yaml>`_

   


.. conda:package:: data_hacks

   |downloads_data_hacks| |docker_data_hacks|

   :versions:
      
      

      ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends python: ``<3``
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

      mamba install data_hacks

   and update with::

      mamba update data_hacks

  To create a new environment, run::

      mamba create --name myenvname data_hacks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/data_hacks:<tag>

   (see `data_hacks/tags`_ for valid values for ``<tag>``)


.. |downloads_data_hacks| image:: https://img.shields.io/conda/dn/bioconda/data_hacks.svg?style=flat
   :target: https://anaconda.org/bioconda/data_hacks
   :alt:   (downloads)
.. |docker_data_hacks| image:: https://quay.io/repository/biocontainers/data_hacks/status
   :target: https://quay.io/repository/biocontainers/data_hacks
.. _`data_hacks/tags`: https://quay.io/repository/biocontainers/data_hacks?tab=tags


.. raw:: html

    <script>
        var package = "data_hacks";
        var versions = ["0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/data_hacks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/data_hacks/README.html