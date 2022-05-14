:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cogtriangles'
.. highlight: bash

cogtriangles
============

.. conda:recipe:: cogtriangles
   :replaces_section_title:
   :noindex:

   low\-polynomial algorithm for assembling clusters of orthologous groups from intergenomic symmetric best matches

   :homepage: https://ftp.ncbi.nih.gov/pub/wolf/COGs/COGsoft/
   :license: Public Domain
   :recipe: /`cogtriangles <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogtriangles>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cogtriangles/meta.yaml>`_
   :links: biotools: :biotools:`cogtriangles`, doi: :doi:`10.1093/bioinformatics/btq229`

   


.. conda:package:: cogtriangles

   |downloads_cogtriangles| |docker_cogtriangles|

   :versions:
      
      

      ``2012.04-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cogtriangles

   and update with::

      conda update cogtriangles

   or use the docker container::

      docker pull quay.io/biocontainers/cogtriangles:<tag>

   (see `cogtriangles/tags`_ for valid values for ``<tag>``)


.. |downloads_cogtriangles| image:: https://img.shields.io/conda/dn/bioconda/cogtriangles.svg?style=flat
   :target: https://anaconda.org/bioconda/cogtriangles
   :alt:   (downloads)
.. |docker_cogtriangles| image:: https://quay.io/repository/biocontainers/cogtriangles/status
   :target: https://quay.io/repository/biocontainers/cogtriangles
.. _`cogtriangles/tags`: https://quay.io/repository/biocontainers/cogtriangles?tab=tags


.. raw:: html

    <script>
        var package = "cogtriangles";
        var versions = ["2012.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cogtriangles/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cogtriangles/README.html