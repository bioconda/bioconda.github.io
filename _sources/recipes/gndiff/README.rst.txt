:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gndiff'
.. highlight: bash

gndiff
======

.. conda:recipe:: gndiff
   :replaces_section_title:
   :noindex:

   GNdiff compares scientific names from two files

   :homepage: https://github.com/gnames/gndiff
   :license: MIT
   :recipe: /`gndiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gndiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gndiff/meta.yaml>`_
   :links: doi: :doi:`https://doi.org/10.5281/zenodo.5111561`

   


.. conda:package:: gndiff

   |downloads_gndiff| |docker_gndiff|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gndiff

   and update with::

      conda update gndiff

   or use the docker container::

      docker pull quay.io/biocontainers/gndiff:<tag>

   (see `gndiff/tags`_ for valid values for ``<tag>``)


.. |downloads_gndiff| image:: https://img.shields.io/conda/dn/bioconda/gndiff.svg?style=flat
   :target: https://anaconda.org/bioconda/gndiff
   :alt:   (downloads)
.. |docker_gndiff| image:: https://quay.io/repository/biocontainers/gndiff/status
   :target: https://quay.io/repository/biocontainers/gndiff
.. _`gndiff/tags`: https://quay.io/repository/biocontainers/gndiff?tab=tags


.. raw:: html

    <script>
        var package = "gndiff";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gndiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gndiff/README.html