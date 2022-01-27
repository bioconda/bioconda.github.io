:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dnaio'
.. highlight: bash

dnaio
=====

.. conda:recipe:: dnaio
   :replaces_section_title:
   :noindex:

   Read and write FASTA and FASTQ files efficiently

   :homepage: https://github.com/marcelm/dnaio/
   :license: MIT
   :recipe: /`dnaio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dnaio/meta.yaml>`_

   


.. conda:package:: dnaio

   |downloads_dnaio| |docker_dnaio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  </span></summary>
      

      ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4-0``,  ``0.3-1``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.4.0``
   :depends python: ``>=3.7,<3.8.0a0``
   :depends python_abi: ``3.7.* *_cp37m``
   :depends xopen: ``>=1.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dnaio

   and update with::

      conda update dnaio

   or use the docker container::

      docker pull quay.io/biocontainers/dnaio:<tag>

   (see `dnaio/tags`_ for valid values for ``<tag>``)


.. |downloads_dnaio| image:: https://img.shields.io/conda/dn/bioconda/dnaio.svg?style=flat
   :target: https://anaconda.org/bioconda/dnaio
   :alt:   (downloads)
.. |docker_dnaio| image:: https://quay.io/repository/biocontainers/dnaio/status
   :target: https://quay.io/repository/biocontainers/dnaio
.. _`dnaio/tags`: https://quay.io/repository/biocontainers/dnaio?tab=tags


.. raw:: html

    <script>
        var package = "dnaio";
        var versions = ["0.7.1","0.7.0","0.6.0","0.5.2","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dnaio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dnaio/README.html