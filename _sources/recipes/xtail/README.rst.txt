:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xtail'
.. highlight: bash

xtail
=====

.. conda:recipe:: xtail
   :replaces_section_title:
   :noindex:

   Genome\-wide assessment of differential translations with ribosome profiling data

   :homepage: https://github.com/xryanglab/xtail
   :license: GPL-3
   :recipe: /`xtail <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtail>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtail/meta.yaml>`_

   


.. conda:package:: xtail

   |downloads_xtail| |docker_xtail|

   :versions:
      
      

      ``1.1.5-4``,  ``1.1.5-3``,  ``1.1.5-2``,  ``1.1.5-1``,  ``1.1.5-0``

      

   
   :depends bioconductor-biobase: 
   :depends bioconductor-biocgenerics: ``>=0.7.5``
   :depends bioconductor-biocparallel: ``>=1.12.0``
   :depends bioconductor-deseq2: ``>=1.18.1``
   :depends bioconductor-genefilter: 
   :depends bioconductor-geneplotter: 
   :depends bioconductor-genomicranges: 
   :depends bioconductor-iranges: 
   :depends bioconductor-s4vectors: ``>=0.9.25``
   :depends bioconductor-summarizedexperiment: ``>=1.8.0``
   :depends bioconductor-tximport: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-getopt: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-hmisc: 
   :depends r-lazyeval: ``>=0.2.0``
   :depends r-locfit: 
   :depends r-rcpp: ``>=0.11.0``
   :depends r-rcpparmadillo: 
   :depends r-rjson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xtail

   and update with::

      conda update xtail

   or use the docker container::

      docker pull quay.io/biocontainers/xtail:<tag>

   (see `xtail/tags`_ for valid values for ``<tag>``)


.. |downloads_xtail| image:: https://img.shields.io/conda/dn/bioconda/xtail.svg?style=flat
   :target: https://anaconda.org/bioconda/xtail
   :alt:   (downloads)
.. |docker_xtail| image:: https://quay.io/repository/biocontainers/xtail/status
   :target: https://quay.io/repository/biocontainers/xtail
.. _`xtail/tags`: https://quay.io/repository/biocontainers/xtail?tab=tags


.. raw:: html

    <script>
        var package = "xtail";
        var versions = ["1.1.5","1.1.5","1.1.5","1.1.5","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xtail/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xtail/README.html