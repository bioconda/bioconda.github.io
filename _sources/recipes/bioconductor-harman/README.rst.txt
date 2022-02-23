:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-harman'
.. highlight: bash

bioconductor-harman
===================

.. conda:recipe:: bioconductor-harman
   :replaces_section_title:
   :noindex:

   The removal of batch effects from datasets using a PCA and constrained optimisation based technique

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Harman.html
   :license: GPL-3 + file LICENCE
   :recipe: /`bioconductor-harman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-harman/meta.yaml>`_
   :links: biotools: :biotools:`harman`

   Harman is a PCA and constrained optimisation based technique that maximises the removal of batch effects from datasets\, with the constraint that the probability of overcorrection \(i.e. removing genuine biological signal along with batch noise\) is kept to a fraction which is set by the end\-user.


.. conda:package:: bioconductor-harman

   |downloads_bioconductor-harman| |docker_bioconductor-harman|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-rcpp: ``>=0.11.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-harman

   and update with::

      conda update bioconductor-harman

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-harman:<tag>

   (see `bioconductor-harman/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-harman| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-harman.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-harman
   :alt:   (downloads)
.. |docker_bioconductor-harman| image:: https://quay.io/repository/biocontainers/bioconductor-harman/status
   :target: https://quay.io/repository/biocontainers/bioconductor-harman
.. _`bioconductor-harman/tags`: https://quay.io/repository/biocontainers/bioconductor-harman?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-harman";
        var versions = ["1.22.0","1.22.0","1.20.0","1.18.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-harman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-harman/README.html