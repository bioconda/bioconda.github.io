:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'selenzy_wrapper'
.. highlight: bash

selenzy_wrapper
===============

.. conda:recipe:: selenzy_wrapper
   :replaces_section_title:
   :noindex:

   Python wrapper of selenzy tool

   :homepage: https://github.com/brsynth/selenzy-wrapper
   :license: MIT
   :recipe: /`selenzy_wrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selenzy_wrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selenzy_wrapper/meta.yaml>`_

   


.. conda:package:: selenzy_wrapper

   |downloads_selenzy_wrapper| |docker_selenzy_wrapper|

   :versions:
      
      

      ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``,  ``0.0.6-0``

      

   
   :depends biopython: ``>1.70,<=1.77``
   :depends brs_utils: 
   :depends emboss: 
   :depends python: ``>=3.7,<3.10``
   :depends rptools: ``>=6.2.3``
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

      mamba install selenzy_wrapper

   and update with::

      mamba update selenzy_wrapper

  To create a new environment, run::

      mamba create --name myenvname selenzy_wrapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/selenzy_wrapper:<tag>

   (see `selenzy_wrapper/tags`_ for valid values for ``<tag>``)


.. |downloads_selenzy_wrapper| image:: https://img.shields.io/conda/dn/bioconda/selenzy_wrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/selenzy_wrapper
   :alt:   (downloads)
.. |docker_selenzy_wrapper| image:: https://quay.io/repository/biocontainers/selenzy_wrapper/status
   :target: https://quay.io/repository/biocontainers/selenzy_wrapper
.. _`selenzy_wrapper/tags`: https://quay.io/repository/biocontainers/selenzy_wrapper?tab=tags


.. raw:: html

    <script>
        var package = "selenzy_wrapper";
        var versions = ["0.3.0","0.3.0","0.2.0","0.1.0","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selenzy_wrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selenzy_wrapper/README.html