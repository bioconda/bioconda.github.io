:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rblast'
.. highlight: bash

r-rblast
========

.. conda:recipe:: r-rBLAST
   :replaces_section_title:
   :noindex:

   Seamlessly interfaces the Basic Local Alignment Search Tool \(BLAST\) to search genetic sequence data bases. This work was partially supported by grant no. R21HG005912 from the National Human Genome Research Institute.

   :homepage: https://github.com/mhahsler/rBLAST
   :license: GPL3
   :recipe: /`r-rBLAST <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rBLAST>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rBLAST/meta.yaml>`_

   


.. conda:package:: r-rblast

   |downloads_r-rblast| |docker_r-rblast|

   :versions:
      
      

      ``0.99.1-5``,  ``0.99.1-4``,  ``0.99.1-3``,  ``0.99.1-0``

      

   
   :depends bioconductor-biostrings: 
   :depends blast: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rblast

   and update with::

      conda update r-rblast

   or use the docker container::

      docker pull quay.io/biocontainers/r-rblast:<tag>

   (see `r-rblast/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rblast| image:: https://img.shields.io/conda/dn/bioconda/r-rblast.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rblast
   :alt:   (downloads)
.. |docker_r-rblast| image:: https://quay.io/repository/biocontainers/r-rblast/status
   :target: https://quay.io/repository/biocontainers/r-rblast
.. _`r-rblast/tags`: https://quay.io/repository/biocontainers/r-rblast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rblast/README.html