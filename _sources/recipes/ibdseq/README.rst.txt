:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ibdseq'
.. highlight: bash

ibdseq
======

.. conda:recipe:: ibdseq
   :replaces_section_title:

   IBDseq is a software program for detecting segments of identity\-by\-descent \(IBD\) and homozygosity\-by\-descent \(HBD\) in unphased genetic sequence data.

   :homepage: http://faculty.washington.edu/browning/ibdseq.html
   :license: Apache v2.0
   :recipe: /`ibdseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibdseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ibdseq/meta.yaml>`_
   :links: biotools: :biotools:`IBDseq`, doi: :doi:`10.1016/j.ajhg.2013.09.014`

   


.. conda:package:: ibdseq

   |downloads_ibdseq| |docker_ibdseq|

   :versions: r1206-1, r1206-0
   
   :depends java-jdk: >=6.0.77
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ibdseq

   and update with::

      conda update ibdseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ibdseq:<tag>

   (see `ibdseq/tags`_ for valid values for ``<tag>``)


.. |downloads_ibdseq| image:: https://img.shields.io/conda/dn/bioconda/ibdseq.svg?style=flat
   :alt:   (downloads)
.. |docker_ibdseq| image:: https://quay.io/repository/biocontainers/ibdseq/status
   :target: https://quay.io/repository/biocontainers/ibdseq
.. _`ibdseq/tags`: https://quay.io/repository/biocontainers/ibdseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ibdseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ibdseq/README.html