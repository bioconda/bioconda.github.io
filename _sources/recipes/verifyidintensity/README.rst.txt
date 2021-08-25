:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'verifyidintensity'
.. highlight: bash

verifyidintensity
=================

.. conda:recipe:: verifyidintensity
   :replaces_section_title:
   :noindex:

   verifyIDintensity detects and estimates sample contamination using intensity data from Illumina genotyping arrays.

   :homepage: https://genome.sph.umich.edu/wiki/VerifyIDintensity
   :license: GPL3
   :recipe: /`verifyidintensity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifyidintensity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifyidintensity/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.ajhg.2012.09.004`

   


.. conda:package:: verifyidintensity

   |downloads_verifyidintensity| |docker_verifyidintensity|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends tclap: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install verifyidintensity

   and update with::

      conda update verifyidintensity

   or use the docker container::

      docker pull quay.io/biocontainers/verifyidintensity:<tag>

   (see `verifyidintensity/tags`_ for valid values for ``<tag>``)


.. |downloads_verifyidintensity| image:: https://img.shields.io/conda/dn/bioconda/verifyidintensity.svg?style=flat
   :target: https://anaconda.org/bioconda/verifyidintensity
   :alt:   (downloads)
.. |docker_verifyidintensity| image:: https://quay.io/repository/biocontainers/verifyidintensity/status
   :target: https://quay.io/repository/biocontainers/verifyidintensity
.. _`verifyidintensity/tags`: https://quay.io/repository/biocontainers/verifyidintensity?tab=tags


.. raw:: html

    <script>
        var package = "verifyidintensity";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verifyidintensity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verifyidintensity/README.html