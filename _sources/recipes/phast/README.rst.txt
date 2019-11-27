:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phast'
.. highlight: bash

phast
=====

.. conda:recipe:: phast
   :replaces_section_title:

   PHAST is a freely available software package for comparative and evolutionary genomics.

   :homepage: http://compgen.cshl.edu/phast/
   :license: BSD
   :recipe: /`phast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phast/meta.yaml>`_

   


.. conda:package:: phast

   |downloads_phast| |docker_phast|

   :versions: 1.5-2, 1.5-1, 1.5-0
   
   :depends libgcc-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phast

   and update with::

      conda update phast

   or use the docker container::

      docker pull quay.io/biocontainers/phast:<tag>

   (see `phast/tags`_ for valid values for ``<tag>``)


.. |downloads_phast| image:: https://img.shields.io/conda/dn/bioconda/phast.svg?style=flat
   :target: https://anaconda.org/bioconda/phast
   :alt:   (downloads)
.. |docker_phast| image:: https://quay.io/repository/biocontainers/phast/status
   :target: https://quay.io/repository/biocontainers/phast
.. _`phast/tags`: https://quay.io/repository/biocontainers/phast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phast/README.html