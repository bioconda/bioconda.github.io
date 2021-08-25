:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sciphi'
.. highlight: bash

sciphi
======

.. conda:recipe:: sciphi
   :replaces_section_title:
   :noindex:

   Single\-cell mutation identification via phylogenetic inference

   :homepage: https://github.com/cbg-ethz/SCIPhI
   :license: GNU GENERAL PUBLIC LICENSE Version 3 for SCIPhI and Boost Software License - Version 1.0 for dlib (as an upstream project)
   :recipe: /`sciphi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sciphi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sciphi/meta.yaml>`_

   


.. conda:package:: sciphi

   |downloads_sciphi| |docker_sciphi|

   :versions:
      
      

      ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.5-0``,  ``0.1.4-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sciphi

   and update with::

      conda update sciphi

   or use the docker container::

      docker pull quay.io/biocontainers/sciphi:<tag>

   (see `sciphi/tags`_ for valid values for ``<tag>``)


.. |downloads_sciphi| image:: https://img.shields.io/conda/dn/bioconda/sciphi.svg?style=flat
   :target: https://anaconda.org/bioconda/sciphi
   :alt:   (downloads)
.. |docker_sciphi| image:: https://quay.io/repository/biocontainers/sciphi/status
   :target: https://quay.io/repository/biocontainers/sciphi
.. _`sciphi/tags`: https://quay.io/repository/biocontainers/sciphi?tab=tags


.. raw:: html

    <script>
        var package = "sciphi";
        var versions = ["0.1.7","0.1.7","0.1.5","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sciphi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sciphi/README.html