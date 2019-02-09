.. title:: Package Recipe 'bpp-core'
.. highlight: bash


bpp-core
========

.. conda:recipe:: bpp-core
   :replaces_section_title:

   Bio\+\+ is a set of C\+\+ libraries for Bioinformatics.

   :homepage: https://github.com/BioPP/bpp-core
   :license: CeCILL
   :recipe: /`bpp-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bpp-core/meta.yaml>`_

   


.. conda:package:: bpp-core

   |downloads_bpp-core| |docker_bpp-core|

   :versions: 2.4.1, 2.2.0

   :depends: 

   :required~by: |required_by_bpp-core|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bpp-core

   and update with::

      conda update bpp-core

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bpp-core


.. |required_by_bpp-core| conda:required_by:: bpp-core
.. |downloads_bpp-core| image:: https://img.shields.io/conda/dn/bioconda/bpp-core.svg?style=flat
   :alt:   (downloads)
.. |docker_bpp-core| image:: https://quay.io/repository/biocontainers/bpp-core/status
   :target: https://quay.io/repository/biocontainers/bpp-core







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bpp-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bpp-core/README.html

