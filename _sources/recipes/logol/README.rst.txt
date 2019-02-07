.. title:: Package Recipe 'logol'
.. highlight: bash


logol
=====

.. conda:recipe:: logol
   :replaces_section_title:

   Logol is a pattern matching grammar language and a set of tools to search a pattern in a sequence \(nucleic or proteic\)

   :homepage: https://github.com/genouest/logol
   :license: Affero GPL 3.0
   :recipe: /`logol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/logol>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/logol/meta.yaml>`_

   


.. conda:package:: logol

   |downloads_logol| |docker_logol|

   :versions: 1.7.8

   :depends: :conda:package:`cassiopee`  :conda:package:`openjdk`  :conda:package:`ruby` >=2.4 :conda:package:`swi-prolog`  

   :required~by: |required_by_logol|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install logol

   and update with::

      conda update logol

   or use the docker container::

      docker pull quay.io/repository/biocontainers/logol


.. |required_by_logol| conda:required_by:: logol
.. |downloads_logol| image:: https://img.shields.io/conda/dn/bioconda/logol.svg?style=flat
   :alt:   (downloads)
.. |docker_logol| image:: https://quay.io/repository/biocontainers/logol/status
   :target: https://quay.io/repository/biocontainers/logol







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/logol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/logol/README.html

