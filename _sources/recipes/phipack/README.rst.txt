:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phipack'
.. highlight: bash

phipack
=======

.. conda:recipe:: phipack
   :replaces_section_title:

   Simple\, rapid\, and statistically efficient test for recombination.

   :homepage: http://www.maths.otago.ac.nz/~dbryant/software.html
   :license: GPL3
   :recipe: /`phipack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phipack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phipack/meta.yaml>`_

   


.. conda:package:: phipack

   |downloads_phipack| |docker_phipack|

   :versions: 1.1-0, 1.0-0
   
   :depends libgcc-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phipack

   and update with::

      conda update phipack

   or use the docker container::

      docker pull quay.io/biocontainers/phipack:<tag>

   (see `phipack/tags`_ for valid values for ``<tag>``)


.. |downloads_phipack| image:: https://img.shields.io/conda/dn/bioconda/phipack.svg?style=flat
   :target: https://anaconda.org/bioconda/phipack
   :alt:   (downloads)
.. |docker_phipack| image:: https://quay.io/repository/biocontainers/phipack/status
   :target: https://quay.io/repository/biocontainers/phipack
.. _`phipack/tags`: https://quay.io/repository/biocontainers/phipack?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phipack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phipack/README.html