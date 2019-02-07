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

   :versions: 0.99, 0.98.3d589ab

   :depends: :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`scipy`  

   :required~by: |required_by_hclust2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hclust2

   and update with::

      conda update hclust2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hclust2


.. |required_by_hclust2| conda:required_by:: hclust2
.. |downloads_hclust2| image:: https://img.shields.io/conda/dn/bioconda/hclust2.svg?style=flat
   :alt:   (downloads)
.. |docker_hclust2| image:: https://quay.io/repository/biocontainers/hclust2/status
   :target: https://quay.io/repository/biocontainers/hclust2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hclust2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hclust2/README.html

