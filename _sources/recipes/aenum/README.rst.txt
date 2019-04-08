:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aenum'
.. highlight: bash

aenum
=====

.. conda:recipe:: aenum
   :replaces_section_title:

   Advanced Enumerations \(compatible with Python\'s stdlib Enum\)\, NamedTuples\, and NamedConstants

   :homepage: https://bitbucket.org/stoneleaf/aenum
   :license: BSD / BSD License
   :recipe: /`aenum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aenum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aenum/meta.yaml>`_

   


.. conda:package:: aenum

   |downloads_aenum| |docker_aenum|

   :versions: 2.0.8-0, 1.4.5-0
   
   :depends python: 2.7*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aenum

   and update with::

      conda update aenum

   or use the docker container::

      docker pull quay.io/biocontainers/aenum:<tag>

   (see `aenum/tags`_ for valid values for ``<tag>``)


.. |downloads_aenum| image:: https://img.shields.io/conda/dn/bioconda/aenum.svg?style=flat
   :alt:   (downloads)
.. |docker_aenum| image:: https://quay.io/repository/biocontainers/aenum/status
   :target: https://quay.io/repository/biocontainers/aenum
.. _`aenum/tags`: https://quay.io/repository/biocontainers/aenum?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aenum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aenum/README.html