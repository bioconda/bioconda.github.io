:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genericrepeatfinder'
.. highlight: bash

genericrepeatfinder
===================

.. conda:recipe:: genericrepeatfinder
   :replaces_section_title:

   Generic Repeat Finder \(GRF\).

   :homepage: https://github.com/bioinfolabmu/GenericRepeatFinder
   :license: GPL / GPLv3
   :recipe: /`genericrepeatfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genericrepeatfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genericrepeatfinder/meta.yaml>`_

   


.. conda:package:: genericrepeatfinder

   |downloads_genericrepeatfinder| |docker_genericrepeatfinder|

   :versions: 1.0-0
   
   :depends cd-hit: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genericrepeatfinder

   and update with::

      conda update genericrepeatfinder

   or use the docker container::

      docker pull quay.io/biocontainers/genericrepeatfinder:<tag>

   (see `genericrepeatfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_genericrepeatfinder| image:: https://img.shields.io/conda/dn/bioconda/genericrepeatfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/genericrepeatfinder
   :alt:   (downloads)
.. |docker_genericrepeatfinder| image:: https://quay.io/repository/biocontainers/genericrepeatfinder/status
   :target: https://quay.io/repository/biocontainers/genericrepeatfinder
.. _`genericrepeatfinder/tags`: https://quay.io/repository/biocontainers/genericrepeatfinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genericrepeatfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genericrepeatfinder/README.html