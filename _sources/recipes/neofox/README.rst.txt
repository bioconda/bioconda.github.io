:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neofox'
.. highlight: bash

neofox
======

.. conda:recipe:: neofox
   :replaces_section_title:
   :noindex:

   Annotation of mutated peptide sequences \(mps\) with published or novel potential neo\-epitope descriptors

   :homepage: https://github.com/tron-bioinformatics/neofox
   :documentation: https://neofox.readthedocs.io/
   
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`neofox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neofox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neofox/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab344`

   


.. conda:package:: neofox

   |downloads_neofox| |docker_neofox|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.6.4-0``

      

   
   :depends betterproto: ``>=1.2.5,<1.3.0``
   :depends bioconductor-biostrings: 
   :depends biopython: ``1.76``
   :depends blast: ``2.10.1``
   :depends dask: ``>=2021.10.0``
   :depends distributed: ``>=2021.10.0``
   :depends faker: ``>=6.6.2,<7.0.0``
   :depends logzero: ``>=1.5.0``
   :depends mock: ``>=4.0.3,<5.0.0``
   :depends numpy: ``>=1.21``
   :depends orjson: ``>=3.5.2,<4.0.0``
   :depends pandas: ``>=1.1.5``
   :depends pysam: ``>=0.19.1,<0.20.0``
   :depends python: ``>=3.7,<=3.8``
   :depends python-dotenv: ``>=0.12.0,<0.13.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-caret: 
   :depends r-doparallel: 
   :depends r-gbm: 
   :depends r-ggplot2: 
   :depends r-lattice: 
   :depends r-peptides: 
   :depends scikit-learn: ``>=0.22.1,<0.23.0``
   :depends scipy: ``>=1.5.4``
   :depends xmltodict: ``>=0.12.0,<0.13.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install neofox

   and update with::

      conda update neofox

   or use the docker container::

      docker pull quay.io/biocontainers/neofox:<tag>

   (see `neofox/tags`_ for valid values for ``<tag>``)


.. |downloads_neofox| image:: https://img.shields.io/conda/dn/bioconda/neofox.svg?style=flat
   :target: https://anaconda.org/bioconda/neofox
   :alt:   (downloads)
.. |docker_neofox| image:: https://quay.io/repository/biocontainers/neofox/status
   :target: https://quay.io/repository/biocontainers/neofox
.. _`neofox/tags`: https://quay.io/repository/biocontainers/neofox?tab=tags


.. raw:: html

    <script>
        var package = "neofox";
        var versions = ["1.0.2","1.0.1","1.0.0","0.6.4"];
    </script>





Notes
-----
NeoFox has some required and optional third party dependencies that have a non commercial use license. These dependencies can be installed following the guidelines here https\:\/\/neofox.readthedocs.io\/en\/latest\/02\_installation.html\#step\-by\-step\-guide\-without\-docker. Furthermore\, NeoFox requires to install some reference data\, the installation process is described here https\:\/\/neofox.readthedocs.io\/en\/latest\/02\_installation.html\#configuration\-of\-the\-reference\-folder


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neofox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neofox/README.html