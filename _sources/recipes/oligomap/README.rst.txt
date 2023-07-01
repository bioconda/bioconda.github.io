:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oligomap'
.. highlight: bash

oligomap
========

.. conda:recipe:: oligomap
   :replaces_section_title:
   :noindex:

   Oligomap is a program for fast identification of nearly\-perfect matches of small RNAs in sequence databases.

   :homepage: https://github.com/zavolanlab/oligomap
   :license: GNU Affero General Public License v3.0
   :recipe: /`oligomap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligomap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligomap/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.ymeth.2007.10.002`

   


.. conda:package:: oligomap

   |downloads_oligomap| |docker_oligomap|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install oligomap

   and update with::

      conda update oligomap

   or use the docker container::

      docker pull quay.io/biocontainers/oligomap:<tag>

   (see `oligomap/tags`_ for valid values for ``<tag>``)


.. |downloads_oligomap| image:: https://img.shields.io/conda/dn/bioconda/oligomap.svg?style=flat
   :target: https://anaconda.org/bioconda/oligomap
   :alt:   (downloads)
.. |docker_oligomap| image:: https://quay.io/repository/biocontainers/oligomap/status
   :target: https://quay.io/repository/biocontainers/oligomap
.. _`oligomap/tags`: https://quay.io/repository/biocontainers/oligomap?tab=tags


.. raw:: html

    <script>
        var package = "oligomap";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oligomap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oligomap/README.html