:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tfhaz'
.. highlight: bash

bioconductor-tfhaz
==================

.. conda:recipe:: bioconductor-tfhaz
   :replaces_section_title:
   :noindex:

   Transcription Factor High Accumulation Zones

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TFHAZ.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tfhaz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfhaz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfhaz/meta.yaml>`_

   It finds trascription factor \(TF\) high accumulation DNA zones\, i.e.\, regions along the genome where there is a high presence of different transcription factors. Starting from a dataset containing the genomic positions of TF binding regions\, for each base of the selected chromosome the accumulation of TFs is computed. Three different types of accumulation \(TF\, region and base accumulation\) are available\, together with the possibility of considering\, in the single base accumulation computing\, the TFs present not only in that single base\, but also in its neighborhood\, within a window of a given width. Two different methods for the search of TF high accumulation DNA zones\, called \"binding regions\" and \"overlaps\"\, are available. In addition\, some functions are provided in order to analyze\, visualize and compare results obtained with different input parameters.


.. conda:package:: bioconductor-tfhaz

   |downloads_bioconductor-tfhaz| |docker_bioconductor-tfhaz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-orfik: ``>=1.20.0,<1.21.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tfhaz

   and update with::

      conda update bioconductor-tfhaz

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tfhaz:<tag>

   (see `bioconductor-tfhaz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tfhaz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfhaz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tfhaz
   :alt:   (downloads)
.. |docker_bioconductor-tfhaz| image:: https://quay.io/repository/biocontainers/bioconductor-tfhaz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfhaz
.. _`bioconductor-tfhaz/tags`: https://quay.io/repository/biocontainers/bioconductor-tfhaz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tfhaz";
        var versions = ["1.22.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfhaz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfhaz/README.html