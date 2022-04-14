:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quatradis'
.. highlight: bash

quatradis
=========

.. conda:recipe:: quatradis
   :replaces_section_title:
   :noindex:

   A set of tools to analyse the output from TraDIS analyses

   :homepage: https://github.com/quadram-institute-bioscience/QuaTradis
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`quatradis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quatradis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quatradis/meta.yaml>`_

   


.. conda:package:: quatradis

   |downloads_quatradis| |docker_quatradis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.2-0</code>,  <code>0.5.4-0</code>,  <code>0.4.9-0</code>,  <code>0.4.5-1</code>,  <code>0.4.5-0</code>,  <code>0.4.4-0</code>,  <code>0.4.2-1</code>,  </span></summary>
      

      ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.2-0``,  ``0.5.4-0``,  ``0.4.9-0``,  ``0.4.5-1``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends bwa: 
   :depends htslib: 
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends r-base: 
   :depends r-getopt: 
   :depends r-mass: 
   :depends setuptools: 
   :depends smalt: 
   :depends snakemake: 
   :depends snakeviz: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quatradis

   and update with::

      conda update quatradis

   or use the docker container::

      docker pull quay.io/biocontainers/quatradis:<tag>

   (see `quatradis/tags`_ for valid values for ``<tag>``)


.. |downloads_quatradis| image:: https://img.shields.io/conda/dn/bioconda/quatradis.svg?style=flat
   :target: https://anaconda.org/bioconda/quatradis
   :alt:   (downloads)
.. |docker_quatradis| image:: https://quay.io/repository/biocontainers/quatradis/status
   :target: https://quay.io/repository/biocontainers/quatradis
.. _`quatradis/tags`: https://quay.io/repository/biocontainers/quatradis?tab=tags


.. raw:: html

    <script>
        var package = "quatradis";
        var versions = ["0.7.0","0.7.0","0.6.2","0.5.4","0.4.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quatradis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quatradis/README.html