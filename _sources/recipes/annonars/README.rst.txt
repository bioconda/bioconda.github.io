:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'annonars'
.. highlight: bash

annonars
========

.. conda:recipe:: annonars
   :replaces_section_title:
   :noindex:

   Genome annotation based on Rust and RocksDB.


   :homepage: https://github.com/bihealth/annona-rs
   :license: Apache-2.0
   :recipe: /`annonars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annonars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annonars/meta.yaml>`_

   


.. conda:package:: annonars

   |downloads_annonars| |docker_annonars|

   :versions:
      
      

      ``0.5.1-0``,  ``0.5.0-0``,  ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libsqlite: ``>=3.42.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openssl: ``>=1.1.1t,<1.1.2a``
   :depends sqlite: ``>=3.42.0,<4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install annonars

   and update with::

      conda update annonars

   or use the docker container::

      docker pull quay.io/biocontainers/annonars:<tag>

   (see `annonars/tags`_ for valid values for ``<tag>``)


.. |downloads_annonars| image:: https://img.shields.io/conda/dn/bioconda/annonars.svg?style=flat
   :target: https://anaconda.org/bioconda/annonars
   :alt:   (downloads)
.. |docker_annonars| image:: https://quay.io/repository/biocontainers/annonars/status
   :target: https://quay.io/repository/biocontainers/annonars
.. _`annonars/tags`: https://quay.io/repository/biocontainers/annonars?tab=tags


.. raw:: html

    <script>
        var package = "annonars";
        var versions = ["0.5.1","0.5.0","0.3.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/annonars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/annonars/README.html