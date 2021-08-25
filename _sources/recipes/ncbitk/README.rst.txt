:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbitk'
.. highlight: bash

ncbitk
======

.. conda:recipe:: ncbitk
   :replaces_section_title:
   :noindex:

   A tool kit for accessing NCBI\'s GenBank

   :homepage: https://github.com/andrewsanchez/NCBITK
   :license: MIT / MIT License
   :recipe: /`ncbitk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbitk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbitk/meta.yaml>`_

   


.. conda:package:: ncbitk

   |downloads_ncbitk| |docker_ncbitk|

   :versions:
      
      

      ``1.0a17-0``

      

   
   :depends biopython: ``>=1.68``
   :depends click: 
   :depends numpy: ``>=1.12.0``
   :depends pandas: ``>=0.19.2``
   :depends python: ``>=3``
   :depends python-dateutil: ``>=2.6.0``
   :depends pytz: ``>=2016.10``
   :depends six: ``>=1.10.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncbitk

   and update with::

      conda update ncbitk

   or use the docker container::

      docker pull quay.io/biocontainers/ncbitk:<tag>

   (see `ncbitk/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbitk| image:: https://img.shields.io/conda/dn/bioconda/ncbitk.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbitk
   :alt:   (downloads)
.. |docker_ncbitk| image:: https://quay.io/repository/biocontainers/ncbitk/status
   :target: https://quay.io/repository/biocontainers/ncbitk
.. _`ncbitk/tags`: https://quay.io/repository/biocontainers/ncbitk?tab=tags


.. raw:: html

    <script>
        var package = "ncbitk";
        var versions = ["1.0a17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbitk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbitk/README.html