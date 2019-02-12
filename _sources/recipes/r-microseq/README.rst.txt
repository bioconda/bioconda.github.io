:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-microseq'
.. highlight: bash

r-microseq
==========

.. conda:recipe:: r-microseq
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-microseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-microseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-microseq/meta.yaml>`_

   


.. conda:package:: r-microseq

   |downloads_r-microseq| |docker_r-microseq|

   :versions: 1.2-0
   
   :depends libgcc: 
   
   :depends r-base: 3.3.2*
   
   :depends r-rcpp: >=0.11.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-microseq

   and update with::

      conda update r-microseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-microseq:<tag>

   (see `r-microseq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-microseq| image:: https://img.shields.io/conda/dn/bioconda/r-microseq.svg?style=flat
   :alt:   (downloads)
.. |docker_r-microseq| image:: https://quay.io/repository/biocontainers/r-microseq/status
   :target: https://quay.io/repository/biocontainers/r-microseq
.. _`r-microseq/tags`: https://quay.io/repository/biocontainers/r-microseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-microseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-microseq/README.html