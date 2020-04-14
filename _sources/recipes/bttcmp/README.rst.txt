:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bttcmp'
.. highlight: bash

bttcmp
======

.. conda:recipe:: bttcmp
   :replaces_section_title:

   A toxin minging tool for Bacillus thuringiensis

   :homepage: https://github.com/liaochenlanruo/BTTCMP/blob/master/README.md
   :developer docs: https://github.com/liaochenlanruo/BTTCMP/tree/master
   :license: GPL / GPLv3
   :recipe: /`bttcmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttcmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bttcmp/meta.yaml>`_
   :links: biotools: :biotools:`bttcmp`

   


.. conda:package:: bttcmp

   |downloads_bttcmp| |docker_bttcmp|

   :versions: 1.0.3-0, 1.0.2-0, 1.0.1-0
   
   :depends blast: 
   :depends hmmer: 
   :depends libsvm: 
   :depends perl-file-tee: 
   :depends perl-getopt-long: 
   :depends perl-pod-usage: 
   :depends pgcgap: >=1.0.14
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bttcmp

   and update with::

      conda update bttcmp

   or use the docker container::

      docker pull quay.io/biocontainers/bttcmp:<tag>

   (see `bttcmp/tags`_ for valid values for ``<tag>``)


.. |downloads_bttcmp| image:: https://img.shields.io/conda/dn/bioconda/bttcmp.svg?style=flat
   :target: https://anaconda.org/bioconda/bttcmp
   :alt:   (downloads)
.. |docker_bttcmp| image:: https://quay.io/repository/biocontainers/bttcmp/status
   :target: https://quay.io/repository/biocontainers/bttcmp
.. _`bttcmp/tags`: https://quay.io/repository/biocontainers/bttcmp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bttcmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bttcmp/README.html