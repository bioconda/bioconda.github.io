:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-planttfhunter'
.. highlight: bash

bioconductor-planttfhunter
==========================

.. conda:recipe:: bioconductor-planttfhunter
   :replaces_section_title:
   :noindex:

   Identification and classification of plant transcription factors

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/planttfhunter.html
   :license: GPL-3
   :recipe: /`bioconductor-planttfhunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-planttfhunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-planttfhunter/meta.yaml>`_

   planttfhunter is used to identify plant transcription factors \(TFs\) from protein sequence data and classify them into families and subfamilies using the classification scheme implemented in PlantTFDB. TFs are identified using pre\-built hidden Markov model profiles for DNA\-binding domains. Then\, auxiliary and forbidden domains are used with DNA\-binding domains to classify TFs into families and subfamilies \(when applicable\). Currently\, TFs can be classified in 58 different TF families\/subfamilies.


.. conda:package:: bioconductor-planttfhunter

   |downloads_bioconductor-planttfhunter| |docker_bioconductor-planttfhunter|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-planttfhunter

   and update with::

      conda update bioconductor-planttfhunter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-planttfhunter:<tag>

   (see `bioconductor-planttfhunter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-planttfhunter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-planttfhunter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-planttfhunter
   :alt:   (downloads)
.. |docker_bioconductor-planttfhunter| image:: https://quay.io/repository/biocontainers/bioconductor-planttfhunter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-planttfhunter
.. _`bioconductor-planttfhunter/tags`: https://quay.io/repository/biocontainers/bioconductor-planttfhunter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-planttfhunter";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-planttfhunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-planttfhunter/README.html