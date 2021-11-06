:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'glimpse-bio'
.. highlight: bash

glimpse-bio
===========

.. conda:recipe:: glimpse-bio
   :replaces_section_title:
   :noindex:

   GLIMPSE is a phasing and imputation method for large\-scale low\-coverage sequencing studies.

   :homepage: https://odelaneau.github.io/GLIMPSE/
   :license: MIT
   :recipe: /`glimpse-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimpse-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glimpse-bio/meta.yaml>`_

   


.. conda:package:: glimpse-bio

   |downloads_glimpse-bio| |docker_glimpse-bio|

   :versions:
      
      

      ``1.1.1-0``,  ``v1.1.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends openssl: ``>=1.1.1l,<1.1.2a``
   :depends pthread-stubs: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install glimpse-bio

   and update with::

      conda update glimpse-bio

   or use the docker container::

      docker pull quay.io/biocontainers/glimpse-bio:<tag>

   (see `glimpse-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_glimpse-bio| image:: https://img.shields.io/conda/dn/bioconda/glimpse-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/glimpse-bio
   :alt:   (downloads)
.. |docker_glimpse-bio| image:: https://quay.io/repository/biocontainers/glimpse-bio/status
   :target: https://quay.io/repository/biocontainers/glimpse-bio
.. _`glimpse-bio/tags`: https://quay.io/repository/biocontainers/glimpse-bio?tab=tags


.. raw:: html

    <script>
        var package = "glimpse-bio";
        var versions = ["1.1.1","v1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/glimpse-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/glimpse-bio/README.html