:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapsearch'
.. highlight: bash

rapsearch
=========

.. conda:recipe:: rapsearch
   :replaces_section_title:
   :noindex:

   RAPSearch2 is a tool for fast protein similarity searches.

   :homepage: http://omics.informatics.indiana.edu/mg/RAPSearch2/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`rapsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapsearch/meta.yaml>`_
   :links: biotools: :biotools:`rapsearch`

   


.. conda:package:: rapsearch

   |downloads_rapsearch| |docker_rapsearch|

   :versions:
      
      

      ``2.24-5``,  ``2.24-4``,  ``2.24-3``,  ``2.24-2``,  ``2.24-1``,  ``2.24-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rapsearch

   and update with::

      conda update rapsearch

   or use the docker container::

      docker pull quay.io/biocontainers/rapsearch:<tag>

   (see `rapsearch/tags`_ for valid values for ``<tag>``)


.. |downloads_rapsearch| image:: https://img.shields.io/conda/dn/bioconda/rapsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/rapsearch
   :alt:   (downloads)
.. |docker_rapsearch| image:: https://quay.io/repository/biocontainers/rapsearch/status
   :target: https://quay.io/repository/biocontainers/rapsearch
.. _`rapsearch/tags`: https://quay.io/repository/biocontainers/rapsearch?tab=tags


.. raw:: html

    <script>
        var package = "rapsearch";
        var versions = ["2.24","2.24","2.24","2.24","2.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapsearch/README.html