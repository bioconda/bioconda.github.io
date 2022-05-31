:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gget'
.. highlight: bash

gget
====

.. conda:recipe:: gget
   :replaces_section_title:
   :noindex:

   gget enables efficient querying of genomic databases

   :homepage: https://github.com/pachterlab/gget
   :license: BSD / BSD-2-Clause
   :recipe: /`gget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gget/meta.yaml>`_

   gget enables efficient querying of genomic databases\, such as Ensembl\, UniProt\, 
   NCBI\, directly into a Python or terminal programming environment. It was 
   designed to support genomic data analysis.



.. conda:package:: gget

   |downloads_gget| |docker_gget|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.24-0``

      

   
   :depends beautifulsoup4: ``>=4.10.0``
   :depends ipython: 
   :depends matplotlib-base: 
   :depends mysql-connector-python: ``>=8.0.5``
   :depends numpy: ``>=1.17.2``
   :depends pandas: ``>=1.0.0``
   :depends python: ``>=3.6``
   :depends requests: ``>=2.22.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gget

   and update with::

      conda update gget

   or use the docker container::

      docker pull quay.io/biocontainers/gget:<tag>

   (see `gget/tags`_ for valid values for ``<tag>``)


.. |downloads_gget| image:: https://img.shields.io/conda/dn/bioconda/gget.svg?style=flat
   :target: https://anaconda.org/bioconda/gget
   :alt:   (downloads)
.. |docker_gget| image:: https://quay.io/repository/biocontainers/gget/status
   :target: https://quay.io/repository/biocontainers/gget
.. _`gget/tags`: https://quay.io/repository/biocontainers/gget?tab=tags


.. raw:: html

    <script>
        var package = "gget";
        var versions = ["0.1.1","0.1.0","0.0.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gget/README.html