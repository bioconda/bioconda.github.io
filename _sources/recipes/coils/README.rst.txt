:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coils'
.. highlight: bash

coils
=====

.. conda:recipe:: coils
   :replaces_section_title:

   A generalized profile syntax for biomolecular sequence motifs and its function in automatic sequence interpretation.

   :homepage: https://rostlab.org/owiki/index.php/Packages#Package_overview
   :license: GPL
   :recipe: /`coils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coils/meta.yaml>`_

   


.. conda:package:: coils

   |downloads_coils| |docker_coils|

   :versions: 2.2.1-0
   
   :depends libgcc-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install coils

   and update with::

      conda update coils

   or use the docker container::

      docker pull quay.io/biocontainers/coils:<tag>

   (see `coils/tags`_ for valid values for ``<tag>``)


.. |downloads_coils| image:: https://img.shields.io/conda/dn/bioconda/coils.svg?style=flat
   :target: https://anaconda.org/bioconda/coils
   :alt:   (downloads)
.. |docker_coils| image:: https://quay.io/repository/biocontainers/coils/status
   :target: https://quay.io/repository/biocontainers/coils
.. _`coils/tags`: https://quay.io/repository/biocontainers/coils?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coils/README.html