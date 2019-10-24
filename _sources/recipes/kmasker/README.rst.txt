:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmasker'
.. highlight: bash

kmasker
=======

.. conda:recipe:: kmasker
   :replaces_section_title:

   A tool for masking and exploring of sequences from plant species.

   :homepage: https://kmasker.ipk-gatersleben.de/
   :developer docs: https://github.com/tschmutzer/kmasker
   :license: GPL3
   :recipe: /`kmasker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmasker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmasker/meta.yaml>`_
   :links: biotools: :biotools:`kmasker`

   


.. conda:package:: kmasker

   |downloads_kmasker| |docker_kmasker|

   :versions: 1.1.1-0, 1.1.0-0
   
   :depends blast: 
   :depends coreutils: >=8.15
   :depends ea-utils: 
   :depends gffread: 
   :depends jellyfish: 2.2.10.*
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends python: >=3.6,<3.7.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends which: >=2.21
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kmasker

   and update with::

      conda update kmasker

   or use the docker container::

      docker pull quay.io/biocontainers/kmasker:<tag>

   (see `kmasker/tags`_ for valid values for ``<tag>``)


.. |downloads_kmasker| image:: https://img.shields.io/conda/dn/bioconda/kmasker.svg?style=flat
   :target: https://anaconda.org/bioconda/kmasker
   :alt:   (downloads)
.. |docker_kmasker| image:: https://quay.io/repository/biocontainers/kmasker/status
   :target: https://quay.io/repository/biocontainers/kmasker
.. _`kmasker/tags`: https://quay.io/repository/biocontainers/kmasker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmasker/README.html