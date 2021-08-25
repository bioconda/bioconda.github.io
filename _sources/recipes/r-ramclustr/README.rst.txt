:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ramclustr'
.. highlight: bash

r-ramclustr
===========

.. conda:recipe:: r-ramclustr
   :replaces_section_title:
   :noindex:

   A feature clustering algorithm for non\-targeted mass spectrometric metabolomics data. This method is compatible with gas and liquid chromatography coupled mass spectrometry\, including indiscriminant tandem mass spectrometry \<DOI\: 10.1021\/ac501530d\> data.

   :homepage: https://github.com/cbroeckl/RAMClustR
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`r-ramclustr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ramclustr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ramclustr/meta.yaml>`_

   


.. conda:package:: r-ramclustr

   |downloads_r-ramclustr| |docker_r-ramclustr|

   :versions:
      
      

      ``1.2.2-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.0.9-1``,  ``1.0.9-0``

      

   
   :depends bioconductor-msnbase: 
   :depends bioconductor-pcamethods: 
   :depends bioconductor-preprocesscore: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-biocmanager: 
   :depends r-dynamictreecut: 
   :depends r-e1071: 
   :depends r-fastcluster: 
   :depends r-ff: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-httr: 
   :depends r-interpretmsspectrum: 
   :depends r-jsonlite: 
   :depends r-rcurl: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-webchem: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ramclustr

   and update with::

      conda update r-ramclustr

   or use the docker container::

      docker pull quay.io/biocontainers/r-ramclustr:<tag>

   (see `r-ramclustr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ramclustr| image:: https://img.shields.io/conda/dn/bioconda/r-ramclustr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ramclustr
   :alt:   (downloads)
.. |docker_r-ramclustr| image:: https://quay.io/repository/biocontainers/r-ramclustr/status
   :target: https://quay.io/repository/biocontainers/r-ramclustr
.. _`r-ramclustr/tags`: https://quay.io/repository/biocontainers/r-ramclustr?tab=tags


.. raw:: html

    <script>
        var package = "r-ramclustr";
        var versions = ["1.2.2","1.2.1","1.2.1","1.0.9","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ramclustr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ramclustr/README.html