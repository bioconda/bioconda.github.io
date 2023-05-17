:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mupbwt'
.. highlight: bash

mupbwt
======

.. conda:recipe:: mupbwt
   :replaces_section_title:
   :noindex:

   A light pbwt\-based index

   :homepage: https://github.com/dlcgold/muPBWT
   :license: GPL-3.0-or-later
   :recipe: /`mupbwt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mupbwt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mupbwt/meta.yaml>`_
   :links: biotools: :biotools:`mupbwt`

   


.. conda:package:: mupbwt

   |downloads_mupbwt| |docker_mupbwt|

   :versions:
      
      

      ``0.1.2-2``,  ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mupbwt

   and update with::

      conda update mupbwt

   or use the docker container::

      docker pull quay.io/biocontainers/mupbwt:<tag>

   (see `mupbwt/tags`_ for valid values for ``<tag>``)


.. |downloads_mupbwt| image:: https://img.shields.io/conda/dn/bioconda/mupbwt.svg?style=flat
   :target: https://anaconda.org/bioconda/mupbwt
   :alt:   (downloads)
.. |docker_mupbwt| image:: https://quay.io/repository/biocontainers/mupbwt/status
   :target: https://quay.io/repository/biocontainers/mupbwt
.. _`mupbwt/tags`: https://quay.io/repository/biocontainers/mupbwt?tab=tags


.. raw:: html

    <script>
        var package = "mupbwt";
        var versions = ["0.1.2","0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mupbwt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mupbwt/README.html