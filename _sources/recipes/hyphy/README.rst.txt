:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hyphy'
.. highlight: bash

hyphy
=====

.. conda:recipe:: hyphy
   :replaces_section_title:
   :noindex:

   An open\-source software package for comparative sequence analysis using stochastic evolutionary models.

   :homepage: http://hyphy.org/
   :developer docs: https://github.com/veg/hyphy
   :license: MIT / MIT
   :recipe: /`hyphy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hyphy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hyphy/meta.yaml>`_

   HyPhy \(Hypothesis Testing using Phylogenies\) is an open\-source software package for the analysis of genetic sequences
   \(in particular the inference of natural selection\) using techniques in phylogenetics\, molecular evolution\, and machine learning.



.. conda:package:: hyphy

   |downloads_hyphy| |docker_hyphy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.42-0</code>,  <code>2.5.41-1</code>,  <code>2.5.41-0</code>,  <code>2.5.40-1</code>,  <code>2.5.40-0</code>,  <code>2.5.39-0</code>,  <code>2.5.38-0</code>,  <code>2.5.36-1</code>,  <code>2.5.36-0</code>,  </span></summary>
      

      ``2.5.42-0``,  ``2.5.41-1``,  ``2.5.41-0``,  ``2.5.40-1``,  ``2.5.40-0``,  ``2.5.39-0``,  ``2.5.38-0``,  ``2.5.36-1``,  ``2.5.36-0``,  ``2.5.33-0``,  ``2.5.32-0``,  ``2.5.31-0``,  ``2.5.30-1``,  ``2.5.30-0``,  ``2.5.29-1``,  ``2.5.29-0``,  ``2.5.28-0``,  ``2.5.26-0``,  ``2.5.25-0``,  ``2.5.24-0``,  ``2.5.23-0``,  ``2.5.22.1-0``,  ``2.5.22-0``,  ``2.5.21-0``,  ``2.5.20-0``,  ``2.5.19-0``,  ``2.5.17-0``,  ``2.5.16-0``,  ``2.5.15-0``,  ``2.5.14-0``,  ``2.5.12-1``,  ``2.5.12-0``,  ``2.5.11-0``,  ``2.5.10-0``,  ``2.5.9-0``,  ``2.5.8-1``,  ``2.5.8-0``,  ``2.5.7-0``,  ``2.5.6-0``,  ``2.5.5-0``,  ``2.5.4-1``,  ``2.5.4-0``,  ``2.5.3-0``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.3.14-1``,  ``2.3.14-0``,  ``2.3.12-1``,  ``2.3.12-0``,  ``2.3.11-2``,  ``2.3.11-1``,  ``2.3.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libcurl: ``>=7.83.1,<8.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends openmpi: ``>=4.1.4,<5.0a0``
   :depends openssl: ``>=1.1.1q,<1.1.2a``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hyphy

   and update with::

      conda update hyphy

   or use the docker container::

      docker pull quay.io/biocontainers/hyphy:<tag>

   (see `hyphy/tags`_ for valid values for ``<tag>``)


.. |downloads_hyphy| image:: https://img.shields.io/conda/dn/bioconda/hyphy.svg?style=flat
   :target: https://anaconda.org/bioconda/hyphy
   :alt:   (downloads)
.. |docker_hyphy| image:: https://quay.io/repository/biocontainers/hyphy/status
   :target: https://quay.io/repository/biocontainers/hyphy
.. _`hyphy/tags`: https://quay.io/repository/biocontainers/hyphy?tab=tags


.. raw:: html

    <script>
        var package = "hyphy";
        var versions = ["2.5.42","2.5.41","2.5.41","2.5.40","2.5.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hyphy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hyphy/README.html