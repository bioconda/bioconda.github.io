:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tdaracne'
.. highlight: bash

bioconductor-tdaracne
=====================

.. conda:recipe:: bioconductor-tdaracne
   :replaces_section_title:
   :noindex:

   Network reverse engineering from time course data.

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/TDARACNE.html
   :license: GPL-2
   :recipe: /`bioconductor-tdaracne <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tdaracne>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tdaracne/meta.yaml>`_
   :links: biotools: :biotools:`tdaracne`, doi: :doi:`10.1186/1471-2105-11-154`

   To infer gene networks from time\-series measurements is a current challenge into bioinformatics research area. In order to detect dependencies between genes at different time delays\, we propose an approach to infer gene regulatory networks from time\-series measurements starting from a well known algorithm based on information theory. The proposed algorithm is expected to be useful in reconstruction of small biological directed networks from time course data.


.. conda:package:: bioconductor-tdaracne

   |downloads_bioconductor-tdaracne| |docker_bioconductor-tdaracne|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-rgraphviz: ``>=2.38.0,<2.39.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-genkern: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tdaracne

   and update with::

      conda update bioconductor-tdaracne

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tdaracne:<tag>

   (see `bioconductor-tdaracne/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tdaracne| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tdaracne.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tdaracne
   :alt:   (downloads)
.. |docker_bioconductor-tdaracne| image:: https://quay.io/repository/biocontainers/bioconductor-tdaracne/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tdaracne
.. _`bioconductor-tdaracne/tags`: https://quay.io/repository/biocontainers/bioconductor-tdaracne?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tdaracne";
        var versions = ["1.44.0","1.42.0","1.40.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tdaracne/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tdaracne/README.html