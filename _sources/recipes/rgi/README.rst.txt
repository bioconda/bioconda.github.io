:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rgi'
.. highlight: bash

rgi
===

.. conda:recipe:: rgi
   :replaces_section_title:

   This tool provides a preliminary annotation of your DNA sequence\(s\) based upon the data available in The Comprehensive Antibiotic Resistance Database \(CARD\). Hits to genes tagged with Antibiotic Resistance ontology terms will be highlighted. As CARD expands to include more pathogens\, genomes\, plasmids\, and ontology terms this tool will grow increasingly powerful in providing first\-pass detection of antibiotic resistance associated genes. See license at CARD website

   :homepage: https://card.mcmaster.ca
   :license: https://card.mcmaster.ca/about
   :recipe: /`rgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgi/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw1004`

   


.. conda:package:: rgi

   |downloads_rgi| |docker_rgi|

   :versions: 4.2.2-1, 4.2.2-0, 4.0.3-3, 4.0.3-2, 4.0.3-1, 4.0.3-0, 3.2.1-4, 3.2.1-3, 3.2.1-2, 3.2.1-1, 3.2.0-3, 3.2.0-2, 3.2.0-1, 3.1.2-3, 3.1.2-2, 3.1.2-1, 3.1.1-2, 3.1.1-1, 3.1.0-1, 3.1.0-0
   
   :depends biopython: >=1.60
   :depends blast: 2.6.0
   :depends diamond: 0.8.36
   :depends filetype: >=1.0.0
   :depends libgcc-ng: >=4.9
   :depends matplotlib: >=2.1.2
   :depends mock: >=2.0.0
   :depends pandas: >=0.15.0
   :depends prodigal: 2.6.3
   :depends pyahocorasick: >=1.1.7
   :depends pyfaidx: >=0.5.4.1
   :depends pytest: >=3.0.0
   :depends python: >=3.5,<3.6.0a0
   :depends seaborn: >=0.8.1
   :depends six: >=1.7.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rgi

   and update with::

      conda update rgi

   or use the docker container::

      docker pull quay.io/biocontainers/rgi:<tag>

   (see `rgi/tags`_ for valid values for ``<tag>``)


.. |downloads_rgi| image:: https://img.shields.io/conda/dn/bioconda/rgi.svg?style=flat
   :target: https://anaconda.org/bioconda/rgi
   :alt:   (downloads)
.. |docker_rgi| image:: https://quay.io/repository/biocontainers/rgi/status
   :target: https://quay.io/repository/biocontainers/rgi
.. _`rgi/tags`: https://quay.io/repository/biocontainers/rgi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rgi/README.html