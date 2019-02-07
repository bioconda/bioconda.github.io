.. title:: Package Recipe 't_coffee'
.. highlight: bash


t_coffee
========

.. conda:recipe:: t_coffee
   :replaces_section_title:

   A collection of tools for Computing\, Evaluating and Manipulating Multiple Alignments of DNA\, RNA\, Protein Sequences and Structures.

   :homepage: http://www.tcoffee.org/Projects/tcoffee/
   :license: GNU
   :recipe: /`t_coffee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t_coffee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t_coffee/meta.yaml>`_

   


.. conda:package:: t_coffee

   |downloads_t_coffee| |docker_t_coffee|

   :versions: 11.0.8

   :depends: :conda:package:`curl`  :conda:package:`openssl`  :conda:package:`python` 2.7* :conda:package:`zlib`  

   :required~by: |required_by_t_coffee|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install t_coffee

   and update with::

      conda update t_coffee

   or use the docker container::

      docker pull quay.io/repository/biocontainers/t_coffee


.. |required_by_t_coffee| conda:required_by:: t_coffee
.. |downloads_t_coffee| image:: https://img.shields.io/conda/dn/bioconda/t_coffee.svg?style=flat
   :alt:   (downloads)
.. |docker_t_coffee| image:: https://quay.io/repository/biocontainers/t_coffee/status
   :target: https://quay.io/repository/biocontainers/t_coffee







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/t_coffee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/t_coffee/README.html

