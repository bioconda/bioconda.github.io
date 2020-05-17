:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pftools'
.. highlight: bash

pftools
=======

.. conda:recipe:: pftools
   :replaces_section_title:

   A generalized profile syntax for biomolecular sequence motifs and its function in automatic sequence interpretation.

   :homepage: https://web.expasy.org/pftools/
   :developer docs: https://github.com/sib-swiss/pftools3
   :license: GPLv2
   :recipe: /`pftools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pftools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pftools/meta.yaml>`_

   


.. conda:package:: pftools

   |downloads_pftools| |docker_pftools|

   :versions: 2.3.5-1, 2.3.5-0
   
   :depends libcxx: >=9.0.1
   :depends libgfortran: >=4.0.0,<5.0.0.a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pftools

   and update with::

      conda update pftools

   or use the docker container::

      docker pull quay.io/biocontainers/pftools:<tag>

   (see `pftools/tags`_ for valid values for ``<tag>``)


.. |downloads_pftools| image:: https://img.shields.io/conda/dn/bioconda/pftools.svg?style=flat
   :target: https://anaconda.org/bioconda/pftools
   :alt:   (downloads)
.. |docker_pftools| image:: https://quay.io/repository/biocontainers/pftools/status
   :target: https://quay.io/repository/biocontainers/pftools
.. _`pftools/tags`: https://quay.io/repository/biocontainers/pftools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pftools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pftools/README.html