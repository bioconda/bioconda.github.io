:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jclusterfunk'
.. highlight: bash

jclusterfunk
============

.. conda:recipe:: jclusterfunk
   :replaces_section_title:
   :noindex:

   A command line tool with a bunch of functions for trees

   :homepage: https://github.com/snake-flu/jclusterfunk
   :license: `GPL3 / GPL-3.0-only <https://github.com/snake-flu/jclusterfunk/blob/master/LICENSE>`_
   :recipe: /`jclusterfunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jclusterfunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jclusterfunk/meta.yaml>`_

   


.. conda:package:: jclusterfunk

   |downloads_jclusterfunk| |docker_jclusterfunk|

   :versions:
      
      

      ``0.0.25-0``

      

   
   :depends openjdk: 
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

      mamba install jclusterfunk

   and update with::

      mamba update jclusterfunk

  To create a new environment, run::

      mamba create --name myenvname jclusterfunk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jclusterfunk:<tag>

   (see `jclusterfunk/tags`_ for valid values for ``<tag>``)


.. |downloads_jclusterfunk| image:: https://img.shields.io/conda/dn/bioconda/jclusterfunk.svg?style=flat
   :target: https://anaconda.org/bioconda/jclusterfunk
   :alt:   (downloads)
.. |docker_jclusterfunk| image:: https://quay.io/repository/biocontainers/jclusterfunk/status
   :target: https://quay.io/repository/biocontainers/jclusterfunk
.. _`jclusterfunk/tags`: https://quay.io/repository/biocontainers/jclusterfunk?tab=tags


.. raw:: html

    <script>
        var package = "jclusterfunk";
        var versions = ["0.0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jclusterfunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jclusterfunk/README.html