:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bohra'
.. highlight: bash

bohra
=====

.. conda:recipe:: bohra
   :replaces_section_title:
   :noindex:

   Pipeline for analysing Illumina data for microbiological public health.

   :homepage: https://github.com/MDU-PHL/bohra
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`bohra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bohra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bohra/meta.yaml>`_

   


.. conda:package:: bohra

   |downloads_bohra| |docker_bohra|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.2-0</code>,  <code>2.3.0-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>1.2.20-0</code>,  <code>1.2.19-1</code>,  <code>1.2.19-0</code>,  <code>1.2.18-0</code>,  <code>1.2.16-0</code>,  </span></summary>
      

      ``2.3.2-0``,  ``2.3.0-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``1.2.20-0``,  ``1.2.19-1``,  ``1.2.19-0``,  ``1.2.18-0``,  ``1.2.16-0``,  ``1.2.15-0``,  ``1.2.14-0``,  ``1.2.12-0``,  ``1.2.11-0``,  ``1.2.10-1``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.6-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.1.8-0``,  ``1.1.7-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.27-0``,  ``1.0.26-0``,  ``1.0.25-0``,  ``1.0.24-0``,  ``1.0.23-0``,  ``1.0.22-0``,  ``1.0.20-1``,  ``1.0.20-0``,  ``1.0.19-0``

      
      .. raw:: html

         </details>
      

   
   :depends any2fasta: 
   :depends biopython: ``1.81.*``
   :depends csvtk: 
   :depends jinja2: 
   :depends nextflow: ``22.10.6.*``
   :depends numpy: ``1.23.1.*``
   :depends packaging: 
   :depends pandas: ``1.0.5.*``
   :depends perl-list-moreutils: 
   :depends perl-svg: 
   :depends perl-text-csv: 
   :depends psutil: 
   :depends pytest: 
   :depends pytest-runner: 
   :depends python: ``>=3.8``
   :depends sh: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bohra

   and update with::

      conda update bohra

   or use the docker container::

      docker pull quay.io/biocontainers/bohra:<tag>

   (see `bohra/tags`_ for valid values for ``<tag>``)


.. |downloads_bohra| image:: https://img.shields.io/conda/dn/bioconda/bohra.svg?style=flat
   :target: https://anaconda.org/bioconda/bohra
   :alt:   (downloads)
.. |docker_bohra| image:: https://quay.io/repository/biocontainers/bohra/status
   :target: https://quay.io/repository/biocontainers/bohra
.. _`bohra/tags`: https://quay.io/repository/biocontainers/bohra?tab=tags


.. raw:: html

    <script>
        var package = "bohra";
        var versions = ["2.3.2","2.3.0","2.2.1","2.2.0","1.2.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bohra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bohra/README.html