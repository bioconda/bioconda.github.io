:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yaggo'
.. highlight: bash

yaggo
=====

.. conda:recipe:: yaggo
   :replaces_section_title:

   Yaggo is a tool to generate command line parsers for C\+\+. Yaggo stands for \"Yet Another GenGetOpt\" and is inspired by GNU Gengetopt.

   :homepage: https://github.com/gmarcais/yaggo
   :license: GPL / GPL-3.0
   :recipe: /`yaggo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yaggo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yaggo/meta.yaml>`_

   


.. conda:package:: yaggo

   |downloads_yaggo| |docker_yaggo|

   :versions: 1.5.10-0, 1.5.9-1, 1.5.9-0, 1.5.8-0
   
   :depends ruby: >2.2.3
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install yaggo

   and update with::

      conda update yaggo

   or use the docker container::

      docker pull quay.io/repository/biocontainers/yaggo:<tag>

   (see `yaggo/tags`_ for valid values for ``<tag>``)


.. |downloads_yaggo| image:: https://img.shields.io/conda/dn/bioconda/yaggo.svg?style=flat
   :alt:   (downloads)
.. |docker_yaggo| image:: https://quay.io/repository/biocontainers/yaggo/status
   :target: https://quay.io/repository/biocontainers/yaggo
.. _`yaggo/tags`: https://quay.io/repository/biocontainers/yaggo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yaggo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yaggo/README.html