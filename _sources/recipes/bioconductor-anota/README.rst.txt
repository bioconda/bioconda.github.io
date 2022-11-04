:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anota'
.. highlight: bash

bioconductor-anota
==================

.. conda:recipe:: bioconductor-anota
   :replaces_section_title:
   :noindex:

   ANalysis Of Translational Activity \(ANOTA\).

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/anota.html
   :license: GPL-3
   :recipe: /`bioconductor-anota <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anota>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anota/meta.yaml>`_
   :links: biotools: :biotools:`anota`, doi: :doi:`10.1093/bioinformatics/btr146`

   Genome wide studies of translational control is emerging as a tool to study verious biological conditions. The output from such analysis is both the mRNA level \(e.g. cytosolic mRNA level\) and the levl of mRNA actively involved in translation \(the actively translating mRNA level\) for each mRNA. The standard analysis of such data strives towards identifying differential translational between two or more sample classes \- i.e. differences in actively translated mRNA levels that are independent of underlying differences in cytosolic mRNA levels. This package allows for such analysis using partial variances and the random variance model. As 10s of thousands of mRNAs are analyzed in parallell the library performs a number of tests to assure that the data set is suitable for such analysis.


.. conda:package:: bioconductor-anota

   |downloads_bioconductor-anota| |docker_bioconductor-anota|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.30.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-multtest: ``>=2.54.0,<2.55.0``
   :depends bioconductor-qvalue: ``>=2.30.0,<2.31.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-anota

   and update with::

      conda update bioconductor-anota

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anota:<tag>

   (see `bioconductor-anota/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anota| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anota.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anota
   :alt:   (downloads)
.. |docker_bioconductor-anota| image:: https://quay.io/repository/biocontainers/bioconductor-anota/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anota
.. _`bioconductor-anota/tags`: https://quay.io/repository/biocontainers/bioconductor-anota?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anota";
        var versions = ["1.46.0","1.42.0","1.40.0","1.38.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anota/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anota/README.html