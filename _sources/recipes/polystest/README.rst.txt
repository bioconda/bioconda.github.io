:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'polystest'
.. highlight: bash

polystest
=========

.. conda:recipe:: polystest
   :replaces_section_title:
   :noindex:

   Interactive tool for statistical testing\, data browsing and interactive visualization of quantitative omics data

   :homepage: https://bitbucket.org/veitveit/polystest/src/master/
   :license: GPL / GPL (>=2)
   :recipe: /`polystest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polystest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polystest/meta.yaml>`_
   :links: biotools: :biotools:`polystest`, doi: :doi:`10.1074/mcp.RA119.001777`

   PolySTest is a web service \(shiny app\) and command\-line tool for statistical testing\, data browsing and interactive visualization of quantitative omics data. It contains multiple statistical tests and a new method to incorporate missing values. 



.. conda:package:: polystest

   |downloads_polystest| |docker_polystest|

   :versions:
      
      

      ``1.1-1``,  ``1.01-1``,  ``1.01-0``,  ``1.1-0``

      

   
   :depends bioconductor-limma: 
   :depends bioconductor-qvalue: 
   :depends r-base: 
   :depends r-circlize: 
   :depends r-dt: 
   :depends r-fdrtool: 
   :depends r-gplots: 
   :depends r-heatmaply: 
   :depends r-knitr: 
   :depends r-matrixstats: 
   :depends r-readxl: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinydashboard: 
   :depends r-upsetr: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install polystest

   and update with::

      conda update polystest

   or use the docker container::

      docker pull quay.io/biocontainers/polystest:<tag>

   (see `polystest/tags`_ for valid values for ``<tag>``)


.. |downloads_polystest| image:: https://img.shields.io/conda/dn/bioconda/polystest.svg?style=flat
   :target: https://anaconda.org/bioconda/polystest
   :alt:   (downloads)
.. |docker_polystest| image:: https://quay.io/repository/biocontainers/polystest/status
   :target: https://quay.io/repository/biocontainers/polystest
.. _`polystest/tags`: https://quay.io/repository/biocontainers/polystest?tab=tags






Notes
-----
PolySTest is available as shiny app via run\_polystest\_app.R or as command\-line tool\: runPolySTestCLI.R



Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/polystest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/polystest/README.html