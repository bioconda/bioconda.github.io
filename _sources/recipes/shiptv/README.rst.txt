:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shiptv'
.. highlight: bash

shiptv
======

.. conda:recipe:: shiptv
   :replaces_section_title:
   :noindex:

   Generate a standalone HTML file with an interactive phylogenetic tree using PhyloCanvas

   :homepage: https://github.com/peterk87/shiptv
   :license: APACHE / Apache Software License
   :recipe: /`shiptv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiptv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiptv/meta.yaml>`_

   


.. conda:package:: shiptv

   |downloads_shiptv| |docker_shiptv|

   :versions:
      
      

      ``0.4.1-0``,  ``0.4.0-0``

      

   
   :depends biopython: 
   :depends click: 
   :depends jinja2: 
   :depends pandas: 
   :depends python: 
   :depends requests: 
   :depends rich: 
   :depends typer: ``>=0.3.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shiptv

   and update with::

      conda update shiptv

   or use the docker container::

      docker pull quay.io/biocontainers/shiptv:<tag>

   (see `shiptv/tags`_ for valid values for ``<tag>``)


.. |downloads_shiptv| image:: https://img.shields.io/conda/dn/bioconda/shiptv.svg?style=flat
   :target: https://anaconda.org/bioconda/shiptv
   :alt:   (downloads)
.. |docker_shiptv| image:: https://quay.io/repository/biocontainers/shiptv/status
   :target: https://quay.io/repository/biocontainers/shiptv
.. _`shiptv/tags`: https://quay.io/repository/biocontainers/shiptv?tab=tags


.. raw:: html

    <script>
        var package = "shiptv";
        var versions = ["0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shiptv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shiptv/README.html