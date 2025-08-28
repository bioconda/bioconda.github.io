:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oatk'
.. highlight: bash

oatk
====

.. conda:recipe:: oatk
   :replaces_section_title:
   :noindex:

   Oatk\: an organelle genome assembly toolkit

   :homepage: https://github.com/c-zhou/oatk
   :license: MIT
   :recipe: /`oatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oatk/meta.yaml>`_

   


.. conda:package:: oatk

   |downloads_oatk| |docker_oatk|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends hmmer: ``>=3.4``
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install oatk

   and update with::

      mamba update oatk

  To create a new environment, run::

      mamba create --name myenvname oatk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/oatk:<tag>

   (see `oatk/tags`_ for valid values for ``<tag>``)


.. |downloads_oatk| image:: https://img.shields.io/conda/dn/bioconda/oatk.svg?style=flat
   :target: https://anaconda.org/bioconda/oatk
   :alt:   (downloads)
.. |docker_oatk| image:: https://quay.io/repository/biocontainers/oatk/status
   :target: https://quay.io/repository/biocontainers/oatk
.. _`oatk/tags`: https://quay.io/repository/biocontainers/oatk?tab=tags


.. raw:: html

    <script>
        var package = "oatk";
        var versions = ["1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oatk/README.html