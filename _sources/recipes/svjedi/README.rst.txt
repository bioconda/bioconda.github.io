:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svjedi'
.. highlight: bash

svjedi
======

.. conda:recipe:: svjedi
   :replaces_section_title:
   :noindex:

   SVJedi is a structural variation \(SV\) genotyper for long read data.

   :homepage: https://github.com/llecompte/SVJedi
   :license: AGPL-3.0-or-later
   :recipe: /`svjedi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svjedi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svjedi/meta.yaml>`_

   


.. conda:package:: svjedi

   |downloads_svjedi| |docker_svjedi|

   :versions:
      
      

      ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.0-0``

      

   
   :depends biopython: 
   :depends minimap2: 
   :depends numpy: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svjedi

   and update with::

      conda update svjedi

   or use the docker container::

      docker pull quay.io/biocontainers/svjedi:<tag>

   (see `svjedi/tags`_ for valid values for ``<tag>``)


.. |downloads_svjedi| image:: https://img.shields.io/conda/dn/bioconda/svjedi.svg?style=flat
   :target: https://anaconda.org/bioconda/svjedi
   :alt:   (downloads)
.. |docker_svjedi| image:: https://quay.io/repository/biocontainers/svjedi/status
   :target: https://quay.io/repository/biocontainers/svjedi
.. _`svjedi/tags`: https://quay.io/repository/biocontainers/svjedi?tab=tags


.. raw:: html

    <script>
        var package = "svjedi";
        var versions = ["1.1.5","1.1.4","1.1.4","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svjedi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svjedi/README.html