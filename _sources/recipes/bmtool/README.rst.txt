:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bmtool'
.. highlight: bash

bmtool
======

.. conda:recipe:: bmtool
   :replaces_section_title:

   bmtool is part of BMTagger aka Best Match Tagger\, for removing human reads from metagenomics datasets

   :homepage: ftp://ftp.ncbi.nlm.nih.gov/pub/agarwala/bmtagger/
   :license: Public Domain
   :recipe: /`bmtool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmtool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bmtool/meta.yaml>`_

   


.. conda:package:: bmtool

   |downloads_bmtool| |docker_bmtool|

   :versions: 3.101-2, 3.101-1
   
   :depends libgcc-ng: >=4.9
   
   :depends libstdcxx-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bmtool

   and update with::

      conda update bmtool

   or use the docker container::

      docker pull quay.io/biocontainers/bmtool:<tag>

   (see `bmtool/tags`_ for valid values for ``<tag>``)


.. |downloads_bmtool| image:: https://img.shields.io/conda/dn/bioconda/bmtool.svg?style=flat
   :alt:   (downloads)
.. |docker_bmtool| image:: https://quay.io/repository/biocontainers/bmtool/status
   :target: https://quay.io/repository/biocontainers/bmtool
.. _`bmtool/tags`: https://quay.io/repository/biocontainers/bmtool?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bmtool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bmtool/README.html