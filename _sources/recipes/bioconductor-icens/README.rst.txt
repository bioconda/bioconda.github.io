:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-icens'
.. highlight: bash

bioconductor-icens
==================

.. conda:recipe:: bioconductor-icens
   :replaces_section_title:
   :noindex:

   NPMLE for Censored and Truncated Data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Icens.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-icens <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icens>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icens/meta.yaml>`_
   :links: biotools: :biotools:`icens`, doi: :doi:`10.1038/nmeth.3252`

   Many functions for computing the NPMLE for censored and truncated data.


.. conda:package:: bioconductor-icens

   |downloads_bioconductor-icens| |docker_bioconductor-icens|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.70.0-0</code>,  <code>1.66.0-0</code>,  <code>1.64.0-0</code>,  <code>1.62.0-1</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-0</code>,  <code>1.56.0-1</code>,  <code>1.56.0-0</code>,  </span></summary>
      

      ``1.70.0-0``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-1``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-0``,  ``1.56.0-1``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-icens

   and update with::

      conda update bioconductor-icens

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-icens:<tag>

   (see `bioconductor-icens/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-icens| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icens.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-icens
   :alt:   (downloads)
.. |docker_bioconductor-icens| image:: https://quay.io/repository/biocontainers/bioconductor-icens/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icens
.. _`bioconductor-icens/tags`: https://quay.io/repository/biocontainers/bioconductor-icens?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-icens";
        var versions = ["1.70.0","1.66.0","1.64.0","1.62.0","1.62.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icens/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icens/README.html