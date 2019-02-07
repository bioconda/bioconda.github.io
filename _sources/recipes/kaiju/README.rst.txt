.. title:: Package Recipe 'kaiju'
.. highlight: bash


kaiju
=====

.. conda:recipe:: kaiju
   :replaces_section_title:

   Fast and sensitive taxonomic classification for metagenomics

   :homepage: http://kaiju.binf.ku.dk/
   :license: GNU GPL v3
   :recipe: /`kaiju <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kaiju>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kaiju/meta.yaml>`_
   :links: biotools: :biotools:`kaiju`, doi: :doi:`10.1038/ncomms11257`

   


.. conda:package:: kaiju

   |downloads_kaiju| |docker_kaiju|

   :versions: 1.6.3, 1.6.2, 1.6.1, 1.5.0, 1.4.5, 1.4.4, 1.0

   :depends: :conda:package:`gnu-wget` >=1.16 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`perl`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_kaiju|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kaiju

   and update with::

      conda update kaiju

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kaiju


.. |required_by_kaiju| conda:required_by:: kaiju
.. |downloads_kaiju| image:: https://img.shields.io/conda/dn/bioconda/kaiju.svg?style=flat
   :alt:   (downloads)
.. |docker_kaiju| image:: https://quay.io/repository/biocontainers/kaiju/status
   :target: https://quay.io/repository/biocontainers/kaiju







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kaiju/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kaiju/README.html

