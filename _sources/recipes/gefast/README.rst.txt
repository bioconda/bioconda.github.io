:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gefast'
.. highlight: bash

gefast
======

.. conda:recipe:: gefast
   :replaces_section_title:
   :noindex:

   Clustering tool using Swarm\'s clustering strategy and Pass\-Join\'s segment filter.

   :homepage: https://github.com/romueller/gefast
   :license: AGPL
   :recipe: /`gefast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gefast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gefast/meta.yaml>`_

   


.. conda:package:: gefast

   |downloads_gefast| |docker_gefast|

   :versions:
      
      

      ``2.0.1-1``,  ``2.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gefast

   and update with::

      conda update gefast

   or use the docker container::

      docker pull quay.io/biocontainers/gefast:<tag>

   (see `gefast/tags`_ for valid values for ``<tag>``)


.. |downloads_gefast| image:: https://img.shields.io/conda/dn/bioconda/gefast.svg?style=flat
   :target: https://anaconda.org/bioconda/gefast
   :alt:   (downloads)
.. |docker_gefast| image:: https://quay.io/repository/biocontainers/gefast/status
   :target: https://quay.io/repository/biocontainers/gefast
.. _`gefast/tags`: https://quay.io/repository/biocontainers/gefast?tab=tags


.. raw:: html

    <script>
        var package = "gefast";
        var versions = ["2.0.1","2.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gefast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gefast/README.html