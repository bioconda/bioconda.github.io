:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-popgenome'
.. highlight: bash

r-popgenome
===========

.. conda:recipe:: r-popgenome
   :replaces_section_title:

   Provides efficient tools for population genomics data analysis\, able to process individual loci\, large sets of loci\, or whole genomes. PopGenome \<DOI\:10.1093\/molbev\/msu136\> not only  implements a wide range of population genetics statistics\, but also facilitates the easy  implementation of new algorithms by other researchers. PopGenome is optimized for speed via  the seamless integration of C code.

   :homepage: http://popgenome.weebly.com
   :license: GPL3 / GPL-3
   :recipe: /`r-popgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-popgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-popgenome/meta.yaml>`_
   :links: doi: :doi:`10.1093/molbev/msu136`

   


.. conda:package:: r-popgenome

   |downloads_r-popgenome| |docker_r-popgenome|

   :versions: 2.6.1-2, 2.6.1-1, 2.6.1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-ff: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-popgenome

   and update with::

      conda update r-popgenome

   or use the docker container::

      docker pull quay.io/biocontainers/r-popgenome:<tag>

   (see `r-popgenome/tags`_ for valid values for ``<tag>``)


.. |downloads_r-popgenome| image:: https://img.shields.io/conda/dn/bioconda/r-popgenome.svg?style=flat
   :target: https://anaconda.org/bioconda/r-popgenome
   :alt:   (downloads)
.. |docker_r-popgenome| image:: https://quay.io/repository/biocontainers/r-popgenome/status
   :target: https://quay.io/repository/biocontainers/r-popgenome
.. _`r-popgenome/tags`: https://quay.io/repository/biocontainers/r-popgenome?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-popgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-popgenome/README.html