:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metapi'
.. highlight: bash

metapi
======

.. conda:recipe:: metapi
   :replaces_section_title:
   :noindex:

   A general metagenomics data mining system focus on robust microbiome research

   :homepage: https://github.com/ohmeta/metapi
   :license: GPL / GPL-3.0-only
   :recipe: /`metapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapi/meta.yaml>`_
   :links: biotools: :biotools:`metapi`

   


.. conda:package:: metapi

   |downloads_metapi| |docker_metapi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.0-0</code>,  <code>2.4.0-0</code>,  <code>2.3.0-0</code>,  <code>2.2.0-0</code>,  <code>2.1.4-0</code>,  <code>2.1.3-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>1.1.0-0</code>,  </span></summary>
      

      ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.73``
   :depends fd-find: 
   :depends matplotlib-base: 
   :depends natsort: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pigz: 
   :depends python: ``>=3.7``
   :depends ruamel.yaml: 
   :depends seaborn: 
   :depends seqkit: 
   :depends seqtk: 
   :depends snakemake: ``>=7.0``
   :depends sra-tools: ``>=2.11.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metapi

   and update with::

      conda update metapi

   or use the docker container::

      docker pull quay.io/biocontainers/metapi:<tag>

   (see `metapi/tags`_ for valid values for ``<tag>``)


.. |downloads_metapi| image:: https://img.shields.io/conda/dn/bioconda/metapi.svg?style=flat
   :target: https://anaconda.org/bioconda/metapi
   :alt:   (downloads)
.. |docker_metapi| image:: https://quay.io/repository/biocontainers/metapi/status
   :target: https://quay.io/repository/biocontainers/metapi
.. _`metapi/tags`: https://quay.io/repository/biocontainers/metapi?tab=tags


.. raw:: html

    <script>
        var package = "metapi";
        var versions = ["2.5.0","2.4.0","2.3.0","2.2.0","2.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metapi/README.html