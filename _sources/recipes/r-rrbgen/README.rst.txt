:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rrbgen'
.. highlight: bash

r-rrbgen
========

.. conda:recipe:: r-rrbgen
   :replaces_section_title:
   :noindex:

   A lightweight limited functionality R bgen read\/write library

   :homepage: https://github.com/rwdavies/rrbgen
   :license: GPL3 / GPL3
   :recipe: /`r-rrbgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rrbgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rrbgen/meta.yaml>`_

   


.. conda:package:: r-rrbgen

   |downloads_r-rrbgen| |docker_r-rrbgen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.6-10</code>,  <code>0.0.6-9</code>,  <code>0.0.6-8</code>,  <code>0.0.6-7</code>,  <code>0.0.6-6</code>,  <code>0.0.6-5</code>,  <code>0.0.6-4</code>,  <code>0.0.6-3</code>,  <code>0.0.6-2</code>,  </span></summary>
      

      ``0.0.6-10``,  ``0.0.6-9``,  ``0.0.6-8``,  ``0.0.6-7``,  ``0.0.6-6``,  ``0.0.6-5``,  ``0.0.6-4``,  ``0.0.6-3``,  ``0.0.6-2``,  ``0.0.6-1``,  ``0.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcpp: ``>=0.12.18``
   :depends r-rcpparmadillo: ``>=0.8.600.0.0``
   :depends r-testthat: ``>=2.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rrbgen

   and update with::

      conda update r-rrbgen

   or use the docker container::

      docker pull quay.io/biocontainers/r-rrbgen:<tag>

   (see `r-rrbgen/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rrbgen| image:: https://img.shields.io/conda/dn/bioconda/r-rrbgen.svg?style=flat
   :target: https://anaconda.org/bioconda/r-rrbgen
   :alt:   (downloads)
.. |docker_r-rrbgen| image:: https://quay.io/repository/biocontainers/r-rrbgen/status
   :target: https://quay.io/repository/biocontainers/r-rrbgen
.. _`r-rrbgen/tags`: https://quay.io/repository/biocontainers/r-rrbgen?tab=tags


.. raw:: html

    <script>
        var package = "r-rrbgen";
        var versions = ["0.0.6","0.0.6","0.0.6","0.0.6","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rrbgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rrbgen/README.html