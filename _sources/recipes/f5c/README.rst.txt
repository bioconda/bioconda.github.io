:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'f5c'
.. highlight: bash

f5c
===

.. conda:recipe:: f5c
   :replaces_section_title:
   :noindex:

   An optimised re\-implementation of the call\-methylation and eventalign modules in Nanopolish.

   :homepage: https://github.com/hasindu2008/f5c
   :license: MIT
   :recipe: /`f5c <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/f5c>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/f5c/meta.yaml>`_

   


.. conda:package:: f5c

   |downloads_f5c| |docker_f5c|

   :versions:
      
      

      ``0.8-0``,  ``0.7-0``,  ``0.6-2``,  ``0.6-1``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``

      

   
   :depends hdf5: ``>=1.10.6,<1.10.7.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install f5c

   and update with::

      conda update f5c

   or use the docker container::

      docker pull quay.io/biocontainers/f5c:<tag>

   (see `f5c/tags`_ for valid values for ``<tag>``)


.. |downloads_f5c| image:: https://img.shields.io/conda/dn/bioconda/f5c.svg?style=flat
   :target: https://anaconda.org/bioconda/f5c
   :alt:   (downloads)
.. |docker_f5c| image:: https://quay.io/repository/biocontainers/f5c/status
   :target: https://quay.io/repository/biocontainers/f5c
.. _`f5c/tags`: https://quay.io/repository/biocontainers/f5c?tab=tags


.. raw:: html

    <script>
        var package = "f5c";
        var versions = ["0.8","0.7","0.6","0.6","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/f5c/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/f5c/README.html