:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cassis'
.. highlight: bash

cassis
======

.. conda:recipe:: cassis
   :replaces_section_title:
   :noindex:

   Detection of genomic rearrangement breakpoints

   :homepage: http://pbil.univ-lyon1.fr/software/Cassis/
   :license: GPL3
   :recipe: /`cassis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cassis/meta.yaml>`_

   The package Cassis implements methods for precise detection of genomic rearrangement breakpoints\, which were described in Lemaitre et al.\, 2008.


.. conda:package:: cassis

   |downloads_cassis| |docker_cassis|

   :versions:
      
      

      ``0.0.20120106-1``,  ``0.0.20120106-0``

      

   
   :depends ghostscript: 
   :depends lastz: 
   :depends perl: 
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cassis

   and update with::

      conda update cassis

   or use the docker container::

      docker pull quay.io/biocontainers/cassis:<tag>

   (see `cassis/tags`_ for valid values for ``<tag>``)


.. |downloads_cassis| image:: https://img.shields.io/conda/dn/bioconda/cassis.svg?style=flat
   :target: https://anaconda.org/bioconda/cassis
   :alt:   (downloads)
.. |docker_cassis| image:: https://quay.io/repository/biocontainers/cassis/status
   :target: https://quay.io/repository/biocontainers/cassis
.. _`cassis/tags`: https://quay.io/repository/biocontainers/cassis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cassis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cassis/README.html