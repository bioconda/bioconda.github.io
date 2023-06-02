:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbec'
.. highlight: bash

bioconductor-rbec
=================

.. conda:recipe:: bioconductor-rbec
   :replaces_section_title:
   :noindex:

   Rbec\: a tool for analysis of amplicon sequencing data from synthetic microbial communities

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/Rbec.html
   :license: LGPL-3
   :recipe: /`bioconductor-rbec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbec/meta.yaml>`_

   Rbec is a adapted version of DADA2 for analyzing amplicon sequencing data from synthetic communities \(SynComs\)\, where the reference sequences for each strain exists. Rbec can not only accurately profile the microbial compositions in SynComs\, but also predict the contaminants in SynCom samples.


.. conda:package:: bioconductor-rbec

   |downloads_bioconductor-rbec| |docker_bioconductor-rbec|

   :versions:
      
      

      ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-dada2: ``>=1.26.0,<1.27.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-rcpp: ``>=1.0.6``
   :depends r-readr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rbec

   and update with::

      conda update bioconductor-rbec

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbec:<tag>

   (see `bioconductor-rbec/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbec| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbec.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbec
   :alt:   (downloads)
.. |docker_bioconductor-rbec| image:: https://quay.io/repository/biocontainers/bioconductor-rbec/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbec
.. _`bioconductor-rbec/tags`: https://quay.io/repository/biocontainers/bioconductor-rbec?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbec";
        var versions = ["1.6.0","1.6.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbec/README.html