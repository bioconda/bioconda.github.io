:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hclust2'
.. highlight: bash

hclust2
=======

.. conda:recipe:: hclust2
   :replaces_section_title:

   hclust2 is a handy tool for plotting heat\-maps with several useful options to produce high quality figures that can be used in publication.

   :homepage: https://bitbucket.org/nsegata/hclust2
   :license: License
   :recipe: /`hclust2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hclust2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hclust2/meta.yaml>`_

   


.. conda:package:: hclust2

   |downloads_hclust2| |docker_hclust2|

   :versions: 0.99-1, 0.99-0, 0.98.3d589ab-1, 0.98.3d589ab-0
   
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: >=2.7,<2.8.0a0
   :depends scipy: 0.18.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hclust2

   and update with::

      conda update hclust2

   or use the docker container::

      docker pull quay.io/biocontainers/hclust2:<tag>

   (see `hclust2/tags`_ for valid values for ``<tag>``)


.. |downloads_hclust2| image:: https://img.shields.io/conda/dn/bioconda/hclust2.svg?style=flat
   :alt:   (downloads)
.. |docker_hclust2| image:: https://quay.io/repository/biocontainers/hclust2/status
   :target: https://quay.io/repository/biocontainers/hclust2
.. _`hclust2/tags`: https://quay.io/repository/biocontainers/hclust2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hclust2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hclust2/README.html