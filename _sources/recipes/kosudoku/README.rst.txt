:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kosudoku'
.. highlight: bash

kosudoku
========

.. conda:recipe:: kosudoku
   :replaces_section_title:
   :noindex:

   kosudoku\: a suite to rapidly create whole genome knockout collections for microorganisms

   :homepage: https://github.com/tuncK/kosudoku
   :license: Princeton University Copyright Notice and Limited License
   :recipe: /`kosudoku <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kosudoku>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kosudoku/meta.yaml>`_

   


.. conda:package:: kosudoku

   |downloads_kosudoku| |docker_kosudoku|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends biopython: 
   :depends bowtie2: 
   :depends matplotlib-base: 
   :depends numpy: ``<1.24``
   :depends python: ``>=3.5``
   :depends scipy: 
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

      mamba install kosudoku

   and update with::

      mamba update kosudoku

  To create a new environment, run::

      mamba create --name myenvname kosudoku

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kosudoku:<tag>

   (see `kosudoku/tags`_ for valid values for ``<tag>``)


.. |downloads_kosudoku| image:: https://img.shields.io/conda/dn/bioconda/kosudoku.svg?style=flat
   :target: https://anaconda.org/bioconda/kosudoku
   :alt:   (downloads)
.. |docker_kosudoku| image:: https://quay.io/repository/biocontainers/kosudoku/status
   :target: https://quay.io/repository/biocontainers/kosudoku
.. _`kosudoku/tags`: https://quay.io/repository/biocontainers/kosudoku?tab=tags


.. raw:: html

    <script>
        var package = "kosudoku";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kosudoku/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kosudoku/README.html