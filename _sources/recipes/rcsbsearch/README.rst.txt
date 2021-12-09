:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rcsbsearch'
.. highlight: bash

rcsbsearch
==========

.. conda:recipe:: rcsbsearch
   :replaces_section_title:
   :noindex:

   Access the RCSB Search API

   :homepage: https://github.com/sbliven/rcsbsearch
   :documentation: https://rcsbsearch.readthedocs.io/en/latest/
   
   :license: BSD / BSD
   :recipe: /`rcsbsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcsbsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcsbsearch/meta.yaml>`_

   


.. conda:package:: rcsbsearch

   |downloads_rcsbsearch| |docker_rcsbsearch|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rcsbsearch

   and update with::

      conda update rcsbsearch

   or use the docker container::

      docker pull quay.io/biocontainers/rcsbsearch:<tag>

   (see `rcsbsearch/tags`_ for valid values for ``<tag>``)


.. |downloads_rcsbsearch| image:: https://img.shields.io/conda/dn/bioconda/rcsbsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/rcsbsearch
   :alt:   (downloads)
.. |docker_rcsbsearch| image:: https://quay.io/repository/biocontainers/rcsbsearch/status
   :target: https://quay.io/repository/biocontainers/rcsbsearch
.. _`rcsbsearch/tags`: https://quay.io/repository/biocontainers/rcsbsearch?tab=tags


.. raw:: html

    <script>
        var package = "rcsbsearch";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rcsbsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rcsbsearch/README.html