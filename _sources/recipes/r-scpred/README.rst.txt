:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scpred'
.. highlight: bash

r-scpred
========

.. conda:recipe:: r-scpred
   :replaces_section_title:
   :noindex:

   Bioconda\-installable version of scPred cell type classification method.

   :homepage: https://github.com/powellgenomicslab/scPred
   :developer docs: https://github.com/powellgenomicslab/scPred/tree/development
   :license: MIT
   :recipe: /`r-scpred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scpred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scpred/meta.yaml>`_

   


.. conda:package:: r-scpred

   |downloads_r-scpred| |docker_r-scpred|

   :versions:
      
      

      ``1.9.2-0``,  ``1.9.0-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``v1.9.0-2``,  ``v1.9.0-1``,  ``v1.9.0-0``

      

   
   :depends r-caret: 
   :depends r-cli: 
   :depends r-crayon: 
   :depends r-ggbeeswarm: 
   :depends r-ggplot2: 
   :depends r-harmony: 
   :depends r-kernlab: 
   :depends r-knitr: 
   :depends r-mlmetrics: 
   :depends r-pbapply: 
   :depends r-proc: 
   :depends r-seuratobject: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-scpred

   and update with::

      conda update r-scpred

   or use the docker container::

      docker pull quay.io/biocontainers/r-scpred:<tag>

   (see `r-scpred/tags`_ for valid values for ``<tag>``)


.. |downloads_r-scpred| image:: https://img.shields.io/conda/dn/bioconda/r-scpred.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scpred
   :alt:   (downloads)
.. |docker_r-scpred| image:: https://quay.io/repository/biocontainers/r-scpred/status
   :target: https://quay.io/repository/biocontainers/r-scpred
.. _`r-scpred/tags`: https://quay.io/repository/biocontainers/r-scpred?tab=tags


.. raw:: html

    <script>
        var package = "r-scpred";
        var versions = ["1.9.2","1.9.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scpred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scpred/README.html