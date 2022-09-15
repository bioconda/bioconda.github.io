:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cosnet'
.. highlight: bash

bioconductor-cosnet
===================

.. conda:recipe:: bioconductor-cosnet
   :replaces_section_title:
   :noindex:

   Cost Sensitive Network for node label prediction on graphs with highly unbalanced labelings

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/COSNet.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cosnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosnet/meta.yaml>`_

   Package that implements the COSNet classification algorithm. The algorithm predicts node labels in partially labeled graphs where few positives are available for the class being predicted.


.. conda:package:: bioconductor-cosnet

   |downloads_bioconductor-cosnet| |docker_bioconductor-cosnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cosnet

   and update with::

      conda update bioconductor-cosnet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cosnet:<tag>

   (see `bioconductor-cosnet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cosnet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosnet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cosnet
   :alt:   (downloads)
.. |docker_bioconductor-cosnet| image:: https://quay.io/repository/biocontainers/bioconductor-cosnet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosnet
.. _`bioconductor-cosnet/tags`: https://quay.io/repository/biocontainers/bioconductor-cosnet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cosnet";
        var versions = ["1.28.0","1.28.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosnet/README.html