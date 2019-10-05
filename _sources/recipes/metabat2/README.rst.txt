:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metabat2'
.. highlight: bash

metabat2
========

.. conda:recipe:: metabat2
   :replaces_section_title:

   Metagenome binning

   :homepage: https://bitbucket.org/berkeleylab/metabat
   :license: BSD-3-Clause-LBNL
   :recipe: /`metabat2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabat2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metabat2/meta.yaml>`_

   


.. conda:package:: metabat2

   |downloads_metabat2| |docker_metabat2|

   :versions: 2.14-0, 2.13-1, 2.13-0, 2.12.1-1, 2.12.1-0
   
   :depends htslib: >=1.9,<1.10.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends perl: >=5
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metabat2

   and update with::

      conda update metabat2

   or use the docker container::

      docker pull quay.io/biocontainers/metabat2:<tag>

   (see `metabat2/tags`_ for valid values for ``<tag>``)


.. |downloads_metabat2| image:: https://img.shields.io/conda/dn/bioconda/metabat2.svg?style=flat
   :target: https://anaconda.org/bioconda/metabat2
   :alt:   (downloads)
.. |docker_metabat2| image:: https://quay.io/repository/biocontainers/metabat2/status
   :target: https://quay.io/repository/biocontainers/metabat2
.. _`metabat2/tags`: https://quay.io/repository/biocontainers/metabat2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metabat2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metabat2/README.html