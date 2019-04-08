:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe '2pg_cartesian'
.. highlight: bash

2pg_cartesian
=============

.. conda:recipe:: 2pg_cartesian
   :replaces_section_title:

   2pg cartesian is a framework of optimization algorithms for protein structure prediction.

   :homepage: https://github.com/rodrigofaccioli/2pg_cartesian
   :license: Apache License, Version 2.0
   :recipe: /`2pg_cartesian <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/2pg_cartesian>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/2pg_cartesian/meta.yaml>`_

   


.. conda:package:: 2pg_cartesian

   |downloads_2pg_cartesian| |docker_2pg_cartesian|

   :versions: 1.0.1-1, 1.0.1-0
   
   :depends gromacs: 
   :depends libgcc-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install 2pg_cartesian

   and update with::

      conda update 2pg_cartesian

   or use the docker container::

      docker pull quay.io/biocontainers/2pg_cartesian:<tag>

   (see `2pg_cartesian/tags`_ for valid values for ``<tag>``)


.. |downloads_2pg_cartesian| image:: https://img.shields.io/conda/dn/bioconda/2pg_cartesian.svg?style=flat
   :alt:   (downloads)
.. |docker_2pg_cartesian| image:: https://quay.io/repository/biocontainers/2pg_cartesian/status
   :target: https://quay.io/repository/biocontainers/2pg_cartesian
.. _`2pg_cartesian/tags`: https://quay.io/repository/biocontainers/2pg_cartesian?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/2pg_cartesian/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/2pg_cartesian/README.html