:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krakenuniq'
.. highlight: bash

krakenuniq
==========

.. conda:recipe:: krakenuniq
   :replaces_section_title:

   Metagenomics classifier with unique k\-mer counting for more specific results

   :homepage: https://github.com/fbreitwieser/krakenuniq
   :license: GPLv3
   :recipe: /`krakenuniq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakenuniq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakenuniq/meta.yaml>`_
   :links: biotools: :biotools:`krakenhll`

   


.. conda:package:: krakenuniq

   |downloads_krakenuniq| |docker_krakenuniq|

   :versions: 0.5.8-0, 0.5.7-0, 0.5.6-0, 0.5.5-0, 0.5.3-0, 0.5.2-0
   
   :depends jellyfish: 1.*
   :depends libcxx: >=4.0.1
   :depends llvm-openmp: 
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-libwww-perl: 
   :depends perl-lwp-protocol-https: 
   :depends rsync: 
   :depends wget: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install krakenuniq

   and update with::

      conda update krakenuniq

   or use the docker container::

      docker pull quay.io/biocontainers/krakenuniq:<tag>

   (see `krakenuniq/tags`_ for valid values for ``<tag>``)


.. |downloads_krakenuniq| image:: https://img.shields.io/conda/dn/bioconda/krakenuniq.svg?style=flat
   :target: https://anaconda.org/bioconda/krakenuniq
   :alt:   (downloads)
.. |docker_krakenuniq| image:: https://quay.io/repository/biocontainers/krakenuniq/status
   :target: https://quay.io/repository/biocontainers/krakenuniq
.. _`krakenuniq/tags`: https://quay.io/repository/biocontainers/krakenuniq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krakenuniq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krakenuniq/README.html