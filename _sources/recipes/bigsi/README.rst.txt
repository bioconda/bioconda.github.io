:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigsi'
.. highlight: bash

bigsi
=====

.. conda:recipe:: bigsi
   :replaces_section_title:
   :noindex:

   BItsliced Genomic Signature Index \[BIGSI\]

   :homepage: https://github.com/Phelimb/BIGSI
   :license: MIT / LICENSE
   :recipe: /`bigsi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigsi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigsi/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-018-0010-1`

   


.. conda:package:: bigsi

   |downloads_bigsi| |docker_bigsi|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends biopython: 
   :depends bitarray: 
   :depends bsddb3: 
   :depends cython: 
   :depends hug: 
   :depends humanfriendly: 
   :depends libdb: 
   :depends mmh3: 
   :depends numpy: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :depends redis-py: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bigsi

   and update with::

      conda update bigsi

   or use the docker container::

      docker pull quay.io/biocontainers/bigsi:<tag>

   (see `bigsi/tags`_ for valid values for ``<tag>``)


.. |downloads_bigsi| image:: https://img.shields.io/conda/dn/bioconda/bigsi.svg?style=flat
   :target: https://anaconda.org/bioconda/bigsi
   :alt:   (downloads)
.. |docker_bigsi| image:: https://quay.io/repository/biocontainers/bigsi/status
   :target: https://quay.io/repository/biocontainers/bigsi
.. _`bigsi/tags`: https://quay.io/repository/biocontainers/bigsi?tab=tags


.. raw:: html

    <script>
        var package = "bigsi";
        var versions = ["0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigsi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigsi/README.html