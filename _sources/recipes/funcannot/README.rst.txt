:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'funcannot'
.. highlight: bash

funcannot
=========

.. conda:recipe:: funcannot
   :replaces_section_title:

   Annotates cDNA\, protein\, mutation type\, and other funcational changes to variants in a VCF file with pre\-existing gene annotations \(see\:genepender\).

   :homepage: https://github.com/BioTools-Tek/funcannot
   :license: GPLv3
   :recipe: /`funcannot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funcannot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funcannot/meta.yaml>`_

   


.. conda:package:: funcannot

   |downloads_funcannot| |docker_funcannot|

   :versions: v2.8-1, v2.8-0
   
   :depends libgcc-ng: >=4.9
   
   :depends qt: 4.8.7.*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install funcannot

   and update with::

      conda update funcannot

   or use the docker container::

      docker pull quay.io/repository/biocontainers/funcannot:<tag>

   (see `funcannot/tags`_ for valid values for ``<tag>``)


.. |downloads_funcannot| image:: https://img.shields.io/conda/dn/bioconda/funcannot.svg?style=flat
   :alt:   (downloads)
.. |docker_funcannot| image:: https://quay.io/repository/biocontainers/funcannot/status
   :target: https://quay.io/repository/biocontainers/funcannot
.. _`funcannot/tags`: https://quay.io/repository/biocontainers/funcannot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/funcannot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/funcannot/README.html