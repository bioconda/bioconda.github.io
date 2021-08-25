:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidgsea'
.. highlight: bash

r-acidgsea
==========

.. conda:recipe:: r-acidgsea
   :replaces_section_title:
   :noindex:

   Parameterized fast gene set enrichment analysis.

   :homepage: https://r.acidgenomics.com/packages/acidgsea/
   :developer docs: https://github.com/acidgenomics/r-acidgsea
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidgsea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgsea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidgsea/meta.yaml>`_

   


.. conda:package:: r-acidgsea

   |downloads_r-acidgsea| |docker_r-acidgsea|

   :versions:
      
      

      ``0.6.4-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26``
   :depends bioconductor-fgsea: ``>=1.16``
   :depends r-acidgenerics: ``>=0.5.18``
   :depends r-acidplots: ``>=0.3.7``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-deseqanalysis: ``>=0.4.2``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-goalie: ``>=0.5.2``
   :depends r-knitr: ``>=1.33``
   :depends r-rmarkdown: ``>=2.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-acidgsea

   and update with::

      conda update r-acidgsea

   or use the docker container::

      docker pull quay.io/biocontainers/r-acidgsea:<tag>

   (see `r-acidgsea/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidgsea| image:: https://img.shields.io/conda/dn/bioconda/r-acidgsea.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidgsea
   :alt:   (downloads)
.. |docker_r-acidgsea| image:: https://quay.io/repository/biocontainers/r-acidgsea/status
   :target: https://quay.io/repository/biocontainers/r-acidgsea
.. _`r-acidgsea/tags`: https://quay.io/repository/biocontainers/r-acidgsea?tab=tags


.. raw:: html

    <script>
        var package = "r-acidgsea";
        var versions = ["0.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidgsea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidgsea/README.html