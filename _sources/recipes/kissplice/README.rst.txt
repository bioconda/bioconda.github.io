:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kissplice'
.. highlight: bash

kissplice
=========

.. conda:recipe:: kissplice
   :replaces_section_title:

   A local transcriptome assembler for SNPs\, indels and AS events

   :homepage: http://kissplice.prabi.fr
   :license: CeCILL license
   :recipe: /`kissplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kissplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kissplice/meta.yaml>`_

   


.. conda:package:: kissplice

   |downloads_kissplice| |docker_kissplice|

   :versions: 2.4.0-0, 2.4.0p1-3, 2.4.0p1-2, 2.4.0p1-1, 2.4.0p1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends python: >=2.7,<2.8.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kissplice

   and update with::

      conda update kissplice

   or use the docker container::

      docker pull quay.io/biocontainers/kissplice:<tag>

   (see `kissplice/tags`_ for valid values for ``<tag>``)


.. |downloads_kissplice| image:: https://img.shields.io/conda/dn/bioconda/kissplice.svg?style=flat
   :target: https://anaconda.org/bioconda/kissplice
   :alt:   (downloads)
.. |docker_kissplice| image:: https://quay.io/repository/biocontainers/kissplice/status
   :target: https://quay.io/repository/biocontainers/kissplice
.. _`kissplice/tags`: https://quay.io/repository/biocontainers/kissplice?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kissplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kissplice/README.html