:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trawler'
.. highlight: bash

trawler
=======

.. conda:recipe:: trawler
   :replaces_section_title:

   Trawler is a motif discovery tool used to identify enriched motifs in a set of sequenced regions of DNA.

   :homepage: https://trawler.erc.monash.edu.au/help.html
   :license: GPLv2
   :recipe: /`trawler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trawler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trawler/meta.yaml>`_

   


.. conda:package:: trawler

   |downloads_trawler| |docker_trawler|

   :versions: 2.0-2, 2.0-1, 2.0-0
   
   :depends ghostscript: 
   
   :depends openjdk: 
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends perl-algorithm-cluster: 
   
   :depends perl-cgi: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trawler

   and update with::

      conda update trawler

   or use the docker container::

      docker pull quay.io/biocontainers/trawler:<tag>

   (see `trawler/tags`_ for valid values for ``<tag>``)


.. |downloads_trawler| image:: https://img.shields.io/conda/dn/bioconda/trawler.svg?style=flat
   :alt:   (downloads)
.. |docker_trawler| image:: https://quay.io/repository/biocontainers/trawler/status
   :target: https://quay.io/repository/biocontainers/trawler
.. _`trawler/tags`: https://quay.io/repository/biocontainers/trawler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trawler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trawler/README.html