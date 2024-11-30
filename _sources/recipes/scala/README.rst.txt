:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scala'
.. highlight: bash

scala
=====

.. conda:recipe:: scala
   :replaces_section_title:
   :noindex:

   Scala combines object\-oriented and functional programming in one concise\, high\-level language. Scala\'s static types help avoid bugs in complex applications\, and its JVM and JavaScript runtimes let you build high\-performance systems with easy access to huge ecosystems of libraries.

   :homepage: http://www.scala-lang.org/
   :license: BSD
   :recipe: /`scala <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scala>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scala/meta.yaml>`_

   


.. conda:package:: scala

   |downloads_scala| |docker_scala|

   :versions:
      
      

      ``2.11.8-1``,  ``2.11.8-0``

      

   
   :depends openjdk: ``>=8``
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

      mamba install scala

   and update with::

      mamba update scala

  To create a new environment, run::

      mamba create --name myenvname scala

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scala:<tag>

   (see `scala/tags`_ for valid values for ``<tag>``)


.. |downloads_scala| image:: https://img.shields.io/conda/dn/bioconda/scala.svg?style=flat
   :target: https://anaconda.org/bioconda/scala
   :alt:   (downloads)
.. |docker_scala| image:: https://quay.io/repository/biocontainers/scala/status
   :target: https://quay.io/repository/biocontainers/scala
.. _`scala/tags`: https://quay.io/repository/biocontainers/scala?tab=tags


.. raw:: html

    <script>
        var package = "scala";
        var versions = ["2.11.8","2.11.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scala/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scala/README.html