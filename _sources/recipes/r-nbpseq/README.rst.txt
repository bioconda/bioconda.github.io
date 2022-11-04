:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-nbpseq'
.. highlight: bash

r-nbpseq
========

.. conda:recipe:: r-nbpseq
   :replaces_section_title:
   :noindex:

   Negative Binomial \(NB\) models for two\-group comparisons and regression inferences from RNA\-Sequencing Data.

   :homepage: https://CRAN.R-project.org/package=NBPSeq
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-nbpseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nbpseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-nbpseq/meta.yaml>`_

   


.. conda:package:: r-nbpseq

   |downloads_r-nbpseq| |docker_r-nbpseq|

   :versions:
      
      

      ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-6``,  ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends bioconductor-qvalue: 
   :depends libgcc-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-nbpseq

   and update with::

      conda update r-nbpseq

   or use the docker container::

      docker pull quay.io/biocontainers/r-nbpseq:<tag>

   (see `r-nbpseq/tags`_ for valid values for ``<tag>``)


.. |downloads_r-nbpseq| image:: https://img.shields.io/conda/dn/bioconda/r-nbpseq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-nbpseq
   :alt:   (downloads)
.. |docker_r-nbpseq| image:: https://quay.io/repository/biocontainers/r-nbpseq/status
   :target: https://quay.io/repository/biocontainers/r-nbpseq
.. _`r-nbpseq/tags`: https://quay.io/repository/biocontainers/r-nbpseq?tab=tags


.. raw:: html

    <script>
        var package = "r-nbpseq";
        var versions = ["0.3.1","0.3.1","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-nbpseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-nbpseq/README.html