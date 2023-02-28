:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'super_distance'
.. highlight: bash

super_distance
==============

.. conda:recipe:: super_distance
   :replaces_section_title:
   :noindex:

   Supertree method with distances

   :homepage: https://github.com/quadram-institute-bioscience/super_distance
   :license: GPLv3
   :recipe: /`super_distance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/super_distance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/super_distance/meta.yaml>`_
   :links: biotools: :biotools:`super_distance`

   


.. conda:package:: super_distance

   |downloads_super_distance| |docker_super_distance|

   :versions:
      
      

      ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``0.1-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install super_distance

   and update with::

      conda update super_distance

   or use the docker container::

      docker pull quay.io/biocontainers/super_distance:<tag>

   (see `super_distance/tags`_ for valid values for ``<tag>``)


.. |downloads_super_distance| image:: https://img.shields.io/conda/dn/bioconda/super_distance.svg?style=flat
   :target: https://anaconda.org/bioconda/super_distance
   :alt:   (downloads)
.. |docker_super_distance| image:: https://quay.io/repository/biocontainers/super_distance/status
   :target: https://quay.io/repository/biocontainers/super_distance
.. _`super_distance/tags`: https://quay.io/repository/biocontainers/super_distance?tab=tags


.. raw:: html

    <script>
        var package = "super_distance";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/super_distance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/super_distance/README.html