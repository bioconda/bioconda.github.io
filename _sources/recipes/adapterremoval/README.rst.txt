:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'adapterremoval'
.. highlight: bash

adapterremoval
==============

.. conda:recipe:: adapterremoval
   :replaces_section_title:

   The AdapterRemoval v2 tool for merging and clipping reads.

   :homepage: https://github.com/MikkelSchubert/adapterremoval
   :license: GPL3
   :recipe: /`adapterremoval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapterremoval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapterremoval/meta.yaml>`_

   


.. conda:package:: adapterremoval

   |downloads_adapterremoval| |docker_adapterremoval|

   :versions: 2.2.2-4, 2.2.2-3, 2.2.2-2
   
   :depends bzip2: >=1.0.6,<2.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install adapterremoval

   and update with::

      conda update adapterremoval

   or use the docker container::

      docker pull quay.io/repository/biocontainers/adapterremoval:<tag>

   (see `adapterremoval/tags`_ for valid values for ``<tag>``)


.. |downloads_adapterremoval| image:: https://img.shields.io/conda/dn/bioconda/adapterremoval.svg?style=flat
   :alt:   (downloads)
.. |docker_adapterremoval| image:: https://quay.io/repository/biocontainers/adapterremoval/status
   :target: https://quay.io/repository/biocontainers/adapterremoval
.. _`adapterremoval/tags`: https://quay.io/repository/biocontainers/adapterremoval?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adapterremoval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adapterremoval/README.html