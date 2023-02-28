:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'safesim'
.. highlight: bash

safesim
=======

.. conda:recipe:: safesim
   :replaces_section_title:
   :noindex:

   SafeSeqS variant simulator

   :homepage: https://github.com/genetronhealth/safesim
   :license: APACHE / Apache-2.0
   :recipe: /`safesim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/safesim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/safesim/meta.yaml>`_
   :links: doi: :doi:`TODO-waiting-for-publication`

   


.. conda:package:: safesim

   |downloads_safesim| |docker_safesim|

   :versions:
      
      

      ``0.1.6.8d44580-0``,  ``0.1.5.f9a66db-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends fastq-tools: 
   :depends htslib: ``>=1.15.1,<1.16.0a0``
   :depends libcurl: ``>=7.83.1,<8.0a0``
   :depends libdeflate: ``>=1.10,<1.11.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends openssl: ``>=1.1.1q,<1.1.2a``
   :depends xz: ``>=5.2.6,<5.3.0a0``
   :depends zlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install safesim

   and update with::

      conda update safesim

   or use the docker container::

      docker pull quay.io/biocontainers/safesim:<tag>

   (see `safesim/tags`_ for valid values for ``<tag>``)


.. |downloads_safesim| image:: https://img.shields.io/conda/dn/bioconda/safesim.svg?style=flat
   :target: https://anaconda.org/bioconda/safesim
   :alt:   (downloads)
.. |docker_safesim| image:: https://quay.io/repository/biocontainers/safesim/status
   :target: https://quay.io/repository/biocontainers/safesim
.. _`safesim/tags`: https://quay.io/repository/biocontainers/safesim?tab=tags


.. raw:: html

    <script>
        var package = "safesim";
        var versions = ["0.1.6.8d44580","0.1.5.f9a66db"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/safesim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/safesim/README.html