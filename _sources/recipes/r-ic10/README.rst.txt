:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ic10'
.. highlight: bash

r-ic10
======

.. conda:recipe:: r-ic10
   :replaces_section_title:
   :noindex:

   Implementation of the classifier described in the paper \'Genome\-driven integrated classification of breast cancer validated in over 7\,500 samples\' \(Ali HR et al.\, Genome Biology 2014\). It uses copy number and\/or expression form breast cancer data\, trains a pamr classifier \(Tibshirani et al.\) with the features available and predicts the iC10 group.

   :homepage: https://CRAN.R-project.org/package=iC10
   :license: GPL3 / GPL-3
   :recipe: /`r-ic10 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ic10>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ic10/meta.yaml>`_

   


.. conda:package:: r-ic10

   |downloads_r-ic10| |docker_r-ic10|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5-5</code>,  <code>1.5-4</code>,  <code>1.5-3</code>,  <code>1.5-2</code>,  <code>1.5-1</code>,  <code>1.5-0</code>,  <code>1.4.2-2</code>,  <code>1.4.2-1</code>,  <code>1.4.2-0</code>,  </span></summary>
      

      ``1.5-5``,  ``1.5-4``,  ``1.5-3``,  ``1.5-2``,  ``1.5-1``,  ``1.5-0``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-impute: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ic10trainingdata: 
   :depends r-pamr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ic10

   and update with::

      conda update r-ic10

   or use the docker container::

      docker pull quay.io/biocontainers/r-ic10:<tag>

   (see `r-ic10/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ic10| image:: https://img.shields.io/conda/dn/bioconda/r-ic10.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ic10
   :alt:   (downloads)
.. |docker_r-ic10| image:: https://quay.io/repository/biocontainers/r-ic10/status
   :target: https://quay.io/repository/biocontainers/r-ic10
.. _`r-ic10/tags`: https://quay.io/repository/biocontainers/r-ic10?tab=tags


.. raw:: html

    <script>
        var package = "r-ic10";
        var versions = ["1.5","1.5","1.5","1.5","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ic10/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ic10/README.html