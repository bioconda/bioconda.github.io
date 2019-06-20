:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prosolo'
.. highlight: bash

prosolo
=======

.. conda:recipe:: prosolo
   :replaces_section_title:

   A highly sensitive and accurate Bayesian caller for variants in single cell sequencing data.

   :homepage: https://github.com/prosolo/prosolo/tree/v0.6.1
   :license: GPLv3
   :recipe: /`prosolo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosolo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosolo/meta.yaml>`_

   


.. conda:package:: prosolo

   |downloads_prosolo| |docker_prosolo|

   :versions: 0.6.1-0, 0.6.0-0, 0.5.0-0, 0.4.0-4, 0.4.0-3, 0.4.0-2, 0.4.0-1, 0.3.1-0, 0.2.0-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   :depends clangdev: 
   :depends gsl: >=2.2.1,<2.3.0a0
   :depends openblas: >=0.2.20,<0.2.21.0a0
   :depends xz: >=5.2.4,<5.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prosolo

   and update with::

      conda update prosolo

   or use the docker container::

      docker pull quay.io/biocontainers/prosolo:<tag>

   (see `prosolo/tags`_ for valid values for ``<tag>``)


.. |downloads_prosolo| image:: https://img.shields.io/conda/dn/bioconda/prosolo.svg?style=flat
   :target: https://anaconda.org/bioconda/prosolo
   :alt:   (downloads)
.. |docker_prosolo| image:: https://quay.io/repository/biocontainers/prosolo/status
   :target: https://quay.io/repository/biocontainers/prosolo
.. _`prosolo/tags`: https://quay.io/repository/biocontainers/prosolo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prosolo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prosolo/README.html