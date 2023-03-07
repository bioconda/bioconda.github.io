:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-datasets-pylib'
.. highlight: bash

ncbi-datasets-pylib
===================

.. conda:recipe:: ncbi-datasets-pylib
   :replaces_section_title:
   :noindex:

   Easily gather data from across NCBI databases

   :homepage: https://www.ncbi.nlm.nih.gov/datasets
   :license: Unlicense
   :recipe: /`ncbi-datasets-pylib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-datasets-pylib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-datasets-pylib/meta.yaml>`_

   


.. conda:package:: ncbi-datasets-pylib

   |downloads_ncbi-datasets-pylib| |docker_ncbi-datasets-pylib|

   :versions:
      
      

      ``14.13.0-0``

      

   
   :depends gffutils: ``0.10.*``
   :depends jinja2: 
   :depends jsonlines: ``3.0.*``
   :depends protobuf: ``3.20.*``
   :depends python: ``>=3.8``
   :depends python-dateutil: 
   :depends urllib3: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ncbi-datasets-pylib

   and update with::

      conda update ncbi-datasets-pylib

   or use the docker container::

      docker pull quay.io/biocontainers/ncbi-datasets-pylib:<tag>

   (see `ncbi-datasets-pylib/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-datasets-pylib| image:: https://img.shields.io/conda/dn/bioconda/ncbi-datasets-pylib.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-datasets-pylib
   :alt:   (downloads)
.. |docker_ncbi-datasets-pylib| image:: https://quay.io/repository/biocontainers/ncbi-datasets-pylib/status
   :target: https://quay.io/repository/biocontainers/ncbi-datasets-pylib
.. _`ncbi-datasets-pylib/tags`: https://quay.io/repository/biocontainers/ncbi-datasets-pylib?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-datasets-pylib";
        var versions = ["14.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-datasets-pylib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-datasets-pylib/README.html