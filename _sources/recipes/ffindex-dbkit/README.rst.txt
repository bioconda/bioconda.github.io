:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ffindex-dbkit'
.. highlight: bash

ffindex-dbkit
=============

.. conda:recipe:: ffindex-dbkit
   :replaces_section_title:
   :noindex:

   Tools to create ffindex files

   :homepage: https://github.com/guerler/spring
   :license: GPL / GPL-2.0-only
   :recipe: /`ffindex-dbkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffindex-dbkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ffindex-dbkit/meta.yaml>`_

   


.. conda:package:: ffindex-dbkit

   |downloads_ffindex-dbkit| |docker_ffindex-dbkit|

   :versions:
      
      

      ``0.2-2``,  ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends python: 
   :depends python-wget: 
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

      mamba install ffindex-dbkit

   and update with::

      mamba update ffindex-dbkit

  To create a new environment, run::

      mamba create --name myenvname ffindex-dbkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ffindex-dbkit:<tag>

   (see `ffindex-dbkit/tags`_ for valid values for ``<tag>``)


.. |downloads_ffindex-dbkit| image:: https://img.shields.io/conda/dn/bioconda/ffindex-dbkit.svg?style=flat
   :target: https://anaconda.org/bioconda/ffindex-dbkit
   :alt:   (downloads)
.. |docker_ffindex-dbkit| image:: https://quay.io/repository/biocontainers/ffindex-dbkit/status
   :target: https://quay.io/repository/biocontainers/ffindex-dbkit
.. _`ffindex-dbkit/tags`: https://quay.io/repository/biocontainers/ffindex-dbkit?tab=tags


.. raw:: html

    <script>
        var package = "ffindex-dbkit";
        var versions = ["0.2","0.2","0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ffindex-dbkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ffindex-dbkit/README.html