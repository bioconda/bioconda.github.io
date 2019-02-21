:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slclust'
.. highlight: bash

slclust
=======

.. conda:recipe:: slclust
   :replaces_section_title:

   A utility that performs single\-linkage clustering with the option of applying a Jaccard similarity coefficient to break weakly bound clusters into distinct clusters.

   :homepage: https://sourceforge.net/projects/slclust/
   :license: Artistic License
   :recipe: /`slclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slclust/meta.yaml>`_

   


.. conda:package:: slclust

   |downloads_slclust| |docker_slclust|

   :versions: 02022010-3, 02022010-2, 02022010-1, 02022010-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install slclust

   and update with::

      conda update slclust

   or use the docker container::

      docker pull quay.io/biocontainers/slclust:<tag>

   (see `slclust/tags`_ for valid values for ``<tag>``)


.. |downloads_slclust| image:: https://img.shields.io/conda/dn/bioconda/slclust.svg?style=flat
   :alt:   (downloads)
.. |docker_slclust| image:: https://quay.io/repository/biocontainers/slclust/status
   :target: https://quay.io/repository/biocontainers/slclust
.. _`slclust/tags`: https://quay.io/repository/biocontainers/slclust?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slclust/README.html