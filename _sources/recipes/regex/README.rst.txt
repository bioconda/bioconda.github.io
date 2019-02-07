.. title:: Package Recipe 'regex'
.. highlight: bash


regex
=====

.. conda:recipe:: regex
   :replaces_section_title:

   Alternative regular expression module\, to replace re.

   :homepage: https://bitbucket.org/mrabarnett/mrab-regex
   :license: Python software foundation license
   :recipe: /`regex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regex/meta.yaml>`_

   


.. conda:package:: regex

   |downloads_regex| |docker_regex|

   :versions: 2016.06.24

   :depends: :conda:package:`python` 2.7* 

   :required~by: |required_by_regex|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install regex

   and update with::

      conda update regex

   or use the docker container::

      docker pull quay.io/repository/biocontainers/regex


.. |required_by_regex| conda:required_by:: regex
.. |downloads_regex| image:: https://img.shields.io/conda/dn/bioconda/regex.svg?style=flat
   :alt:   (downloads)
.. |docker_regex| image:: https://quay.io/repository/biocontainers/regex/status
   :target: https://quay.io/repository/biocontainers/regex







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/regex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/regex/README.html

