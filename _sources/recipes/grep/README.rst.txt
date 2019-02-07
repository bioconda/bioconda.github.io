.. title:: Package Recipe 'grep'
.. highlight: bash


grep
====

.. conda:recipe:: grep
   :replaces_section_title:

   Grep searches one or more input files for lines containing a match to a specified pattern

   :homepage: https://www.gnu.org/software/grep/
   :license: GPL
   :recipe: /`grep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grep/meta.yaml>`_

   


.. conda:package:: grep

   |downloads_grep| |docker_grep|

   :versions: 2.14

   :depends: 

   :required~by: |required_by_grep|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install grep

   and update with::

      conda update grep

   or use the docker container::

      docker pull quay.io/repository/biocontainers/grep


.. |required_by_grep| conda:required_by:: grep
.. |downloads_grep| image:: https://img.shields.io/conda/dn/bioconda/grep.svg?style=flat
   :alt:   (downloads)
.. |docker_grep| image:: https://quay.io/repository/biocontainers/grep/status
   :target: https://quay.io/repository/biocontainers/grep







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grep/README.html

