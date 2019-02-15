:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bmtagger'
.. highlight: bash

bmtagger
========

.. conda:recipe:: bmtagger
   :replaces_section_title:

   BMTagger aka Best Match Tagger is for removing human reads from metagenomics datasets

   :homepage: ftp://ftp.ncbi.nlm.nih.gov/pub/agarwala/bmtagger/
   :license: Public Domain
   :recipe: /`bmtagger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmtagger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmtagger/meta.yaml>`_

   


.. conda:package:: bmtagger

   |downloads_bmtagger| |docker_bmtagger|

   :versions: 3.101-4, 3.101-3, 3.101-1
   
   :depends blast: 
   
   :depends bmfilter: 
   
   :depends bmtool: 
   
   :depends extract_fullseq: 
   
   :depends gnu-getopt: 
   
   :depends srprism: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bmtagger

   and update with::

      conda update bmtagger

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bmtagger:<tag>

   (see `bmtagger/tags`_ for valid values for ``<tag>``)


.. |downloads_bmtagger| image:: https://img.shields.io/conda/dn/bioconda/bmtagger.svg?style=flat
   :alt:   (downloads)
.. |docker_bmtagger| image:: https://quay.io/repository/biocontainers/bmtagger/status
   :target: https://quay.io/repository/biocontainers/bmtagger
.. _`bmtagger/tags`: https://quay.io/repository/biocontainers/bmtagger?tab=tags






Notes
-----
You may find it necessary to create a bmtagger.conf file to specify paired or single\-end searching. The file should contain the line \'srprismopts\=\"\-b 100000000 \-n 5 \-R 0 \-r 1 \-M 7168\"\' along with \'\-p true\' or \'\-p false\' for paired\, and single\, respectively. This config file can be passed to bmtagger.sh via the \'\-C\' option.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bmtagger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bmtagger/README.html