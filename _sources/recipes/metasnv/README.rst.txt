.. title:: Package Recipe 'metasnv'
.. highlight: bash


metasnv
=======

.. conda:recipe:: metasnv
   :replaces_section_title:

   SNV calling software

   :homepage: http:// metasnv.embl.de
   :license: GPLv3
   :recipe: /`metasnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metasnv/meta.yaml>`_

   


.. conda:package:: metasnv

   |downloads_metasnv| |docker_metasnv|

   :versions: 1.0.3, 1.0.2

   :depends: :conda:package:`htslib` 1.7* :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_metasnv|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metasnv

   and update with::

      conda update metasnv

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metasnv


.. |required_by_metasnv| conda:required_by:: metasnv
.. |downloads_metasnv| image:: https://img.shields.io/conda/dn/bioconda/metasnv.svg?style=flat
   :alt:   (downloads)
.. |docker_metasnv| image:: https://quay.io/repository/biocontainers/metasnv/status
   :target: https://quay.io/repository/biocontainers/metasnv







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metasnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metasnv/README.html

