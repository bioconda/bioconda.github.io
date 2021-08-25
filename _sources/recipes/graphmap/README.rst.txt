:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphmap'
.. highlight: bash

graphmap
========

.. conda:recipe:: graphmap
   :replaces_section_title:
   :noindex:

   A highly sensitive and accurate mapper for long\, error\-prone reads.

   :homepage: https://github.com/lbcb-sci/graphmap2
   :license: MIT
   :recipe: /`graphmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphmap/meta.yaml>`_

   


.. conda:package:: graphmap

   |downloads_graphmap| |docker_graphmap|

   :versions:
      
      

      ``0.6.3-1``,  ``0.6.3-0``,  ``0.5.2-2``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.4.0-0``,  ``0.3.1p1-1``,  ``0.3.1p1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graphmap

   and update with::

      conda update graphmap

   or use the docker container::

      docker pull quay.io/biocontainers/graphmap:<tag>

   (see `graphmap/tags`_ for valid values for ``<tag>``)


.. |downloads_graphmap| image:: https://img.shields.io/conda/dn/bioconda/graphmap.svg?style=flat
   :target: https://anaconda.org/bioconda/graphmap
   :alt:   (downloads)
.. |docker_graphmap| image:: https://quay.io/repository/biocontainers/graphmap/status
   :target: https://quay.io/repository/biocontainers/graphmap
.. _`graphmap/tags`: https://quay.io/repository/biocontainers/graphmap?tab=tags


.. raw:: html

    <script>
        var package = "graphmap";
        var versions = ["0.6.3","0.6.3","0.5.2","0.5.2","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphmap/README.html