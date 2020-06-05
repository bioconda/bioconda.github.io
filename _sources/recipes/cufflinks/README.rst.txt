:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cufflinks'
.. highlight: bash

cufflinks
=========

.. conda:recipe:: cufflinks
   :replaces_section_title:
   :noindex:

   Transcriptome assembly and differential expression analysis for RNA\-Seq.

   :homepage: http://cole-trapnell-lab.github.io/cufflinks/
   :license: Boost Software License
   :recipe: /`cufflinks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cufflinks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cufflinks/meta.yaml>`_
   :links: biotools: :biotools:`cufflinks`

   


.. conda:package:: cufflinks

   |downloads_cufflinks| |docker_cufflinks|

   :versions:
      
      

      ``2.2.1-2``,  ``2.2.1-1``,  ``2.2.1-0``

      

   
   :depends python: ``>=2.7,<2.8.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cufflinks

   and update with::

      conda update cufflinks

   or use the docker container::

      docker pull quay.io/biocontainers/cufflinks:<tag>

   (see `cufflinks/tags`_ for valid values for ``<tag>``)


.. |downloads_cufflinks| image:: https://img.shields.io/conda/dn/bioconda/cufflinks.svg?style=flat
   :target: https://anaconda.org/bioconda/cufflinks
   :alt:   (downloads)
.. |docker_cufflinks| image:: https://quay.io/repository/biocontainers/cufflinks/status
   :target: https://quay.io/repository/biocontainers/cufflinks
.. _`cufflinks/tags`: https://quay.io/repository/biocontainers/cufflinks?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cufflinks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cufflinks/README.html