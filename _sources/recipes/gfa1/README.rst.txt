:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfa1'
.. highlight: bash

gfa1
====

.. conda:recipe:: gfa1
   :replaces_section_title:
   :noindex:

   gfa1 toolkit

   :homepage: https://github.com/lh3/gfa1
   :license: GPL3
   :recipe: /`gfa1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfa1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfa1/meta.yaml>`_
   :links: biotools: :biotools:`gfa1`

   A command\-line tool as well as a library in C that 
   parses\, validates and transforms assembly graphs in
   a dialect of the GFA1 format.



.. conda:package:: gfa1

   |downloads_gfa1| |docker_gfa1|

   :versions:
      
      

      ``0.53.alpha-2``,  ``0.53.alpha-1``,  ``0.53.alpha-0``

      

   
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gfa1

   and update with::

      conda update gfa1

   or use the docker container::

      docker pull quay.io/biocontainers/gfa1:<tag>

   (see `gfa1/tags`_ for valid values for ``<tag>``)


.. |downloads_gfa1| image:: https://img.shields.io/conda/dn/bioconda/gfa1.svg?style=flat
   :target: https://anaconda.org/bioconda/gfa1
   :alt:   (downloads)
.. |docker_gfa1| image:: https://quay.io/repository/biocontainers/gfa1/status
   :target: https://quay.io/repository/biocontainers/gfa1
.. _`gfa1/tags`: https://quay.io/repository/biocontainers/gfa1?tab=tags


.. raw:: html

    <script>
        var package = "gfa1";
        var versions = ["0.53.alpha","0.53.alpha","0.53.alpha"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfa1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfa1/README.html