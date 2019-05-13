:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'medusa-data-fusion'
.. highlight: bash

medusa-data-fusion
==================

.. conda:recipe:: medusa
   :replaces_section_title:

   Medusa is an approach to detect size\-k modules of objects that\, taken together\,
   appear most significant to another set of objects. It builds on collective
   matrix factorization to derive different semantics\, and it formulates the
   growing of the modules as a submodular optimization program.

   :homepage: https://github.com/marinkaz/medusa
   :license: GPLv3
   :recipe: /`medusa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medusa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/medusa/meta.yaml>`_

   


.. conda:package:: medusa-data-fusion

   |downloads_medusa-data-fusion| |docker_medusa-data-fusion|

   :versions: 0.1-2, 0.1-0
   
   :depends numpy: 
   :depends python: >=2.7,<2.8.0a0
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install medusa-data-fusion

   and update with::

      conda update medusa-data-fusion

   or use the docker container::

      docker pull quay.io/biocontainers/medusa-data-fusion:<tag>

   (see `medusa-data-fusion/tags`_ for valid values for ``<tag>``)


.. |downloads_medusa-data-fusion| image:: https://img.shields.io/conda/dn/bioconda/medusa-data-fusion.svg?style=flat
   :target: https://anaconda.org/bioconda/medusa-data-fusion
   :alt:   (downloads)
.. |docker_medusa-data-fusion| image:: https://quay.io/repository/biocontainers/medusa-data-fusion/status
   :target: https://quay.io/repository/biocontainers/medusa-data-fusion
.. _`medusa-data-fusion/tags`: https://quay.io/repository/biocontainers/medusa-data-fusion?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/medusa-data-fusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/medusa-data-fusion/README.html