:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'merqury'
.. highlight: bash

merqury
=======

.. conda:recipe:: merqury
   :replaces_section_title:
   :noindex:

   Evaluate genome assemblies with k\-mers and more.

   :homepage: https://github.com/marbl/merqury
   :license: PUBLIC DOMAIN
   :recipe: /`merqury <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merqury>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/merqury/meta.yaml>`_

   Often\, genome assembly projects have illumina whole genome sequencing reads available for the assembled individual. The k\-mer spectrum of this read set can be used for independently evaluating assembly quality without the need of a high quality reference. Merqury provides a set of tools for this purpose.


.. conda:package:: merqury

   |downloads_merqury| |docker_merqury|

   :versions:
      
      

      ``1.1-0``,  ``v1.0-0``

      

   
   :depends bedtools: ``>=2.29.2``
   :depends igvtools: ``>=2.5.3``
   :depends meryl: ``>=v1.0,<2000``
   :depends openjdk: ``>=11.0.1``
   :depends r-argparse: ``>=2.0.1``
   :depends r-base: 
   :depends r-ggplot2: ``>=3.3.2``
   :depends r-scales: ``>=1.1.1``
   :depends samtools: ``>=1.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install merqury

   and update with::

      conda update merqury

   or use the docker container::

      docker pull quay.io/biocontainers/merqury:<tag>

   (see `merqury/tags`_ for valid values for ``<tag>``)


.. |downloads_merqury| image:: https://img.shields.io/conda/dn/bioconda/merqury.svg?style=flat
   :target: https://anaconda.org/bioconda/merqury
   :alt:   (downloads)
.. |docker_merqury| image:: https://quay.io/repository/biocontainers/merqury/status
   :target: https://quay.io/repository/biocontainers/merqury
.. _`merqury/tags`: https://quay.io/repository/biocontainers/merqury?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/merqury/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/merqury/README.html