:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio-ting'
.. highlight: bash

bio-ting
========

.. conda:recipe:: bio-ting
   :replaces_section_title:

   ting is a tool clustering large scale T cell receptor repertoires by antigen\-specificity

   :homepage: https://github.com/FelixMoelder/ting
   :license: MIT
   :recipe: /`bio-ting <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-ting>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-ting/meta.yaml>`_

   


.. conda:package:: bio-ting

   |downloads_bio-ting| |docker_bio-ting|

   :versions: 1.0.1-0
   
   :depends networkx: >=2.4,<2.5
   :depends numpy: >=1.17,<1.18
   :depends python: >=3.7
   :depends scipy: >=1.3,<1.4
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bio-ting

   and update with::

      conda update bio-ting

   or use the docker container::

      docker pull quay.io/biocontainers/bio-ting:<tag>

   (see `bio-ting/tags`_ for valid values for ``<tag>``)


.. |downloads_bio-ting| image:: https://img.shields.io/conda/dn/bioconda/bio-ting.svg?style=flat
   :target: https://anaconda.org/bioconda/bio-ting
   :alt:   (downloads)
.. |docker_bio-ting| image:: https://quay.io/repository/biocontainers/bio-ting/status
   :target: https://quay.io/repository/biocontainers/bio-ting
.. _`bio-ting/tags`: https://quay.io/repository/biocontainers/bio-ting?tab=tags






Notes
-----
The tool is available as command \`ting\`.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio-ting/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio-ting/README.html