:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sparc'
.. highlight: bash

sparc
=====

.. conda:recipe:: sparc
   :replaces_section_title:

   A sparsity\-based consensus algorithm for long erroneous sequencing reads.

   :homepage: https://github.com/yechengxi/Sparc
   :license: MIT
   :recipe: /`sparc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparc/meta.yaml>`_

   


.. conda:package:: sparc

   |downloads_sparc| |docker_sparc|

   :versions: 20160205-5, 20160205-4, 20160205-3, 20160205-2, 20160205-1, 20160205-0
   
   :depends libcxx: >=4.0.1
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sparc

   and update with::

      conda update sparc

   or use the docker container::

      docker pull quay.io/biocontainers/sparc:<tag>

   (see `sparc/tags`_ for valid values for ``<tag>``)


.. |downloads_sparc| image:: https://img.shields.io/conda/dn/bioconda/sparc.svg?style=flat
   :alt:   (downloads)
.. |docker_sparc| image:: https://quay.io/repository/biocontainers/sparc/status
   :target: https://quay.io/repository/biocontainers/sparc
.. _`sparc/tags`: https://quay.io/repository/biocontainers/sparc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sparc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sparc/README.html