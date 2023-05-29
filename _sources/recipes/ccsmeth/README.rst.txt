:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccsmeth'
.. highlight: bash

ccsmeth
=======

.. conda:recipe:: ccsmeth
   :replaces_section_title:
   :noindex:

   Detecting DNA methylation from PacBio CCS read

   :homepage: https://github.com/PengNi/ccsmeth
   :license: BSD / BSD-3-Clause-Clear license
   :recipe: /`ccsmeth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccsmeth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccsmeth/meta.yaml>`_

   


.. conda:package:: ccsmeth

   |downloads_ccsmeth| |docker_ccsmeth|

   :versions:
      
      

      ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.1-0``

      

   
   :depends bedtools: ``2.30.0.*``
   :depends numpy: ``>=1.20.0``
   :depends pbccs: ``>=6.4.0``
   :depends pbmm2: ``>=1.9.0``
   :depends pybedtools: ``>=0.8.1``
   :depends pysam: ``>=0.19.0``
   :depends pytabix: ``>=0.1``
   :depends python: ``>=3.8``
   :depends pytorch: ``>=1.2.0,<=1.11.0``
   :depends samtools: ``>=1.12``
   :depends scikit-learn: ``>=1.0.2``
   :depends setuptools: 
   :depends statsmodels: ``>=0.13.2``
   :depends tqdm: ``>=4.64.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ccsmeth

   and update with::

      conda update ccsmeth

   or use the docker container::

      docker pull quay.io/biocontainers/ccsmeth:<tag>

   (see `ccsmeth/tags`_ for valid values for ``<tag>``)


.. |downloads_ccsmeth| image:: https://img.shields.io/conda/dn/bioconda/ccsmeth.svg?style=flat
   :target: https://anaconda.org/bioconda/ccsmeth
   :alt:   (downloads)
.. |docker_ccsmeth| image:: https://quay.io/repository/biocontainers/ccsmeth/status
   :target: https://quay.io/repository/biocontainers/ccsmeth
.. _`ccsmeth/tags`: https://quay.io/repository/biocontainers/ccsmeth?tab=tags


.. raw:: html

    <script>
        var package = "ccsmeth";
        var versions = ["0.3.4","0.3.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccsmeth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccsmeth/README.html