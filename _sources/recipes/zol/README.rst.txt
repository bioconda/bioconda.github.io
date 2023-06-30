:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zol'
.. highlight: bash

zol
===

.. conda:recipe:: zol
   :replaces_section_title:
   :noindex:

   zol \(\& fai\)\: large\-scale targeted detection and evolutionary investigation of gene clusters.

   :homepage: https://github.com/Kalan-Lab/zol
   :license: BSD / BSD-3-Clause license
   :recipe: /`zol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zol>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zol/meta.yaml>`_

   


.. conda:package:: zol

   |downloads_zol| |docker_zol|

   :versions:
      
      

      ``1.3.1-0``,  ``1.2.8-0``,  ``1.2.7-0``

      

   
   :depends axel: 
   :depends biopython: ``1.79.*``
   :depends cd-hit: 
   :depends diamond: ``2.0.15.*``
   :depends fasttree: ``>=2.0.0``
   :depends gzip: 
   :depends hmmer: ``>=3.0.0``
   :depends hyphy: ``2.5.14.*``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends mcl: 
   :depends muscle: 
   :depends ncbi-genome-download: 
   :depends pal2nal: ``>=14.1``
   :depends pandas: ``>=2.0``
   :depends pomegranate: ``>0.13,<=0.14.8``
   :depends prodigal: 
   :depends pyhmmer: 
   :depends pyrodigal: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-base: 
   :depends r-cowplot: 
   :depends r-gggenes: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends scikit-learn: 
   :depends setuptools: 
   :depends skani: 
   :depends slclust: 
   :depends trimal: 
   :depends xlsxwriter: ``>=3.0.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install zol

   and update with::

      conda update zol

   or use the docker container::

      docker pull quay.io/biocontainers/zol:<tag>

   (see `zol/tags`_ for valid values for ``<tag>``)


.. |downloads_zol| image:: https://img.shields.io/conda/dn/bioconda/zol.svg?style=flat
   :target: https://anaconda.org/bioconda/zol
   :alt:   (downloads)
.. |docker_zol| image:: https://quay.io/repository/biocontainers/zol/status
   :target: https://quay.io/repository/biocontainers/zol
.. _`zol/tags`: https://quay.io/repository/biocontainers/zol?tab=tags


.. raw:: html

    <script>
        var package = "zol";
        var versions = ["1.3.1","1.2.8","1.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zol/README.html