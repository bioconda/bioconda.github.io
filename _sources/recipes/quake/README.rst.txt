:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quake'
.. highlight: bash

quake
=====

.. conda:recipe:: quake
   :replaces_section_title:

   Quake is a package to correct substitution sequencing errors in experiments with deep coverage \(e.g. \>15X\)\, specifically intended for Illumina sequencing reads

   :homepage: http://www.cbcb.umd.edu/software/quake/
   :license: Artistic License 2.0
   :recipe: /`quake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quake/meta.yaml>`_
   :links: biotools: :biotools:`quake`

   


.. conda:package:: quake

   |downloads_quake| |docker_quake|

   :versions: 0.3.5-0
   
   :depends boost: 1.60*
   :depends jellyfish: 
   :depends libgcc: 
   :depends python: 2.7*
   :depends r: 3.3.1*
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quake

   and update with::

      conda update quake

   or use the docker container::

      docker pull quay.io/biocontainers/quake:<tag>

   (see `quake/tags`_ for valid values for ``<tag>``)


.. |downloads_quake| image:: https://img.shields.io/conda/dn/bioconda/quake.svg?style=flat
   :target: https://anaconda.org/bioconda/quake
   :alt:   (downloads)
.. |docker_quake| image:: https://quay.io/repository/biocontainers/quake/status
   :target: https://quay.io/repository/biocontainers/quake
.. _`quake/tags`: https://quay.io/repository/biocontainers/quake?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quake/README.html