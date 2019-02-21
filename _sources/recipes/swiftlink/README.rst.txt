:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'swiftlink'
.. highlight: bash

swiftlink
=========

.. conda:recipe:: swiftlink
   :replaces_section_title:

   A multipoint parametric linkage analysis tool for large consanguineous pedigrees and is primarily targeted at pedigrees that cannot be analysed by a Lander\-Green algorithm based program\, i.e. many markers\, but larger pedigrees.

   :homepage: https://github.com/ajm/swiftlink
   :license: GPLv3
   :recipe: /`swiftlink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swiftlink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/swiftlink/meta.yaml>`_

   


.. conda:package:: swiftlink

   |downloads_swiftlink| |docker_swiftlink|

   :versions: 1.0-2, 1.0-1, 1.0-0
   
   :depends gsl: >=2.2.1,<2.3.0a0
   
   :depends libgcc-ng: >=4.9
   
   :depends libstdcxx-ng: >=4.9
   
   :depends openblas: >=0.2.20,<0.2.21.0a0
   
   :depends openmp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install swiftlink

   and update with::

      conda update swiftlink

   or use the docker container::

      docker pull quay.io/biocontainers/swiftlink:<tag>

   (see `swiftlink/tags`_ for valid values for ``<tag>``)


.. |downloads_swiftlink| image:: https://img.shields.io/conda/dn/bioconda/swiftlink.svg?style=flat
   :alt:   (downloads)
.. |docker_swiftlink| image:: https://quay.io/repository/biocontainers/swiftlink/status
   :target: https://quay.io/repository/biocontainers/swiftlink
.. _`swiftlink/tags`: https://quay.io/repository/biocontainers/swiftlink?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/swiftlink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/swiftlink/README.html