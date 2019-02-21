:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybamparser'
.. highlight: bash

pybamparser
===========

.. conda:recipe:: pybamparser
   :replaces_section_title:

   Tools for parsing BAM data

   :homepage: https://github.com/blankenberg/pyBamParser
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`pybamparser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybamparser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybamparser/meta.yaml>`_

   


.. conda:package:: pybamparser

   |downloads_pybamparser| |docker_pybamparser|

   :versions: 0.0.3-1, 0.0.3-0
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pybamparser

   and update with::

      conda update pybamparser

   or use the docker container::

      docker pull quay.io/biocontainers/pybamparser:<tag>

   (see `pybamparser/tags`_ for valid values for ``<tag>``)


.. |downloads_pybamparser| image:: https://img.shields.io/conda/dn/bioconda/pybamparser.svg?style=flat
   :alt:   (downloads)
.. |docker_pybamparser| image:: https://quay.io/repository/biocontainers/pybamparser/status
   :target: https://quay.io/repository/biocontainers/pybamparser
.. _`pybamparser/tags`: https://quay.io/repository/biocontainers/pybamparser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybamparser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybamparser/README.html