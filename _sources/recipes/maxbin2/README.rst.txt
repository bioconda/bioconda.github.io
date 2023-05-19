:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maxbin2'
.. highlight: bash

maxbin2
=======

.. conda:recipe:: maxbin2
   :replaces_section_title:
   :noindex:

   MaxBin is software for binning assembled metagenomic sequences based on an Expectation\-Maximization algorithm.

   :homepage: http://downloads.jbei.org/data/microbial_communities/MaxBin/MaxBin.html
   :license: BSD 3-clause
   :recipe: /`maxbin2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxbin2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxbin2/meta.yaml>`_

   


.. conda:package:: maxbin2

   |downloads_maxbin2| |docker_maxbin2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.7-5</code>,  <code>2.2.7-4</code>,  <code>2.2.7-3</code>,  <code>2.2.7-2</code>,  <code>2.2.7-1</code>,  <code>2.2.7-0</code>,  <code>2.2.6-0</code>,  <code>2.2.4-1</code>,  <code>2.2.4-0</code>,  </span></summary>
      

      ``2.2.7-5``,  ``2.2.7-4``,  ``2.2.7-3``,  ``2.2.7-2``,  ``2.2.7-1``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.1-1``,  ``2.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bowtie2: 
   :depends fraggenescan: ``>=1.30``
   :depends hmmer: 
   :depends idba: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``5.26.*``
   :depends perl-lwp-simple: 
   :depends r-base: 
   :depends r-gplots: 
   :depends tar: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install maxbin2

   and update with::

      conda update maxbin2

   or use the docker container::

      docker pull quay.io/biocontainers/maxbin2:<tag>

   (see `maxbin2/tags`_ for valid values for ``<tag>``)


.. |downloads_maxbin2| image:: https://img.shields.io/conda/dn/bioconda/maxbin2.svg?style=flat
   :target: https://anaconda.org/bioconda/maxbin2
   :alt:   (downloads)
.. |docker_maxbin2| image:: https://quay.io/repository/biocontainers/maxbin2/status
   :target: https://quay.io/repository/biocontainers/maxbin2
.. _`maxbin2/tags`: https://quay.io/repository/biocontainers/maxbin2?tab=tags


.. raw:: html

    <script>
        var package = "maxbin2";
        var versions = ["2.2.7","2.2.7","2.2.7","2.2.7","2.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maxbin2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maxbin2/README.html