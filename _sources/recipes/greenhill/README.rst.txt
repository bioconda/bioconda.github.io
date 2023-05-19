:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'greenhill'
.. highlight: bash

greenhill
=========

.. conda:recipe:: greenhill
   :replaces_section_title:
   :noindex:

   A de novo chromosomal\-level scaffolding and phasing tool using Hi\-C

   :homepage: https://github.com/ShunOuchi/GreenHill
   :license: GPL / GPL-3.0
   :recipe: /`greenhill <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/greenhill>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/greenhill/meta.yaml>`_

   


.. conda:package:: greenhill

   |downloads_greenhill| |docker_greenhill|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gzip: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends minimap2: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install greenhill

   and update with::

      conda update greenhill

   or use the docker container::

      docker pull quay.io/biocontainers/greenhill:<tag>

   (see `greenhill/tags`_ for valid values for ``<tag>``)


.. |downloads_greenhill| image:: https://img.shields.io/conda/dn/bioconda/greenhill.svg?style=flat
   :target: https://anaconda.org/bioconda/greenhill
   :alt:   (downloads)
.. |docker_greenhill| image:: https://quay.io/repository/biocontainers/greenhill/status
   :target: https://quay.io/repository/biocontainers/greenhill
.. _`greenhill/tags`: https://quay.io/repository/biocontainers/greenhill?tab=tags


.. raw:: html

    <script>
        var package = "greenhill";
        var versions = ["1.1.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/greenhill/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/greenhill/README.html