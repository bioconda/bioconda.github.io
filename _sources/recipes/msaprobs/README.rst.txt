:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msaprobs'
.. highlight: bash

msaprobs
========

.. conda:recipe:: msaprobs
   :replaces_section_title:
   :noindex:

   MSAProbs is a well\-established state\-of\-the\-art multiple sequence alignment algorithm for protein sequences.

   :homepage: http://msaprobs.sourceforge.net/homepage.htm
   :license: GPL3
   :recipe: /`msaprobs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msaprobs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msaprobs/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btq338`

   


.. conda:package:: msaprobs

   |downloads_msaprobs| |docker_msaprobs|

   :versions:
      
      

      ``0.9.7-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msaprobs

   and update with::

      conda update msaprobs

   or use the docker container::

      docker pull quay.io/biocontainers/msaprobs:<tag>

   (see `msaprobs/tags`_ for valid values for ``<tag>``)


.. |downloads_msaprobs| image:: https://img.shields.io/conda/dn/bioconda/msaprobs.svg?style=flat
   :target: https://anaconda.org/bioconda/msaprobs
   :alt:   (downloads)
.. |docker_msaprobs| image:: https://quay.io/repository/biocontainers/msaprobs/status
   :target: https://quay.io/repository/biocontainers/msaprobs
.. _`msaprobs/tags`: https://quay.io/repository/biocontainers/msaprobs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msaprobs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msaprobs/README.html