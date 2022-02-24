:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-virfinder'
.. highlight: bash

r-virfinder
===========

.. conda:recipe:: r-virfinder
   :replaces_section_title:
   :noindex:

   VirFinder\: a novel k\-mer based tool for identifying viral sequences from assembled metagenomic data.

   :homepage: https://github.com/jessieren/VirFinder
   :license: USC-RL v1.0
   :recipe: /`r-virfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-virfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-virfinder/meta.yaml>`_
   :links: doi: :doi:`10.1186/s40168-017-0283-5`

   


.. conda:package:: r-virfinder

   |downloads_r-virfinder| |docker_r-virfinder|

   :versions:
      
      

      ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends bioconductor-qvalue: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-glmnet: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-virfinder

   and update with::

      conda update r-virfinder

   or use the docker container::

      docker pull quay.io/biocontainers/r-virfinder:<tag>

   (see `r-virfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_r-virfinder| image:: https://img.shields.io/conda/dn/bioconda/r-virfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/r-virfinder
   :alt:   (downloads)
.. |docker_r-virfinder| image:: https://quay.io/repository/biocontainers/r-virfinder/status
   :target: https://quay.io/repository/biocontainers/r-virfinder
.. _`r-virfinder/tags`: https://quay.io/repository/biocontainers/r-virfinder?tab=tags


.. raw:: html

    <script>
        var package = "r-virfinder";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-virfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-virfinder/README.html