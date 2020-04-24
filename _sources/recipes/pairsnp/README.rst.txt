:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pairsnp'
.. highlight: bash

pairsnp
=======

.. conda:recipe:: pairsnp
   :replaces_section_title:

   pairsnp calculates pairwise SNP distance matrices from multiple sequence alignment fasta files.

   :homepage: https://github.com/gtonkinhill/pairsnp
   :license: MIT
   :recipe: /`pairsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pairsnp/meta.yaml>`_

   


.. conda:package:: pairsnp

   |downloads_pairsnp| |docker_pairsnp|

   :versions: 0.2.0-0, 0.1.0-0
   
   :depends armadillo: >=9.200,<10.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends openblas: >=0.3.6,<0.3.7.0a0
   :depends openmp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pairsnp

   and update with::

      conda update pairsnp

   or use the docker container::

      docker pull quay.io/biocontainers/pairsnp:<tag>

   (see `pairsnp/tags`_ for valid values for ``<tag>``)


.. |downloads_pairsnp| image:: https://img.shields.io/conda/dn/bioconda/pairsnp.svg?style=flat
   :target: https://anaconda.org/bioconda/pairsnp
   :alt:   (downloads)
.. |docker_pairsnp| image:: https://quay.io/repository/biocontainers/pairsnp/status
   :target: https://quay.io/repository/biocontainers/pairsnp
.. _`pairsnp/tags`: https://quay.io/repository/biocontainers/pairsnp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pairsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pairsnp/README.html