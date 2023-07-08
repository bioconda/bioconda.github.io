:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bus'
.. highlight: bash

bioconductor-bus
================

.. conda:recipe:: bioconductor-bus
   :replaces_section_title:
   :noindex:

   Gene network reconstruction

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/BUS.html
   :license: GPL-3
   :recipe: /`bioconductor-bus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bus/meta.yaml>`_
   :links: biotools: :biotools:`bus`, doi: :doi:`10.1038/nmeth.3252`

   This package can be used to compute associations among genes \(gene\-networks\) or between genes and some external traits \(i.e. clinical\).


.. conda:package:: bioconductor-bus

   |downloads_bioconductor-bus| |docker_bioconductor-bus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.54.0-1</code>,  <code>1.54.0-0</code>,  <code>1.50.0-2</code>,  <code>1.50.0-1</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  <code>1.46.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.54.0-1``,  ``1.54.0-0``,  ``1.50.0-2``,  ``1.50.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-minet: ``>=3.58.0,<3.59.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=15.0.7``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-infotheo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bus

   and update with::

      conda update bioconductor-bus

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bus:<tag>

   (see `bioconductor-bus/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bus| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bus.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bus
   :alt:   (downloads)
.. |docker_bioconductor-bus| image:: https://quay.io/repository/biocontainers/bioconductor-bus/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bus
.. _`bioconductor-bus/tags`: https://quay.io/repository/biocontainers/bioconductor-bus?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bus";
        var versions = ["1.56.0","1.54.0","1.54.0","1.50.0","1.50.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bus/README.html