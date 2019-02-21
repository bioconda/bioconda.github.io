:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'red'
.. highlight: bash

red
===

.. conda:recipe:: red
   :replaces_section_title:

   Red \(RepeatsDetector\)\: an intelligent\, rapid\, accurate tool for detecting repeats de\-novo on the genomic scale.

   :homepage: http://toolsmith.ens.utulsa.edu
   :license: PUBLIC-DOMAIN / Custom OSS
   :recipe: /`red <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/red>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/red/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-015-0654-5`

   


.. conda:package:: red

   |downloads_red| |docker_red|

   :versions: 2015.05.22-0
   
   :depends libstdcxx-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install red

   and update with::

      conda update red

   or use the docker container::

      docker pull quay.io/biocontainers/red:<tag>

   (see `red/tags`_ for valid values for ``<tag>``)


.. |downloads_red| image:: https://img.shields.io/conda/dn/bioconda/red.svg?style=flat
   :alt:   (downloads)
.. |docker_red| image:: https://quay.io/repository/biocontainers/red/status
   :target: https://quay.io/repository/biocontainers/red
.. _`red/tags`: https://quay.io/repository/biocontainers/red?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/red/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/red/README.html