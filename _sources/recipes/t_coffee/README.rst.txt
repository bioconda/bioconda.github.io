:orphan:  .. only available via index, not via toctree

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

   :versions: 11.0.8-7, 11.0.8-5, 11.0.8-4, 11.0.8-3, 11.0.8-2, 11.0.8-1
   
   :depends curl: >=7.59.0,<8.0a0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends openssl: >=1.0.2o,<1.0.3a
   
   :depends perl: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install t_coffee

   and update with::

      conda update t_coffee

   or use the docker container::

      docker pull quay.io/repository/biocontainers/t_coffee:<tag>

   (see `t_coffee/tags`_ for valid values for ``<tag>``)


.. |downloads_t_coffee| image:: https://img.shields.io/conda/dn/bioconda/t_coffee.svg?style=flat
   :alt:   (downloads)
.. |docker_t_coffee| image:: https://quay.io/repository/biocontainers/t_coffee/status
   :target: https://quay.io/repository/biocontainers/t_coffee
.. _`t_coffee/tags`: https://quay.io/repository/biocontainers/t_coffee?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/t_coffee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/t_coffee/README.html