:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orfanage'
.. highlight: bash

orfanage
========

.. conda:recipe:: orfanage
   :replaces_section_title:
   :noindex:

   Ultra\-efficient and sensitive method to search for ORFs in spliced genomes guided by reference annotation to maximize protein similarity within genes.

   :homepage: https://github.com/alevar/ORFanage
   :license: GPL-3.0-or-later
   :recipe: /`orfanage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfanage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfanage/meta.yaml>`_

   


.. conda:package:: orfanage

   |downloads_orfanage| |docker_orfanage|

   :versions:
      
      

      ``1.0.4_9f713d2-0``,  ``1.0.4-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libbigwig: ``>=0.4.7,<0.5.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends llvm-openmp: ``>=15.0.7``
   :depends llvm-openmp: ``>=16.0.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install orfanage

   and update with::

      conda update orfanage

   or use the docker container::

      docker pull quay.io/biocontainers/orfanage:<tag>

   (see `orfanage/tags`_ for valid values for ``<tag>``)


.. |downloads_orfanage| image:: https://img.shields.io/conda/dn/bioconda/orfanage.svg?style=flat
   :target: https://anaconda.org/bioconda/orfanage
   :alt:   (downloads)
.. |docker_orfanage| image:: https://quay.io/repository/biocontainers/orfanage/status
   :target: https://quay.io/repository/biocontainers/orfanage
.. _`orfanage/tags`: https://quay.io/repository/biocontainers/orfanage?tab=tags


.. raw:: html

    <script>
        var package = "orfanage";
        var versions = ["1.0.4_9f713d2","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orfanage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orfanage/README.html