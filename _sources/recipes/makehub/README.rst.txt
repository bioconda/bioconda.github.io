:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'makehub'
.. highlight: bash

makehub
=======

.. conda:recipe:: makehub
   :replaces_section_title:
   :noindex:

   MakeHub is a command line tool for the fully automatic generation of of track data hubs for visualizing genomes with the UCSC genome browser.

   :homepage: https://github.com/Gaius-Augustus/MakeHub
   :license: GPL / GPL-3.0
   :recipe: /`makehub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/makehub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/makehub/meta.yaml>`_

   


.. conda:package:: makehub

   |downloads_makehub| |docker_makehub|

   :versions:
      
      

      ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends augustus: ``>=3.3.1``
   :depends biopython: 
   :depends python: ``>=3``
   :depends samtools: 
   :depends ucsc-bedtobigbed: 
   :depends ucsc-fatotwobit: 
   :depends ucsc-genepredcheck: 
   :depends ucsc-genepredtobed: 
   :depends ucsc-genepredtobiggenepred: 
   :depends ucsc-gtftogenepred: 
   :depends ucsc-hggcpercent: 
   :depends ucsc-ixixx: 
   :depends ucsc-twobitinfo: 
   :depends ucsc-wigtobigwig: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install makehub

   and update with::

      conda update makehub

   or use the docker container::

      docker pull quay.io/biocontainers/makehub:<tag>

   (see `makehub/tags`_ for valid values for ``<tag>``)


.. |downloads_makehub| image:: https://img.shields.io/conda/dn/bioconda/makehub.svg?style=flat
   :target: https://anaconda.org/bioconda/makehub
   :alt:   (downloads)
.. |docker_makehub| image:: https://quay.io/repository/biocontainers/makehub/status
   :target: https://quay.io/repository/biocontainers/makehub
.. _`makehub/tags`: https://quay.io/repository/biocontainers/makehub?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/makehub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/makehub/README.html