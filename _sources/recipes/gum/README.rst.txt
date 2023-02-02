:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gum'
.. highlight: bash

gum
===

.. conda:recipe:: gum
   :replaces_section_title:
   :noindex:

   A header\-only library for representation of sequence graphs

   :homepage: https://github.com/cartoonist/gum
   :license: MIT / MIT
   :recipe: /`gum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gum/meta.yaml>`_

   This library provides fast\, efficient\, and versatile data structures for
   representing sequence graphs and mainly developed for PSI library.



.. conda:package:: gum

   |downloads_gum| |docker_gum|

   :versions:
      
      

      ``1.1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gum

   and update with::

      conda update gum

   or use the docker container::

      docker pull quay.io/biocontainers/gum:<tag>

   (see `gum/tags`_ for valid values for ``<tag>``)


.. |downloads_gum| image:: https://img.shields.io/conda/dn/bioconda/gum.svg?style=flat
   :target: https://anaconda.org/bioconda/gum
   :alt:   (downloads)
.. |docker_gum| image:: https://quay.io/repository/biocontainers/gum/status
   :target: https://quay.io/repository/biocontainers/gum
.. _`gum/tags`: https://quay.io/repository/biocontainers/gum?tab=tags


.. raw:: html

    <script>
        var package = "gum";
        var versions = ["1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gum/README.html