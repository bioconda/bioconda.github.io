:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ficus'
.. highlight: bash

ficus
=====

.. conda:recipe:: ficus
   :replaces_section_title:
   :noindex:

   provides a context manager for matplotlib figures.

   :homepage: https://github.com/camillescott/ficus
   :license: BSD-3-Clause
   :recipe: /`ficus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ficus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ficus/meta.yaml>`_

   


.. conda:package:: ficus

   |downloads_ficus| |docker_ficus|

   :versions:
      
      

      ``0.5-4``,  ``0.5-3``,  ``0.5-2``,  ``0.5-1``,  ``0.5-0``,  ``0.3-0``

      

   
   :depends matplotlib: ``>=1.4``
   :depends python: 
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

      mamba install ficus

   and update with::

      mamba update ficus

  To create a new environment, run::

      mamba create --name myenvname ficus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ficus:<tag>

   (see `ficus/tags`_ for valid values for ``<tag>``)


.. |downloads_ficus| image:: https://img.shields.io/conda/dn/bioconda/ficus.svg?style=flat
   :target: https://anaconda.org/bioconda/ficus
   :alt:   (downloads)
.. |docker_ficus| image:: https://quay.io/repository/biocontainers/ficus/status
   :target: https://quay.io/repository/biocontainers/ficus
.. _`ficus/tags`: https://quay.io/repository/biocontainers/ficus?tab=tags


.. raw:: html

    <script>
        var package = "ficus";
        var versions = ["0.5","0.5","0.5","0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ficus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ficus/README.html