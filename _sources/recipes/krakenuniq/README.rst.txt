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

   :versions: 0.5.7, 0.5.6, 0.5.5, 0.5.3, 0.5.2

   :depends: :conda:package:`jellyfish` 1.* :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-libwww-perl`  :conda:package:`perl-lwp-protocol-https`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_krakenuniq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install krakenuniq

   and update with::

      conda update krakenuniq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/krakenuniq


.. |required_by_krakenuniq| conda:required_by:: krakenuniq
.. |downloads_krakenuniq| image:: https://img.shields.io/conda/dn/bioconda/krakenuniq.svg?style=flat
   :alt:   (downloads)
.. |docker_krakenuniq| image:: https://quay.io/repository/biocontainers/krakenuniq/status
   :target: https://quay.io/repository/biocontainers/krakenuniq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krakenuniq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krakenuniq/README.html

