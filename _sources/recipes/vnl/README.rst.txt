.. title:: Package Recipe 'vnl'
.. highlight: bash


vnl
===

.. conda:recipe:: vnl
   :replaces_section_title:

   A multi\-platform collection of C\+\+ software libraries for Computer Vision and Image Understanding.

   :homepage: https://sf.net/projects/vxl/
   :license: BSD
   :recipe: /`vnl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vnl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vnl/meta.yaml>`_

   


.. conda:package:: vnl

   |downloads_vnl| |docker_vnl|

   :versions: 1.17.0

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_vnl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vnl

   and update with::

      conda update vnl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vnl


.. |required_by_vnl| conda:required_by:: vnl
.. |downloads_vnl| image:: https://img.shields.io/conda/dn/bioconda/vnl.svg?style=flat
   :alt:   (downloads)
.. |docker_vnl| image:: https://quay.io/repository/biocontainers/vnl/status
   :target: https://quay.io/repository/biocontainers/vnl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vnl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vnl/README.html

