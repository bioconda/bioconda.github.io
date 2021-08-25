:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomeconstellation'
.. highlight: bash

genomeconstellation
===================

.. conda:recipe:: genomeconstellation
   :replaces_section_title:
   :noindex:

   Fast\, accurate and versatile k\-mer based classification system

   :homepage: https://bitbucket.org/berkeleylab/jgi-genomeconstellation
   :license: BSD
   :recipe: /`genomeconstellation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomeconstellation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomeconstellation/meta.yaml>`_
   :links: doi: :doi:`10.1101/812917`

   


.. conda:package:: genomeconstellation

   |downloads_genomeconstellation| |docker_genomeconstellation|

   :versions:
      
      

      ``0.21.1-1``,  ``0.21.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genomeconstellation

   and update with::

      conda update genomeconstellation

   or use the docker container::

      docker pull quay.io/biocontainers/genomeconstellation:<tag>

   (see `genomeconstellation/tags`_ for valid values for ``<tag>``)


.. |downloads_genomeconstellation| image:: https://img.shields.io/conda/dn/bioconda/genomeconstellation.svg?style=flat
   :target: https://anaconda.org/bioconda/genomeconstellation
   :alt:   (downloads)
.. |docker_genomeconstellation| image:: https://quay.io/repository/biocontainers/genomeconstellation/status
   :target: https://quay.io/repository/biocontainers/genomeconstellation
.. _`genomeconstellation/tags`: https://quay.io/repository/biocontainers/genomeconstellation?tab=tags


.. raw:: html

    <script>
        var package = "genomeconstellation";
        var versions = ["0.21.1","0.21.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomeconstellation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomeconstellation/README.html