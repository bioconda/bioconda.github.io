:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidexperiment'
.. highlight: bash

r-acidexperiment
================

.. conda:recipe:: r-acidexperiment
   :replaces_section_title:
   :noindex:

   Toolkit to extend the functionality of SummarizedExperiment.

   :homepage: https://r.acidgenomics.com/packages/acidexperiment/
   :developer docs: https://github.com/acidgenomics/r-acidexperiment
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidexperiment/meta.yaml>`_

   


.. conda:package:: r-acidexperiment

   |downloads_r-acidexperiment| |docker_r-acidexperiment|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.5-0</code>,  <code>0.4.4-1</code>,  <code>0.4.4-0</code>,  <code>0.3.0-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.14-0</code>,  <code>0.1.13-0</code>,  </span></summary>
      

      ``0.4.5-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.14-0``,  ``0.1.13-0``,  ``0.1.12-0``,  ``0.1.11-0``,  ``0.1.10-2``,  ``0.1.10-1``,  ``0.1.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.56.0``
   :depends bioconductor-biocgenerics: ``>=0.42.0``
   :depends bioconductor-biostrings: ``>=2.64.0``
   :depends bioconductor-genomeinfodb: ``>=1.32.0``
   :depends bioconductor-genomicranges: ``>=1.48.0``
   :depends bioconductor-iranges: ``>=2.30.0``
   :depends bioconductor-multiassayexperiment: ``>=1.22.0``
   :depends bioconductor-s4vectors: ``>=0.34.0``
   :depends bioconductor-summarizedexperiment: ``>=1.26.0``
   :depends r-acidbase: ``>=0.6.8``
   :depends r-acidcli: ``>=0.2.4``
   :depends r-acidgenerics: ``>=0.6.4``
   :depends r-acidgenomes: ``>=0.4.4``
   :depends r-acidplyr: ``>=0.3.2``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-goalie: ``>=0.6.6``
   :depends r-matrix: ``>=1.5.1``
   :depends r-pipette: ``>=0.10.0``
   :depends r-scales: ``>=1.2.1``
   :depends r-stringi: ``>=1.7.8``
   :depends r-syntactic: ``>=0.6.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-acidexperiment

   and update with::

      conda update r-acidexperiment

   or use the docker container::

      docker pull quay.io/biocontainers/r-acidexperiment:<tag>

   (see `r-acidexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidexperiment| image:: https://img.shields.io/conda/dn/bioconda/r-acidexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidexperiment
   :alt:   (downloads)
.. |docker_r-acidexperiment| image:: https://quay.io/repository/biocontainers/r-acidexperiment/status
   :target: https://quay.io/repository/biocontainers/r-acidexperiment
.. _`r-acidexperiment/tags`: https://quay.io/repository/biocontainers/r-acidexperiment?tab=tags


.. raw:: html

    <script>
        var package = "r-acidexperiment";
        var versions = ["0.4.5","0.4.4","0.4.4","0.3.0","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidexperiment/README.html