:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blockclust'
.. highlight: bash

blockclust
==========

.. conda:recipe:: blockclust
   :replaces_section_title:
   :noindex:

   Efficient clustering and classification of non\-coding RNAs from short read RNA\-seq profiles.

   :homepage: https://github.com/pavanvidem/blockclust
   :license: GPL
   :recipe: /`blockclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockclust/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu270`

   


.. conda:package:: blockclust

   |downloads_blockclust| |docker_blockclust|

   :versions:
      
      

      ``1.1.0-6``,  ``1.1.0-5``,  ``1.1.0-4``,  ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends cloudpickle: ``0.5.6.*``
   :depends eden: ``1.1.*``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends mcl: ``>=14.137``
   :depends pysam: ``>=0.15.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dendextend: ``>=1.8.0``
   :depends scikit-learn: ``>=0.20.0``
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blockclust

   and update with::

      conda update blockclust

   or use the docker container::

      docker pull quay.io/biocontainers/blockclust:<tag>

   (see `blockclust/tags`_ for valid values for ``<tag>``)


.. |downloads_blockclust| image:: https://img.shields.io/conda/dn/bioconda/blockclust.svg?style=flat
   :target: https://anaconda.org/bioconda/blockclust
   :alt:   (downloads)
.. |docker_blockclust| image:: https://quay.io/repository/biocontainers/blockclust/status
   :target: https://quay.io/repository/biocontainers/blockclust
.. _`blockclust/tags`: https://quay.io/repository/biocontainers/blockclust?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blockclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blockclust/README.html