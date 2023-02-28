:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccat'
.. highlight: bash

ccat
====

.. conda:recipe:: ccat
   :replaces_section_title:
   :noindex:

   CCAT is a software package for the analysis of ChIP\-seq data with negative control.

   :homepage: http://cmb.gis.a-star.edu.sg/ChIPSeq/paperCCAT.htm
   :license: unknown
   :recipe: /`ccat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccat/meta.yaml>`_
   :links: biotools: :biotools:`CCAT`, doi: :doi:`10.1093/bioinformatics/btq128`, usegalaxy-eu: :usegalaxy-eu:`peakcalling_ccat`

   


.. conda:package:: ccat

   |downloads_ccat| |docker_ccat|

   :versions:
      
      

      ``3.0-5``,  ``3.0-4``,  ``3.0-3``,  ``3.0-2``,  ``3.0-1``,  ``3.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ccat

   and update with::

      conda update ccat

   or use the docker container::

      docker pull quay.io/biocontainers/ccat:<tag>

   (see `ccat/tags`_ for valid values for ``<tag>``)


.. |downloads_ccat| image:: https://img.shields.io/conda/dn/bioconda/ccat.svg?style=flat
   :target: https://anaconda.org/bioconda/ccat
   :alt:   (downloads)
.. |docker_ccat| image:: https://quay.io/repository/biocontainers/ccat/status
   :target: https://quay.io/repository/biocontainers/ccat
.. _`ccat/tags`: https://quay.io/repository/biocontainers/ccat?tab=tags


.. raw:: html

    <script>
        var package = "ccat";
        var versions = ["3.0","3.0","3.0","3.0","3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccat/README.html