:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scala'
.. highlight: bash

scala
=====

.. conda:recipe:: scala
   :replaces_section_title:

   Scala combines object\-oriented and functional programming in one concise\, high\-level language. Scala\'s static types help avoid bugs in complex applications\, and its JVM and JavaScript runtimes let you build high\-performance systems with easy access to huge ecosystems of libraries.

   :homepage: http://www.scala-lang.org/
   :license: BSD
   :recipe: /`scala <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scala>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scala/meta.yaml>`_

   


.. conda:package:: scala

   |downloads_scala| |docker_scala|

   :versions: 2.11.8-1, 2.11.8-0
   
   :depends openjdk: >=8
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scala

   and update with::

      conda update scala

   or use the docker container::

      docker pull quay.io/repository/biocontainers/scala:<tag>

   (see `scala/tags`_ for valid values for ``<tag>``)


.. |downloads_scala| image:: https://img.shields.io/conda/dn/bioconda/scala.svg?style=flat
   :alt:   (downloads)
.. |docker_scala| image:: https://quay.io/repository/biocontainers/scala/status
   :target: https://quay.io/repository/biocontainers/scala
.. _`scala/tags`: https://quay.io/repository/biocontainers/scala?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scala/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scala/README.html