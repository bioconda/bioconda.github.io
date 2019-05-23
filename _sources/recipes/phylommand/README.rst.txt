:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylommand'
.. highlight: bash

phylommand
==========

.. conda:recipe:: phylommand
   :replaces_section_title:

   Command\-line phylogenetics tools.

   :homepage: https://github.com/mr-y/phylommand
   :license: GPLv3
   :recipe: /`phylommand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylommand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylommand/meta.yaml>`_

   Command\-line tools to create\, manipulate\, and\/or analyze phylogenetic trees or pairwise alignments. Does not include \"rudisvg\" svg viewer.


.. conda:package:: phylommand

   |downloads_phylommand| |docker_phylommand|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylommand

   and update with::

      conda update phylommand

   or use the docker container::

      docker pull quay.io/biocontainers/phylommand:<tag>

   (see `phylommand/tags`_ for valid values for ``<tag>``)


.. |downloads_phylommand| image:: https://img.shields.io/conda/dn/bioconda/phylommand.svg?style=flat
   :target: https://anaconda.org/bioconda/phylommand
   :alt:   (downloads)
.. |docker_phylommand| image:: https://quay.io/repository/biocontainers/phylommand/status
   :target: https://quay.io/repository/biocontainers/phylommand
.. _`phylommand/tags`: https://quay.io/repository/biocontainers/phylommand?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylommand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylommand/README.html