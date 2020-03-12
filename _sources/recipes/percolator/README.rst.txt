:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'percolator'
.. highlight: bash

percolator
==========

.. conda:recipe:: percolator
   :replaces_section_title:

   Semi\-supervised learning for peptide identification from shotgun proteomics datasets

   :homepage: https://github.com/percolator/percolator
   :license: Apache 2.0
   :recipe: /`percolator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/percolator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/percolator/meta.yaml>`_
   :links: biotools: :biotools:`Percolator`, doi: :doi:`10.1007/s13361-016-1460-7`

   


.. conda:package:: percolator

   |downloads_percolator| |docker_percolator|

   :versions: 3.4-1, 3.4-0, 3.1-4, 3.1-3, 3.1-2, 3.0-1, 3.0-0
   
   :depends bzip2: >=1.0.8,<2.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends sqlite: >=3.30.1,<4.0a0
   :depends xerces-c: >=3.2.2,<3.2.3.0a0
   :depends xsd: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install percolator

   and update with::

      conda update percolator

   or use the docker container::

      docker pull quay.io/biocontainers/percolator:<tag>

   (see `percolator/tags`_ for valid values for ``<tag>``)


.. |downloads_percolator| image:: https://img.shields.io/conda/dn/bioconda/percolator.svg?style=flat
   :target: https://anaconda.org/bioconda/percolator
   :alt:   (downloads)
.. |docker_percolator| image:: https://quay.io/repository/biocontainers/percolator/status
   :target: https://quay.io/repository/biocontainers/percolator
.. _`percolator/tags`: https://quay.io/repository/biocontainers/percolator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/percolator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/percolator/README.html