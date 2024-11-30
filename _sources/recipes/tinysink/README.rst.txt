:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tinysink'
.. highlight: bash

tinysink
========

.. conda:recipe:: tinysink
   :replaces_section_title:
   :noindex:

   Synchronise Nanopore reads with a server.

   :homepage: https://github.com/mbhall88/tinysink
   :license: MIT
   :recipe: /`tinysink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinysink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tinysink/meta.yaml>`_

   


.. conda:package:: tinysink

   |downloads_tinysink| |docker_tinysink|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends rsync: 
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

      mamba install tinysink

   and update with::

      mamba update tinysink

  To create a new environment, run::

      mamba create --name myenvname tinysink

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tinysink:<tag>

   (see `tinysink/tags`_ for valid values for ``<tag>``)


.. |downloads_tinysink| image:: https://img.shields.io/conda/dn/bioconda/tinysink.svg?style=flat
   :target: https://anaconda.org/bioconda/tinysink
   :alt:   (downloads)
.. |docker_tinysink| image:: https://quay.io/repository/biocontainers/tinysink/status
   :target: https://quay.io/repository/biocontainers/tinysink
.. _`tinysink/tags`: https://quay.io/repository/biocontainers/tinysink?tab=tags


.. raw:: html

    <script>
        var package = "tinysink";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tinysink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tinysink/README.html