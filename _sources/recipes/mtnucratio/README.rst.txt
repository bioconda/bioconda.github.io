:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtnucratio'
.. highlight: bash

mtnucratio
==========

.. conda:recipe:: mtnucratio
   :replaces_section_title:

   A small tool to determine MT to Nuclear ratios for NGS data.

   :homepage: https://github.com/apeltzer/MTNucRatioCalculator
   :license: GPLv3
   :recipe: /`mtnucratio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtnucratio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtnucratio/meta.yaml>`_

   


.. conda:package:: mtnucratio

   |downloads_mtnucratio| |docker_mtnucratio|

   :versions: 0.5-1
   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mtnucratio

   and update with::

      conda update mtnucratio

   or use the docker container::

      docker pull quay.io/biocontainers/mtnucratio:<tag>

   (see `mtnucratio/tags`_ for valid values for ``<tag>``)


.. |downloads_mtnucratio| image:: https://img.shields.io/conda/dn/bioconda/mtnucratio.svg?style=flat
   :alt:   (downloads)
.. |docker_mtnucratio| image:: https://quay.io/repository/biocontainers/mtnucratio/status
   :target: https://quay.io/repository/biocontainers/mtnucratio
.. _`mtnucratio/tags`: https://quay.io/repository/biocontainers/mtnucratio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtnucratio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtnucratio/README.html