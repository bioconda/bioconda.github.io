.. title:: Package Recipe 'blockclust'
.. highlight: bash


blockclust
==========

.. conda:recipe:: blockclust
   :replaces_section_title:

   Efficient clustering and classification of non\-coding RNAs from short read RNA\-seq profiles.

   :homepage: https://github.com/pavanvidem/blockclust
   :license: GPL
   :recipe: /`blockclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blockclust/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu270`

   


.. conda:package:: blockclust

   |downloads_blockclust| |docker_blockclust|

   :versions: 1.1.0

   :depends: :conda:package:`eden` >=1.1 :conda:package:`gnu-wget`  :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`mcl` >=14.137 :conda:package:`pysam` >=0.15.0 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-dendextend` >=1.8.0 :conda:package:`scikit-learn` >=0.20.0 

   :required~by: |required_by_blockclust|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blockclust

   and update with::

      conda update blockclust

   or use the docker container::

      docker pull quay.io/repository/biocontainers/blockclust


.. |required_by_blockclust| conda:required_by:: blockclust
.. |downloads_blockclust| image:: https://img.shields.io/conda/dn/bioconda/blockclust.svg?style=flat
   :alt:   (downloads)
.. |docker_blockclust| image:: https://quay.io/repository/biocontainers/blockclust/status
   :target: https://quay.io/repository/biocontainers/blockclust







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blockclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blockclust/README.html

