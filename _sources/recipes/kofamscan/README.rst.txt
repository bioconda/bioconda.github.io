:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kofamscan'
.. highlight: bash

kofamscan
=========

.. conda:recipe:: kofamscan
   :replaces_section_title:
   :noindex:

   KofamKOALA assigns K numbers to the user\'s sequence data by HMMER\/HMMSEARCH against KOfam

   :homepage: https://www.genome.jp/tools/kofamkoala/
   :license: MIT License
   :recipe: /`kofamscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kofamscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kofamscan/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz859`

   KofamKOALA assigns K numbers to the user\'s sequence data by HMMER\/HMMSEARCH against KOfam \(a customized HMM database of KEGG Orthologs \(KOs\)\).
   K number assignments with scores above the predefined thresholds for individual KOs are more reliable than other proposed assignments.
   Such high score assignments are highlighted with asterisks \'\*\' in the output.
   The K number assignments facilitate the interpretation of the annotation results by linking the user\'s sequence data to the KEGG pathways and EC numbers.



.. conda:package:: kofamscan

   |downloads_kofamscan| |docker_kofamscan|

   :versions:
      
      

      ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends hmmer: ``>=3.1,<3.3.1|>=3.3.2``
   :depends parallel: 
   :depends ruby: ``>=2.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kofamscan

   and update with::

      conda update kofamscan

   or use the docker container::

      docker pull quay.io/biocontainers/kofamscan:<tag>

   (see `kofamscan/tags`_ for valid values for ``<tag>``)


.. |downloads_kofamscan| image:: https://img.shields.io/conda/dn/bioconda/kofamscan.svg?style=flat
   :target: https://anaconda.org/bioconda/kofamscan
   :alt:   (downloads)
.. |docker_kofamscan| image:: https://quay.io/repository/biocontainers/kofamscan/status
   :target: https://quay.io/repository/biocontainers/kofamscan
.. _`kofamscan/tags`: https://quay.io/repository/biocontainers/kofamscan?tab=tags


.. raw:: html

    <script>
        var package = "kofamscan";
        var versions = ["1.3.0","1.3.0","1.3.0","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kofamscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kofamscan/README.html