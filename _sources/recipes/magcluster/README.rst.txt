:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magcluster'
.. highlight: bash

magcluster
==========

.. conda:recipe:: magcluster
   :replaces_section_title:
   :noindex:

   Magnetosome gene cluster annotation\, screening and mapping tool

   :homepage: https://github.com/runjiaji/magcluster
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`magcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magcluster/meta.yaml>`_

   


.. conda:package:: magcluster

   |downloads_magcluster| |docker_magcluster|

   :versions:
      
      

      ``0.1.6-0``

      

   
   :depends blast: 
   :depends clinker-py: 
   :depends pandas: 
   :depends prokka: 
   :depends python: ``>=3.6``
   :depends tbl2asn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install magcluster

   and update with::

      conda update magcluster

   or use the docker container::

      docker pull quay.io/biocontainers/magcluster:<tag>

   (see `magcluster/tags`_ for valid values for ``<tag>``)


.. |downloads_magcluster| image:: https://img.shields.io/conda/dn/bioconda/magcluster.svg?style=flat
   :target: https://anaconda.org/bioconda/magcluster
   :alt:   (downloads)
.. |docker_magcluster| image:: https://quay.io/repository/biocontainers/magcluster/status
   :target: https://quay.io/repository/biocontainers/magcluster
.. _`magcluster/tags`: https://quay.io/repository/biocontainers/magcluster?tab=tags


.. raw:: html

    <script>
        var package = "magcluster";
        var versions = ["0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magcluster/README.html