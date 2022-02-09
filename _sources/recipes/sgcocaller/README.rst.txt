:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sgcocaller'
.. highlight: bash

sgcocaller
==========

.. conda:recipe:: sgcocaller
   :replaces_section_title:
   :noindex:

   Personalized haplotype construction and crossover calling in single\-cell DNA sequenced gamete cells.

   :homepage: https://gitlab.svi.edu.au/biocellgen-public/sgcocaller
   :license: MIT
   :recipe: /`sgcocaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sgcocaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sgcocaller/meta.yaml>`_
   :links: biotools: :biotools:`sgcocaller`

   


.. conda:package:: sgcocaller

   |downloads_sgcocaller| |docker_sgcocaller|

   :versions:
      
      

      ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sgcocaller

   and update with::

      conda update sgcocaller

   or use the docker container::

      docker pull quay.io/biocontainers/sgcocaller:<tag>

   (see `sgcocaller/tags`_ for valid values for ``<tag>``)


.. |downloads_sgcocaller| image:: https://img.shields.io/conda/dn/bioconda/sgcocaller.svg?style=flat
   :target: https://anaconda.org/bioconda/sgcocaller
   :alt:   (downloads)
.. |docker_sgcocaller| image:: https://quay.io/repository/biocontainers/sgcocaller/status
   :target: https://quay.io/repository/biocontainers/sgcocaller
.. _`sgcocaller/tags`: https://quay.io/repository/biocontainers/sgcocaller?tab=tags


.. raw:: html

    <script>
        var package = "sgcocaller";
        var versions = ["0.3.7","0.3.7","0.3.6","0.3.6","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sgcocaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sgcocaller/README.html