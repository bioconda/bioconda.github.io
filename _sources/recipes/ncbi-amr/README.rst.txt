:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-amr'
.. highlight: bash

ncbi-amr
========

.. conda:recipe:: ncbi-amr
   :replaces_section_title:

   AMRFinder find acquired antimicrobial resistance genes in protein or nucleotide sequences.

   :homepage: https://github.com/ncbi/amr/wiki
   :license: Public Domain
   :recipe: /`ncbi-amr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-amr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-amr/meta.yaml>`_

   


.. conda:package:: ncbi-amr

   |downloads_ncbi-amr| |docker_ncbi-amr|

   :versions: 1.04-0
   
   :depends blast: 
   :depends hmmer: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncbi-amr

   and update with::

      conda update ncbi-amr

   or use the docker container::

      docker pull quay.io/biocontainers/ncbi-amr:<tag>

   (see `ncbi-amr/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-amr| image:: https://img.shields.io/conda/dn/bioconda/ncbi-amr.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-amr
   :alt:   (downloads)
.. |docker_ncbi-amr| image:: https://quay.io/repository/biocontainers/ncbi-amr/status
   :target: https://quay.io/repository/biocontainers/ncbi-amr
.. _`ncbi-amr/tags`: https://quay.io/repository/biocontainers/ncbi-amr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-amr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-amr/README.html