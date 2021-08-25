:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'popera'
.. highlight: bash

popera
======

.. conda:recipe:: popera
   :replaces_section_title:
   :noindex:

   A software for DNase I hypersensitive sites identification.

   :homepage: https://github.com/forrestzhang/Popera
   :license: MIT
   :recipe: /`popera <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popera>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/popera/meta.yaml>`_
   :links: biotools: :biotools:`popera`

   


.. conda:package:: popera

   |downloads_popera| |docker_popera|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends numpy: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends samtools: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install popera

   and update with::

      conda update popera

   or use the docker container::

      docker pull quay.io/biocontainers/popera:<tag>

   (see `popera/tags`_ for valid values for ``<tag>``)


.. |downloads_popera| image:: https://img.shields.io/conda/dn/bioconda/popera.svg?style=flat
   :target: https://anaconda.org/bioconda/popera
   :alt:   (downloads)
.. |docker_popera| image:: https://quay.io/repository/biocontainers/popera/status
   :target: https://quay.io/repository/biocontainers/popera
.. _`popera/tags`: https://quay.io/repository/biocontainers/popera?tab=tags


.. raw:: html

    <script>
        var package = "popera";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/popera/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/popera/README.html