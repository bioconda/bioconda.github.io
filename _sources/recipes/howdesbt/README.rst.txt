:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'howdesbt'
.. highlight: bash

howdesbt
========

.. conda:recipe:: howdesbt
   :replaces_section_title:

   Sequence Bloom Tree\, supporting determined\/how split filters

   :homepage: https://github.com/medvedevgroup/HowDeSBT
   :license: MIT / MIT
   :recipe: /`howdesbt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/howdesbt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/howdesbt/meta.yaml>`_

   


.. conda:package:: howdesbt

   |downloads_howdesbt| |docker_howdesbt|

   :versions: 1.00.03-1, 1.00.03-0, 1.00.00-0
   
   :depends croaring: >=0.2.63,<0.2.64.0a0
   :depends kmer-jellyfish: >=2.2
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends sdsl-lite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install howdesbt

   and update with::

      conda update howdesbt

   or use the docker container::

      docker pull quay.io/biocontainers/howdesbt:<tag>

   (see `howdesbt/tags`_ for valid values for ``<tag>``)


.. |downloads_howdesbt| image:: https://img.shields.io/conda/dn/bioconda/howdesbt.svg?style=flat
   :target: https://anaconda.org/bioconda/howdesbt
   :alt:   (downloads)
.. |docker_howdesbt| image:: https://quay.io/repository/biocontainers/howdesbt/status
   :target: https://quay.io/repository/biocontainers/howdesbt
.. _`howdesbt/tags`: https://quay.io/repository/biocontainers/howdesbt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/howdesbt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/howdesbt/README.html