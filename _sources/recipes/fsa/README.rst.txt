:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fsa'
.. highlight: bash

fsa
===

.. conda:recipe:: fsa
   :replaces_section_title:

   FSA is a probabilistic multiple sequence alignment algorithm which uses a \"distance\-based\"
   approach to aligning homologous protein\, RNA or DNA sequences.


   :homepage: http://fsa.sourceforge.net/
   :license: GPL-3
   :recipe: /`fsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fsa/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1000392`

   


.. conda:package:: fsa

   |downloads_fsa| |docker_fsa|

   :versions: 1.15.9-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fsa

   and update with::

      conda update fsa

   or use the docker container::

      docker pull quay.io/biocontainers/fsa:<tag>

   (see `fsa/tags`_ for valid values for ``<tag>``)


.. |downloads_fsa| image:: https://img.shields.io/conda/dn/bioconda/fsa.svg?style=flat
   :alt:   (downloads)
.. |docker_fsa| image:: https://quay.io/repository/biocontainers/fsa/status
   :target: https://quay.io/repository/biocontainers/fsa
.. _`fsa/tags`: https://quay.io/repository/biocontainers/fsa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fsa/README.html