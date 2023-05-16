:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mutscan'
.. highlight: bash

mutscan
=======

.. conda:recipe:: mutscan
   :replaces_section_title:
   :noindex:

   Detect and visualize target mutations by scanning FastQ files directly

   :homepage: https://github.com/OpenGene/genefuse
   :license: MIT
   :recipe: /`mutscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutscan/meta.yaml>`_

   


.. conda:package:: mutscan

   |downloads_mutscan| |docker_mutscan|

   :versions:
      
      

      ``1.14.0-4``,  ``1.14.0-3``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``

      

   
   :depends libcxx: ``>=15.0.7``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mutscan

   and update with::

      conda update mutscan

   or use the docker container::

      docker pull quay.io/biocontainers/mutscan:<tag>

   (see `mutscan/tags`_ for valid values for ``<tag>``)


.. |downloads_mutscan| image:: https://img.shields.io/conda/dn/bioconda/mutscan.svg?style=flat
   :target: https://anaconda.org/bioconda/mutscan
   :alt:   (downloads)
.. |docker_mutscan| image:: https://quay.io/repository/biocontainers/mutscan/status
   :target: https://quay.io/repository/biocontainers/mutscan
.. _`mutscan/tags`: https://quay.io/repository/biocontainers/mutscan?tab=tags


.. raw:: html

    <script>
        var package = "mutscan";
        var versions = ["1.14.0","1.14.0","1.14.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mutscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mutscan/README.html