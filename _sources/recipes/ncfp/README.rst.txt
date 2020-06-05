:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncfp'
.. highlight: bash

ncfp
====

.. conda:recipe:: ncfp
   :replaces_section_title:
   :noindex:

   A program\/module to find nt sequences that code for aa sequences

   :homepage: http://widdowquinn.github.io/ncfp/
   :documentation: https://ncfp.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/widdowquinn/ncfp
   :license: MIT / MIT
   :recipe: /`ncfp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncfp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncfp/meta.yaml>`_

   ncfp is a script and module that facilitates recovery of nucleotide sequences from NCBI that encode a set of input protein sequences


.. conda:package:: ncfp

   |downloads_ncfp| |docker_ncfp|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends biopython: 
   :depends python: ``>=3``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncfp

   and update with::

      conda update ncfp

   or use the docker container::

      docker pull quay.io/biocontainers/ncfp:<tag>

   (see `ncfp/tags`_ for valid values for ``<tag>``)


.. |downloads_ncfp| image:: https://img.shields.io/conda/dn/bioconda/ncfp.svg?style=flat
   :target: https://anaconda.org/bioconda/ncfp
   :alt:   (downloads)
.. |docker_ncfp| image:: https://quay.io/repository/biocontainers/ncfp/status
   :target: https://quay.io/repository/biocontainers/ncfp
.. _`ncfp/tags`: https://quay.io/repository/biocontainers/ncfp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncfp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncfp/README.html