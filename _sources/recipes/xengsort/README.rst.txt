:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xengsort'
.. highlight: bash

xengsort
========

.. conda:recipe:: xengsort
   :replaces_section_title:
   :noindex:

   A fast xenograft read sorter based on space\-efficient k\-mer hashing

   :homepage: https://gitlab.com/genomeinformatics/xengsort
   :license: MIT / MIT
   :recipe: /`xengsort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xengsort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xengsort/meta.yaml>`_
   :links: doi: :doi:`10.4230/LIPIcs.WABI.2020.4`

   


.. conda:package:: xengsort

   |downloads_xengsort| |docker_xengsort|

   :versions:
      
      

      ``1.5.0.3-0``

      

   
   :depends numba: ``>=0.56``
   :depends numpy: ``>=1.22``
   :depends pytest: 
   :depends python: ``>=3.10``
   :depends pyyaml: 
   :depends zarr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xengsort

   and update with::

      conda update xengsort

   or use the docker container::

      docker pull quay.io/biocontainers/xengsort:<tag>

   (see `xengsort/tags`_ for valid values for ``<tag>``)


.. |downloads_xengsort| image:: https://img.shields.io/conda/dn/bioconda/xengsort.svg?style=flat
   :target: https://anaconda.org/bioconda/xengsort
   :alt:   (downloads)
.. |docker_xengsort| image:: https://quay.io/repository/biocontainers/xengsort/status
   :target: https://quay.io/repository/biocontainers/xengsort
.. _`xengsort/tags`: https://quay.io/repository/biocontainers/xengsort?tab=tags


.. raw:: html

    <script>
        var package = "xengsort";
        var versions = ["1.5.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xengsort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xengsort/README.html