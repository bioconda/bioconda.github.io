:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ibmq'
.. highlight: bash

bioconductor-ibmq
=================

.. conda:recipe:: bioconductor-ibmq
   :replaces_section_title:
   :noindex:

   integrated Bayesian Modeling of eQTL data

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/iBMQ.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ibmq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ibmq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ibmq/meta.yaml>`_

   integrated Bayesian Modeling of eQTL data


.. conda:package:: bioconductor-ibmq

   |downloads_bioconductor-ibmq| |docker_bioconductor-ibmq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: ``>=0.9.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ibmq

   and update with::

      conda update bioconductor-ibmq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ibmq:<tag>

   (see `bioconductor-ibmq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ibmq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ibmq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ibmq
   :alt:   (downloads)
.. |docker_bioconductor-ibmq| image:: https://quay.io/repository/biocontainers/bioconductor-ibmq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ibmq
.. _`bioconductor-ibmq/tags`: https://quay.io/repository/biocontainers/bioconductor-ibmq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ibmq";
        var versions = ["1.34.0","1.34.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ibmq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ibmq/README.html