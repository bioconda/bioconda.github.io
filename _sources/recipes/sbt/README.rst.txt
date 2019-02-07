.. title:: Package Recipe 'sbt'
.. highlight: bash


sbt
===

.. conda:recipe:: sbt
   :replaces_section_title:

   

   :homepage: http://www.scala-sbt.org/
   :license: BSD
   :recipe: /`sbt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sbt/meta.yaml>`_

   


.. conda:package:: sbt

   |downloads_sbt| |docker_sbt|

   :versions: 0.13.12

   :depends: :conda:package:`java-jdk` >=6 

   :required~by: |required_by_sbt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sbt

   and update with::

      conda update sbt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sbt


.. |required_by_sbt| conda:required_by:: sbt
.. |downloads_sbt| image:: https://img.shields.io/conda/dn/bioconda/sbt.svg?style=flat
   :alt:   (downloads)
.. |docker_sbt| image:: https://quay.io/repository/biocontainers/sbt/status
   :target: https://quay.io/repository/biocontainers/sbt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sbt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sbt/README.html

