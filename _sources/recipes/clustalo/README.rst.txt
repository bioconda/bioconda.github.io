:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clustalo'
.. highlight: bash

clustalo
========

.. conda:recipe:: clustalo
   :replaces_section_title:

   Latest version of Clustal\: a multiple sequence alignment program for DNA or proteins

   :homepage: http://www.clustal.org/omega/
   :license: GPLv2
   :recipe: /`clustalo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustalo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustalo/meta.yaml>`_

   


.. conda:package:: clustalo

   |downloads_clustalo| |docker_clustalo|

   :versions: 1.2.4-2, 1.2.4-1, 1.2.4-0, 1.2.3-0
   
   :depends argtable2: 
   :depends libgcc-ng: >=4.9
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clustalo

   and update with::

      conda update clustalo

   or use the docker container::

      docker pull quay.io/biocontainers/clustalo:<tag>

   (see `clustalo/tags`_ for valid values for ``<tag>``)


.. |downloads_clustalo| image:: https://img.shields.io/conda/dn/bioconda/clustalo.svg?style=flat
   :target: https://anaconda.org/bioconda/clustalo
   :alt:   (downloads)
.. |docker_clustalo| image:: https://quay.io/repository/biocontainers/clustalo/status
   :target: https://quay.io/repository/biocontainers/clustalo
.. _`clustalo/tags`: https://quay.io/repository/biocontainers/clustalo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clustalo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clustalo/README.html