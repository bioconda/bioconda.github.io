:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mintmap'
.. highlight: bash

mintmap
=======

.. conda:recipe:: mintmap
   :replaces_section_title:
   :noindex:

   Generate tRF profiles from short RNA\-Seq datasets

   :homepage: https://github.com/TJU-CMC-Org/MINTmap
   :license: open source GNU GPL v3.0 license
   :recipe: /`mintmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mintmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mintmap/meta.yaml>`_

   


.. conda:package:: mintmap

   |downloads_mintmap| |docker_mintmap|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends perl-base: 
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

      mamba install mintmap

   and update with::

      mamba update mintmap

  To create a new environment, run::

      mamba create --name myenvname mintmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mintmap:<tag>

   (see `mintmap/tags`_ for valid values for ``<tag>``)


.. |downloads_mintmap| image:: https://img.shields.io/conda/dn/bioconda/mintmap.svg?style=flat
   :target: https://anaconda.org/bioconda/mintmap
   :alt:   (downloads)
.. |docker_mintmap| image:: https://quay.io/repository/biocontainers/mintmap/status
   :target: https://quay.io/repository/biocontainers/mintmap
.. _`mintmap/tags`: https://quay.io/repository/biocontainers/mintmap?tab=tags


.. raw:: html

    <script>
        var package = "mintmap";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mintmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mintmap/README.html