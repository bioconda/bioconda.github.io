:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyloh'
.. highlight: bash

pyloh
=====

.. conda:recipe:: pyloh
   :replaces_section_title:

   Deconvolving tumor purity and ploidy by integrating copy number alterations and loss of heterozygosity

   :homepage: https://github.com/uci-cbcl/PyLOH
   :license: GPLv2
   :recipe: /`pyloh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyloh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyloh/meta.yaml>`_

   


.. conda:package:: pyloh

   |downloads_pyloh| |docker_pyloh|

   :versions: 1.4.3-1, 1.4.3-0, 1.4.1-1
   
   :depends matplotlib: >=1.2
   :depends numpy: >=1.6.1
   :depends pysam: >=0.7
   :depends python: >=2.7,<2.8.0a0
   :depends scipy: >=0.10
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyloh

   and update with::

      conda update pyloh

   or use the docker container::

      docker pull quay.io/biocontainers/pyloh:<tag>

   (see `pyloh/tags`_ for valid values for ``<tag>``)


.. |downloads_pyloh| image:: https://img.shields.io/conda/dn/bioconda/pyloh.svg?style=flat
   :alt:   (downloads)
.. |docker_pyloh| image:: https://quay.io/repository/biocontainers/pyloh/status
   :target: https://quay.io/repository/biocontainers/pyloh
.. _`pyloh/tags`: https://quay.io/repository/biocontainers/pyloh?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyloh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyloh/README.html