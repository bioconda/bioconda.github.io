:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tepeaks'
.. highlight: bash

tepeaks
=======

.. conda:recipe:: tepeaks
   :replaces_section_title:
   :noindex:

   Package for including repetitive regions in peak calling from ChIP\-seq datasets.

   :homepage: http://hammelllab.labsites.cshl.edu/software/#TEpeaks
   :license: GPL3 / GPL3
   :recipe: /`tepeaks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tepeaks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tepeaks/meta.yaml>`_

   


.. conda:package:: tepeaks

   |downloads_tepeaks| |docker_tepeaks|

   :versions:
      
      

      ``0.1-3``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends ncurses: ``>=6.3,<7.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tepeaks

   and update with::

      conda update tepeaks

   or use the docker container::

      docker pull quay.io/biocontainers/tepeaks:<tag>

   (see `tepeaks/tags`_ for valid values for ``<tag>``)


.. |downloads_tepeaks| image:: https://img.shields.io/conda/dn/bioconda/tepeaks.svg?style=flat
   :target: https://anaconda.org/bioconda/tepeaks
   :alt:   (downloads)
.. |docker_tepeaks| image:: https://quay.io/repository/biocontainers/tepeaks/status
   :target: https://quay.io/repository/biocontainers/tepeaks
.. _`tepeaks/tags`: https://quay.io/repository/biocontainers/tepeaks?tab=tags


.. raw:: html

    <script>
        var package = "tepeaks";
        var versions = ["0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tepeaks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tepeaks/README.html