:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unimap'
.. highlight: bash

unimap
======

.. conda:recipe:: unimap
   :replaces_section_title:
   :noindex:

   Unimap is a fork of minimap2 optimized for assembly\-to\-reference alignment.

   :homepage: https://github.com/lh3/unimap
   :license: MIT
   :recipe: /`unimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unimap/meta.yaml>`_

   Unimap is a fork of minimap2 optimized for assembly\-to\-reference alignment. It integrates the minigraph chaining algorithm and can align through long INDELs \(up to 100kb by default\) much faster than minimap2. Unimap is a better fit for resolving segmental duplications and is recommended over minimap2 for alignment between high\-quality assemblies.

   Unimap does not replace minimap2 for other types of alignment. It drops the support of multi\-part index and short\-read mapping. Its long\-read alignment is different from minimap2 but is not necessarily better. Unimap is more of a specialized minimap2 at the moment.


.. conda:package:: unimap

   |downloads_unimap| |docker_unimap|

   :versions:
      
      

      ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unimap

   and update with::

      conda update unimap

   or use the docker container::

      docker pull quay.io/biocontainers/unimap:<tag>

   (see `unimap/tags`_ for valid values for ``<tag>``)


.. |downloads_unimap| image:: https://img.shields.io/conda/dn/bioconda/unimap.svg?style=flat
   :target: https://anaconda.org/bioconda/unimap
   :alt:   (downloads)
.. |docker_unimap| image:: https://quay.io/repository/biocontainers/unimap/status
   :target: https://quay.io/repository/biocontainers/unimap
.. _`unimap/tags`: https://quay.io/repository/biocontainers/unimap?tab=tags


.. raw:: html

    <script>
        var package = "unimap";
        var versions = ["0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unimap/README.html