:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'purge_dups'
.. highlight: bash

purge_dups
==========

.. conda:recipe:: purge_dups
   :replaces_section_title:
   :noindex:

   Purge\_dups is a package used to purge haplotigs and overlaps in an assembly based on read depth

   :homepage: https://github.com/dfguan/purge_dups
   :license: MIT
   :recipe: /`purge_dups <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_dups>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/purge_dups/meta.yaml>`_

   


.. conda:package:: purge_dups

   |downloads_purge_dups| |docker_purge_dups|

   :versions:
      
      

      ``1.2.5-1``,  ``1.2.5-0``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends minimap2: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install purge_dups

   and update with::

      conda update purge_dups

   or use the docker container::

      docker pull quay.io/biocontainers/purge_dups:<tag>

   (see `purge_dups/tags`_ for valid values for ``<tag>``)


.. |downloads_purge_dups| image:: https://img.shields.io/conda/dn/bioconda/purge_dups.svg?style=flat
   :target: https://anaconda.org/bioconda/purge_dups
   :alt:   (downloads)
.. |docker_purge_dups| image:: https://quay.io/repository/biocontainers/purge_dups/status
   :target: https://quay.io/repository/biocontainers/purge_dups
.. _`purge_dups/tags`: https://quay.io/repository/biocontainers/purge_dups?tab=tags


.. raw:: html

    <script>
        var package = "purge_dups";
        var versions = ["1.2.5","1.2.5","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/purge_dups/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/purge_dups/README.html