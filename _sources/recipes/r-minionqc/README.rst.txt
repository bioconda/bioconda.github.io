:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-minionqc'
.. highlight: bash

r-minionqc
==========

.. conda:recipe:: r-minionqc
   :replaces_section_title:
   :noindex:

   Quality control for MinION sequencing data

   :homepage: https://github.com/roblanf/minion_qc/blob/master/MinIONQC.R
   :license: MIT
   :recipe: /`r-minionqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-minionqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-minionqc/meta.yaml>`_

   


.. conda:package:: r-minionqc

   |downloads_r-minionqc| |docker_r-minionqc|

   :versions:
      
      

      ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-data.table: 
   :depends r-futile.logger: 
   :depends r-ggplot2: 
   :depends r-optparse: 
   :depends r-plyr: 
   :depends r-readr: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-viridis: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-minionqc

   and update with::

      conda update r-minionqc

   or use the docker container::

      docker pull quay.io/biocontainers/r-minionqc:<tag>

   (see `r-minionqc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-minionqc| image:: https://img.shields.io/conda/dn/bioconda/r-minionqc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-minionqc
   :alt:   (downloads)
.. |docker_r-minionqc| image:: https://quay.io/repository/biocontainers/r-minionqc/status
   :target: https://quay.io/repository/biocontainers/r-minionqc
.. _`r-minionqc/tags`: https://quay.io/repository/biocontainers/r-minionqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-minionqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-minionqc/README.html