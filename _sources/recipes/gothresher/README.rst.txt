:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gothresher'
.. highlight: bash

gothresher
==========

.. conda:recipe:: gothresher
   :replaces_section_title:
   :noindex:

   remove function bias from GAF files

   :homepage: https://github.com/FriedbergLab/GOThresher
   :license: GPL3 / GPL-3.0-only
   :recipe: /`gothresher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gothresher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gothresher/meta.yaml>`_

   


.. conda:package:: gothresher

   |downloads_gothresher| |docker_gothresher|

   :versions:
      
      

      ``1.0.24-0``,  ``1.0.21-0``

      

   
   :depends biopython: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends python: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gothresher

   and update with::

      conda update gothresher

   or use the docker container::

      docker pull quay.io/biocontainers/gothresher:<tag>

   (see `gothresher/tags`_ for valid values for ``<tag>``)


.. |downloads_gothresher| image:: https://img.shields.io/conda/dn/bioconda/gothresher.svg?style=flat
   :target: https://anaconda.org/bioconda/gothresher
   :alt:   (downloads)
.. |docker_gothresher| image:: https://quay.io/repository/biocontainers/gothresher/status
   :target: https://quay.io/repository/biocontainers/gothresher
.. _`gothresher/tags`: https://quay.io/repository/biocontainers/gothresher?tab=tags


.. raw:: html

    <script>
        var package = "gothresher";
        var versions = ["1.0.24","1.0.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gothresher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gothresher/README.html