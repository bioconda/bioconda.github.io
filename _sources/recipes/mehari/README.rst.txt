:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mehari'
.. highlight: bash

mehari
======

.. conda:recipe:: mehari
   :replaces_section_title:
   :noindex:

   VEP\-like tool for sequence ontology and HGVS annotation of VCF files written in Rust.

   :homepage: https://github.com/bihealth/mehari
   :license: MIT
   :recipe: /`mehari <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mehari>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mehari/meta.yaml>`_

   


.. conda:package:: mehari

   |downloads_mehari| |docker_mehari|

   :versions:
      
      

      ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libsqlite: ``>=3.41.2,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends openssl: ``>=3.1.0,<4.0a0``
   :depends sqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mehari

   and update with::

      conda update mehari

   or use the docker container::

      docker pull quay.io/biocontainers/mehari:<tag>

   (see `mehari/tags`_ for valid values for ``<tag>``)


.. |downloads_mehari| image:: https://img.shields.io/conda/dn/bioconda/mehari.svg?style=flat
   :target: https://anaconda.org/bioconda/mehari
   :alt:   (downloads)
.. |docker_mehari| image:: https://quay.io/repository/biocontainers/mehari/status
   :target: https://quay.io/repository/biocontainers/mehari
.. _`mehari/tags`: https://quay.io/repository/biocontainers/mehari?tab=tags


.. raw:: html

    <script>
        var package = "mehari";
        var versions = ["0.3.1","0.3.1","0.3.1","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mehari/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mehari/README.html