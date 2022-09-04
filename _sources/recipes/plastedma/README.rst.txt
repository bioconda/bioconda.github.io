:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plastedma'
.. highlight: bash

plastedma
=========

.. conda:recipe:: plastedma
   :replaces_section_title:
   :noindex:

   Plastic Enzymes Degrading in Metagenomic databases Analysis

   :homepage: https://github.com/ozefreitas/PlastEDMA
   :documentation: https://github.com/ozefreitas/PlastEDMA/blob/main/README.md
   
   :license: MIT / MIT license
   :recipe: /`plastedma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plastedma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plastedma/meta.yaml>`_

   PlastEDMA takes an input FASTA file with a variable number of aminoacidic
   sequences and performes a search against an considerable amount of Hidden 
   Markov Models\, previously built and trained from state of the art plastic 
   \(PE \- polyethylene\) degrading enzymes. This process relies on the hmmsearch 
   function from HMMER to perform the structural annotation. Output deduces 
   about the potential presence of plastic degradring enzymes in the inputed
   sequences\, and is composed by 3 distinct files\, in order to help the user 
   to have an easier time to read and conclude about the results.



.. conda:package:: plastedma

   |downloads_plastedma| |docker_plastedma|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends cd-hit: 
   :depends hmmer: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pyyaml: 
   :depends t-coffee: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plastedma

   and update with::

      conda update plastedma

   or use the docker container::

      docker pull quay.io/biocontainers/plastedma:<tag>

   (see `plastedma/tags`_ for valid values for ``<tag>``)


.. |downloads_plastedma| image:: https://img.shields.io/conda/dn/bioconda/plastedma.svg?style=flat
   :target: https://anaconda.org/bioconda/plastedma
   :alt:   (downloads)
.. |docker_plastedma| image:: https://quay.io/repository/biocontainers/plastedma/status
   :target: https://quay.io/repository/biocontainers/plastedma
.. _`plastedma/tags`: https://quay.io/repository/biocontainers/plastedma?tab=tags


.. raw:: html

    <script>
        var package = "plastedma";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plastedma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plastedma/README.html