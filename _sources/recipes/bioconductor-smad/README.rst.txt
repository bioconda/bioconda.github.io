:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-smad'
.. highlight: bash

bioconductor-smad
=================

.. conda:recipe:: bioconductor-smad
   :replaces_section_title:
   :noindex:

   Statistical Modelling of AP\-MS Data \(SMAD\)

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/SMAD.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-smad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smad/meta.yaml>`_

   Assigning probability scores to prey proteins captured in affinity purification mass spectrometry \(AP\-MS\) expriments to infer protein\-protein interactions. The output would facilitate non\-specific background removal as contaminants are commonly found in AP\-MS data.


.. conda:package:: bioconductor-smad

   |downloads_bioconductor-smad| |docker_bioconductor-smad|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: ``>=1.5``
   :depends r-rcpp: ``>=1.0.0``
   :depends r-rcppalgos: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-smad

   and update with::

      conda update bioconductor-smad

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-smad:<tag>

   (see `bioconductor-smad/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-smad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-smad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-smad
   :alt:   (downloads)
.. |docker_bioconductor-smad| image:: https://quay.io/repository/biocontainers/bioconductor-smad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-smad
.. _`bioconductor-smad/tags`: https://quay.io/repository/biocontainers/bioconductor-smad?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-smad";
        var versions = ["1.14.0","1.10.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-smad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-smad/README.html