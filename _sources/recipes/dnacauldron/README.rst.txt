:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnacauldron'
.. highlight: bash

dnacauldron
===========

.. conda:recipe:: dnacauldron
   :replaces_section_title:
   :noindex:

   Cloning simulation for DNA assembly \(Golden Gate\, Gibson...\)

   :homepage: https://github.com/Edinburgh-Genome-Foundry/DnaCauldron
   :license: MIT
   :recipe: /`dnacauldron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnacauldron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnacauldron/meta.yaml>`_

   


.. conda:package:: dnacauldron

   |downloads_dnacauldron| |docker_dnacauldron|

   :versions:
      
      

      ``2.0.8-0``,  ``2.0.7-0``

      

   
   :depends biopython: 
   :depends dna_features_viewer: 
   :depends flametree: 
   :depends fuzzywuzzy: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends proglog: 
   :depends python: 
   :depends python-levenshtein: 
   :depends scipy: 
   :depends snapgene-reader: 
   :depends xlrd: 
   :depends xlwt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dnacauldron

   and update with::

      conda update dnacauldron

   or use the docker container::

      docker pull quay.io/biocontainers/dnacauldron:<tag>

   (see `dnacauldron/tags`_ for valid values for ``<tag>``)


.. |downloads_dnacauldron| image:: https://img.shields.io/conda/dn/bioconda/dnacauldron.svg?style=flat
   :target: https://anaconda.org/bioconda/dnacauldron
   :alt:   (downloads)
.. |docker_dnacauldron| image:: https://quay.io/repository/biocontainers/dnacauldron/status
   :target: https://quay.io/repository/biocontainers/dnacauldron
.. _`dnacauldron/tags`: https://quay.io/repository/biocontainers/dnacauldron?tab=tags


.. raw:: html

    <script>
        var package = "dnacauldron";
        var versions = ["2.0.8","2.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnacauldron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnacauldron/README.html