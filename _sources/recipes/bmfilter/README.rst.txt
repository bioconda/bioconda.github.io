:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bmfilter'
.. highlight: bash

bmfilter
========

.. conda:recipe:: bmfilter
   :replaces_section_title:

   bmfilter is part of BMTagger aka Best Match Tagger\, for removing human reads from metagenomics datasets

   :homepage: ftp://ftp.ncbi.nlm.nih.gov/pub/agarwala/bmtagger/
   :license: Public Domain
   :recipe: /`bmfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmfilter/meta.yaml>`_

   


.. conda:package:: bmfilter

   |downloads_bmfilter| |docker_bmfilter|

   :versions: 3.101-2, 3.101-1
   
   :depends libgcc-ng: >=4.9
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bmfilter

   and update with::

      conda update bmfilter

   or use the docker container::

      docker pull quay.io/biocontainers/bmfilter:<tag>

   (see `bmfilter/tags`_ for valid values for ``<tag>``)


.. |downloads_bmfilter| image:: https://img.shields.io/conda/dn/bioconda/bmfilter.svg?style=flat
   :target: https://anaconda.org/bioconda/bmfilter
   :alt:   (downloads)
.. |docker_bmfilter| image:: https://quay.io/repository/biocontainers/bmfilter/status
   :target: https://quay.io/repository/biocontainers/bmfilter
.. _`bmfilter/tags`: https://quay.io/repository/biocontainers/bmfilter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bmfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bmfilter/README.html