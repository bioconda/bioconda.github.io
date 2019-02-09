.. title:: Package Recipe 'bpp-seq'
.. highlight: bash


bpp-seq
=======

.. conda:recipe:: bpp-seq
   :replaces_section_title:

   Bio\+\+ is a set of C\+\+ libraries for Bioinformatics.

   :homepage: https://github.com/BioPP/bpp-seq
   :license: CeCILL
   :recipe: /`bpp-seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-seq/meta.yaml>`_

   


.. conda:package:: bpp-seq

   |downloads_bpp-seq| |docker_bpp-seq|

   :versions: 2.4.1, 2.2.0

   :depends: :conda:package:`bpp-core`  

   :required~by: |required_by_bpp-seq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bpp-seq

   and update with::

      conda update bpp-seq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bpp-seq


.. |required_by_bpp-seq| conda:required_by:: bpp-seq
.. |downloads_bpp-seq| image:: https://img.shields.io/conda/dn/bioconda/bpp-seq.svg?style=flat
   :alt:   (downloads)
.. |docker_bpp-seq| image:: https://quay.io/repository/biocontainers/bpp-seq/status
   :target: https://quay.io/repository/biocontainers/bpp-seq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bpp-seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bpp-seq/README.html

