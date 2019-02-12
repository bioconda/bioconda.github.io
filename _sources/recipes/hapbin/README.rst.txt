:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hapbin'
.. highlight: bash

hapbin
======

.. conda:recipe:: hapbin
   :replaces_section_title:

   hapbin is a collection of tools for efficiently calculating Extended Haplotype Homozygosity \(EHH\)\, the Integrated Haplotype Score \(iHS\) and the Cross Population Extended Haplotype Homozogysity \(XP\-EHH\) statistic.

   :homepage: https://github.com/evotools/hapbin
   :license: GPLv3
   :recipe: /`hapbin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapbin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hapbin/meta.yaml>`_

   


.. conda:package:: hapbin

   |downloads_hapbin| |docker_hapbin|

   :versions: 1.3.0-0, 1.0.0-1, 1.0.0-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libstdcxx-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hapbin

   and update with::

      conda update hapbin

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hapbin:<tag>

   (see `hapbin/tags`_ for valid values for ``<tag>``)


.. |downloads_hapbin| image:: https://img.shields.io/conda/dn/bioconda/hapbin.svg?style=flat
   :alt:   (downloads)
.. |docker_hapbin| image:: https://quay.io/repository/biocontainers/hapbin/status
   :target: https://quay.io/repository/biocontainers/hapbin
.. _`hapbin/tags`: https://quay.io/repository/biocontainers/hapbin?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hapbin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hapbin/README.html