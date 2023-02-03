:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haptools'
.. highlight: bash

haptools
========

.. conda:recipe:: haptools
   :replaces_section_title:
   :noindex:

   Ancestry and haplotype aware simulation of genotypes and phenotypes for complex trait analysis

   :homepage: https://github.com/cast-genomics/haptools
   :license: MIT
   :recipe: /`haptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haptools/meta.yaml>`_

   


.. conda:package:: haptools

   |downloads_haptools| |docker_haptools|

   :versions:
      
      

      ``0.1.2-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends click: ``>=8.0.3``
   :depends cyvcf2: ``>=0.30.14``
   :depends matplotlib-base: ``>=3.5.1``
   :depends numpy: ``>=1.20.0``
   :depends pysam: ``>=0.19.0``
   :depends python: ``>=3.7,<3.11``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haptools

   and update with::

      conda update haptools

   or use the docker container::

      docker pull quay.io/biocontainers/haptools:<tag>

   (see `haptools/tags`_ for valid values for ``<tag>``)


.. |downloads_haptools| image:: https://img.shields.io/conda/dn/bioconda/haptools.svg?style=flat
   :target: https://anaconda.org/bioconda/haptools
   :alt:   (downloads)
.. |docker_haptools| image:: https://quay.io/repository/biocontainers/haptools/status
   :target: https://quay.io/repository/biocontainers/haptools
.. _`haptools/tags`: https://quay.io/repository/biocontainers/haptools?tab=tags


.. raw:: html

    <script>
        var package = "haptools";
        var versions = ["0.1.2","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haptools/README.html