.. title:: Package Recipe 'vardict-java'
.. highlight: bash


vardict-java
============

.. conda:recipe:: vardict-java
   :replaces_section_title:

   Java port of the VarDict variant discovery program

   :homepage: https://github.com/AstraZeneca-NGS/VarDictJava
   :license: MIT
   :recipe: /`vardict-java <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardict-java>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vardict-java/meta.yaml>`_

   


.. conda:package:: vardict-java

   |downloads_vardict-java| |docker_vardict-java|

   :versions: 1.5.8, 1.5.7, 1.5.6, 1.5.5, 1.5.4, 1.5.3, 1.5.2, 1.5.1, 1.5.0, 1.4.10, 1.4.9, 1.4.8, 1.4.7, 1.4.6, 1.4.5, 1.4.3, 1.4.2

   :depends: :conda:package:`openjdk`  

   :required~by: |required_by_vardict-java|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vardict-java

   and update with::

      conda update vardict-java

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vardict-java


.. |required_by_vardict-java| conda:required_by:: vardict-java
.. |downloads_vardict-java| image:: https://img.shields.io/conda/dn/bioconda/vardict-java.svg?style=flat
   :alt:   (downloads)
.. |docker_vardict-java| image:: https://quay.io/repository/biocontainers/vardict-java/status
   :target: https://quay.io/repository/biocontainers/vardict-java







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vardict-java/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vardict-java/README.html

