:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-screen'
.. highlight: bash

fastq-screen
============

.. conda:recipe:: fastq-screen
   :replaces_section_title:
   :noindex:

   FastQ Screen allows you to screen a library of sequences in FastQ format against a set of sequence databases so you can see if the composition of the library matches with what you expect

   :homepage: http://www.bioinformatics.babraham.ac.uk/projects/fastq_screen/
   :license: GPLv3
   :recipe: /`fastq-screen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-screen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-screen/meta.yaml>`_

   


.. conda:package:: fastq-screen

   |downloads_fastq-screen| |docker_fastq-screen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.15.3-0</code>,  <code>0.15.2-0</code>,  <code>0.14.0-2</code>,  <code>0.14.0-1</code>,  <code>0.14.0-0</code>,  <code>0.13.0-1</code>,  <code>0.13.0-0</code>,  <code>0.11.3-1</code>,  <code>0.11.3-0</code>,  </span></summary>
      

      ``0.15.3-0``,  ``0.15.2-0``,  ``0.14.0-2``,  ``0.14.0-1``,  ``0.14.0-0``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.11.3-1``,  ``0.11.3-0``,  ``0.11.1-1``,  ``0.11.1-0``,  ``0.5.2-1``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bowtie: 
   :depends bowtie2: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-gdgraph: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastq-screen

   and update with::

      conda update fastq-screen

   or use the docker container::

      docker pull quay.io/biocontainers/fastq-screen:<tag>

   (see `fastq-screen/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-screen| image:: https://img.shields.io/conda/dn/bioconda/fastq-screen.svg?style=flat
   :target: https://anaconda.org/bioconda/fastq-screen
   :alt:   (downloads)
.. |docker_fastq-screen| image:: https://quay.io/repository/biocontainers/fastq-screen/status
   :target: https://quay.io/repository/biocontainers/fastq-screen
.. _`fastq-screen/tags`: https://quay.io/repository/biocontainers/fastq-screen?tab=tags


.. raw:: html

    <script>
        var package = "fastq-screen";
        var versions = ["0.15.3","0.15.2","0.14.0","0.14.0","0.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-screen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-screen/README.html