:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-orqa'
.. highlight: bash

r-orqa
======

.. conda:recipe:: r-orqa
   :replaces_section_title:
   :noindex:

   Assess repeatability\, accuracy and corss\-platform agreement of titration microarray data based on order restricted inference procedures

   :homepage: https://CRAN.R-project.org/package=orQA
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-orqa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-orqa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-orqa/meta.yaml>`_

   


.. conda:package:: r-orqa

   |downloads_r-orqa| |docker_r-orqa|

   :versions:
      
      

      ``0.2.1-7``,  ``0.2.1-6``,  ``0.2.1-5``,  ``0.2.1-4``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends bioconductor-genefilter: ``>=1.24.3``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-gtools: ``>=2.6.1``
   :depends r-nlme: ``>=3.1_96``
   :depends r-rcpp: ``>=0.8.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-orqa

   and update with::

      conda update r-orqa

   or use the docker container::

      docker pull quay.io/biocontainers/r-orqa:<tag>

   (see `r-orqa/tags`_ for valid values for ``<tag>``)


.. |downloads_r-orqa| image:: https://img.shields.io/conda/dn/bioconda/r-orqa.svg?style=flat
   :target: https://anaconda.org/bioconda/r-orqa
   :alt:   (downloads)
.. |docker_r-orqa| image:: https://quay.io/repository/biocontainers/r-orqa/status
   :target: https://quay.io/repository/biocontainers/r-orqa
.. _`r-orqa/tags`: https://quay.io/repository/biocontainers/r-orqa?tab=tags


.. raw:: html

    <script>
        var package = "r-orqa";
        var versions = ["0.2.1","0.2.1","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-orqa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-orqa/README.html