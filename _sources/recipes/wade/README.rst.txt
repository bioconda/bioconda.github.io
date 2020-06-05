:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wade'
.. highlight: bash

wade
====

.. conda:recipe:: wade
   :replaces_section_title:
   :noindex:

   WADE provides a flexible and customizable method to extract specific genes from a large number of genomes at once.

   :homepage: https://github.com/phac-nml/wade
   :license: APACHE / Apache License, Version 2.0
   :recipe: /`wade <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wade>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wade/meta.yaml>`_

   


.. conda:package:: wade

   |downloads_wade| |docker_wade|

   :versions:
      
      

      ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``

      

   
   :depends bioconductor-biostrings: 
   :depends blast: 
   :depends r-base: ``>=3.6,<3.7.0a0``
   :depends r-biocmanager: 
   :depends r-dplyr: 
   :depends r-here: 
   :depends r-magrittr: 
   :depends r-optparse: 
   :depends r-purrr: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wade

   and update with::

      conda update wade

   or use the docker container::

      docker pull quay.io/biocontainers/wade:<tag>

   (see `wade/tags`_ for valid values for ``<tag>``)


.. |downloads_wade| image:: https://img.shields.io/conda/dn/bioconda/wade.svg?style=flat
   :target: https://anaconda.org/bioconda/wade
   :alt:   (downloads)
.. |docker_wade| image:: https://quay.io/repository/biocontainers/wade/status
   :target: https://quay.io/repository/biocontainers/wade
.. _`wade/tags`: https://quay.io/repository/biocontainers/wade?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wade/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wade/README.html