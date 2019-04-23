:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igblast'
.. highlight: bash

igblast
=======

.. conda:recipe:: igblast
   :replaces_section_title:

   A tool for analyzing immunoglobulin \(IG\) and T cell receptor \(TR\) sequences.

   :homepage: http://www.ncbi.nlm.nih.gov/projects/igblast/
   :license: Public Domain
   :recipe: /`igblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igblast/meta.yaml>`_
   :links: biotools: :biotools:`igblast`

   


.. conda:package:: igblast

   |downloads_igblast| |docker_igblast|

   :versions: 1.10.0-1, 1.10.0-0, 1.9.0-0, 1.7.0-1, 1.7.0-0, 1.5.0-2, 1.5.0-1, 1.4.0-6, 1.4.0-5, 1.4.0-4, 1.4.0-2, 1.4.0-1, 1.4.0-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   :depends gnutls: 
   :depends libidn11: 
   :depends libxml2: >=2.9.8,<2.10.0a0
   :depends perl: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install igblast

   and update with::

      conda update igblast

   or use the docker container::

      docker pull quay.io/biocontainers/igblast:<tag>

   (see `igblast/tags`_ for valid values for ``<tag>``)


.. |downloads_igblast| image:: https://img.shields.io/conda/dn/bioconda/igblast.svg?style=flat
   :alt:   (downloads)
.. |docker_igblast| image:: https://quay.io/repository/biocontainers/igblast/status
   :target: https://quay.io/repository/biocontainers/igblast
.. _`igblast/tags`: https://quay.io/repository/biocontainers/igblast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igblast/README.html