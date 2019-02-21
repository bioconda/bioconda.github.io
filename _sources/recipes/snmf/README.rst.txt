:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snmf'
.. highlight: bash

snmf
====

.. conda:recipe:: snmf
   :replaces_section_title:

   Fast and efficient program for estimating individual admixture coefficients based on sparse non\-negative matrix factorization and population genetics

   :homepage: http://membres-timc.imag.fr/Olivier.Francois/snmf/index.htm
   :license: GNU GPL v3
   :recipe: /`snmf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snmf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snmf/meta.yaml>`_

   


.. conda:package:: snmf

   |downloads_snmf| |docker_snmf|

   :versions: 1.2-1, 1.2-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snmf

   and update with::

      conda update snmf

   or use the docker container::

      docker pull quay.io/biocontainers/snmf:<tag>

   (see `snmf/tags`_ for valid values for ``<tag>``)


.. |downloads_snmf| image:: https://img.shields.io/conda/dn/bioconda/snmf.svg?style=flat
   :alt:   (downloads)
.. |docker_snmf| image:: https://quay.io/repository/biocontainers/snmf/status
   :target: https://quay.io/repository/biocontainers/snmf
.. _`snmf/tags`: https://quay.io/repository/biocontainers/snmf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snmf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snmf/README.html