:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vsclust'
.. highlight: bash

vsclust
=======

.. conda:recipe:: vsclust
   :replaces_section_title:
   :noindex:

   Interactive tool for statistical testing\, data browsing and interactive visualizationc of quantitative omics data

   :homepage: https://bitbucket.org/veitveit/vsclust/src/master/
   :license: GPL / GPL (>=2)
   :recipe: /`vsclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsclust/meta.yaml>`_
   :links: biotools: :biotools:`vsclust`, doi: :doi:`10.1093/bioinformatics/bty224`

   VSClust is a web service \(shiny app\) and command\-line tool for statistical testing\, 
   clustering and interactive visualization of quantitative omics data. Its 
   variance\-sensitive clustering algorithm improves identification of co\-regulated 
   features in noisy data with replicates



.. conda:package:: vsclust

   |downloads_vsclust| |docker_vsclust|

   :versions:
      
      

      ``0.87-0``

      

   
   :depends bioconductor-clusterprofiler: 
   :depends bioconductor-limma: 
   :depends bioconductor-mfuzz: ``>=2.46.0``
   :depends bioconductor-qvalue: ``>=2.16.0``
   :depends bioconductor-rdavidwebservice: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libgfortran-ng: 
   :depends libgfortran4: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends r-base: ``>=3.6,<3.7.0a0``
   :depends r-data.table: ``>=1.12.8``
   :depends r-dt: 
   :depends r-matrixstats: ``>=0.56.0``
   :depends r-readxl: ``>=1.3.1``
   :depends r-shiny: ``>=1.4.0``
   :depends r-shinyjs: ``>=1.1``
   :depends r-shinythemes: ``>=1.1.2``
   :depends r-stringi: 
   :depends r-yaml: ``>=2.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vsclust

   and update with::

      conda update vsclust

   or use the docker container::

      docker pull quay.io/biocontainers/vsclust:<tag>

   (see `vsclust/tags`_ for valid values for ``<tag>``)


.. |downloads_vsclust| image:: https://img.shields.io/conda/dn/bioconda/vsclust.svg?style=flat
   :target: https://anaconda.org/bioconda/vsclust
   :alt:   (downloads)
.. |docker_vsclust| image:: https://quay.io/repository/biocontainers/vsclust/status
   :target: https://quay.io/repository/biocontainers/vsclust
.. _`vsclust/tags`: https://quay.io/repository/biocontainers/vsclust?tab=tags


.. raw:: html

    <script>
        var package = "vsclust";
        var versions = ["0.87"];
    </script>





Notes
-----
The shiny app can be run with the run\_vsclust\_app.sh command. Alternatively\, 
a command\-line version is available\: runVSClust.R



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vsclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vsclust/README.html