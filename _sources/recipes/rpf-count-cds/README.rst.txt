:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rpf-count-cds'
.. highlight: bash

rpf-count-cds
=============

.. conda:recipe:: rpf-count-cds
   :replaces_section_title:

   A python script for counting RPF reads map to CDS region.

   :homepage: https://github.com/xzt41/RPF-count-CDS
   :license: MIT
   :recipe: /`rpf-count-cds <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpf-count-cds>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpf-count-cds/meta.yaml>`_

   


.. conda:package:: rpf-count-cds

   |downloads_rpf-count-cds| |docker_rpf-count-cds|

   :versions: 0.0.1-1, 0.0.1-0
   
   :depends htseq: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rpf-count-cds

   and update with::

      conda update rpf-count-cds

   or use the docker container::

      docker pull quay.io/biocontainers/rpf-count-cds:<tag>

   (see `rpf-count-cds/tags`_ for valid values for ``<tag>``)


.. |downloads_rpf-count-cds| image:: https://img.shields.io/conda/dn/bioconda/rpf-count-cds.svg?style=flat
   :target: https://anaconda.org/bioconda/rpf-count-cds
   :alt:   (downloads)
.. |docker_rpf-count-cds| image:: https://quay.io/repository/biocontainers/rpf-count-cds/status
   :target: https://quay.io/repository/biocontainers/rpf-count-cds
.. _`rpf-count-cds/tags`: https://quay.io/repository/biocontainers/rpf-count-cds?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rpf-count-cds/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rpf-count-cds/README.html