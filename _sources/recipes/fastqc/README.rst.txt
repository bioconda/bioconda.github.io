:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqc'
.. highlight: bash

fastqc
======

.. conda:recipe:: fastqc
   :replaces_section_title:
   :noindex:

   A quality control tool for high throughput sequence data.

   :homepage: http://www.bioinformatics.babraham.ac.uk/projects/fastqc/
   :license: GPL >=3
   :recipe: /`fastqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqc/meta.yaml>`_
   :links: biotools: :biotools:`fastqc`, usegalaxy-eu: :usegalaxy-eu:`fastqc`

   


.. conda:package:: fastqc

   |downloads_fastqc| |docker_fastqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.9-1</code>,  <code>0.11.9-0</code>,  <code>0.11.8-2</code>,  <code>0.11.8-1</code>,  <code>0.11.8-0</code>,  <code>0.11.7-7</code>,  <code>0.11.7-6</code>,  <code>0.11.7-5</code>,  <code>0.11.7-4</code>,  </span></summary>
      

      ``0.11.9-1``,  ``0.11.9-0``,  ``0.11.8-2``,  ``0.11.8-1``,  ``0.11.8-0``,  ``0.11.7-7``,  ``0.11.7-6``,  ``0.11.7-5``,  ``0.11.7-4``,  ``0.11.7-2``,  ``0.11.7-0``,  ``0.11.6-2``,  ``0.11.6-1``,  ``0.11.6-0``,  ``0.11.5-5``,  ``0.11.5-4``,  ``0.11.5-3``,  ``0.11.5-2``,  ``0.11.5-1``,  ``0.11.4-2``,  ``0.11.4-1``,  ``0.11.4-0``,  ``0.11.3-1``,  ``0.11.3-0``,  ``0.11.2-1``,  ``0.11.2-0``,  ``0.10.1-1``,  ``0.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends font-ttf-dejavu-sans-mono: 
   :depends fontconfig: 
   :depends openjdk: ``>=8.0.144``
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastqc

   and update with::

      conda update fastqc

   or use the docker container::

      docker pull quay.io/biocontainers/fastqc:<tag>

   (see `fastqc/tags`_ for valid values for ``<tag>``)


.. |downloads_fastqc| image:: https://img.shields.io/conda/dn/bioconda/fastqc.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqc
   :alt:   (downloads)
.. |docker_fastqc| image:: https://quay.io/repository/biocontainers/fastqc/status
   :target: https://quay.io/repository/biocontainers/fastqc
.. _`fastqc/tags`: https://quay.io/repository/biocontainers/fastqc?tab=tags


.. raw:: html

    <script>
        var package = "fastqc";
        var versions = ["0.11.9","0.11.9","0.11.8","0.11.8","0.11.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqc/README.html