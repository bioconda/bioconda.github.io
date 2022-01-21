:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hicstuff'
.. highlight: bash

hicstuff
========

.. conda:recipe:: hicstuff
   :replaces_section_title:
   :noindex:

   General purpose stuff to generate and handle Hi\-C data in its simplest form.

   :homepage: https://github.com/koszullab/hicstuff
   :documentation: https://hicstuff.readthedocs.io/en/latest/
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hicstuff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicstuff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hicstuff/meta.yaml>`_

   


.. conda:package:: hicstuff

   |downloads_hicstuff| |docker_hicstuff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.2-0</code>,  <code>3.1.1-0</code>,  <code>3.1.0-0</code>,  <code>3.0.3-0</code>,  <code>3.0.2-0</code>,  <code>2.3.2-0</code>,  <code>2.3.1-0</code>,  <code>2.3.0-2</code>,  <code>2.3.0-1</code>,  </span></summary>
      

      ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends bowtie2: 
   :depends docopt: 
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends pyfastx: 
   :depends pysam: 
   :depends python: ``>=3.6,<3.8``
   :depends requests: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hicstuff

   and update with::

      conda update hicstuff

   or use the docker container::

      docker pull quay.io/biocontainers/hicstuff:<tag>

   (see `hicstuff/tags`_ for valid values for ``<tag>``)


.. |downloads_hicstuff| image:: https://img.shields.io/conda/dn/bioconda/hicstuff.svg?style=flat
   :target: https://anaconda.org/bioconda/hicstuff
   :alt:   (downloads)
.. |docker_hicstuff| image:: https://quay.io/repository/biocontainers/hicstuff/status
   :target: https://quay.io/repository/biocontainers/hicstuff
.. _`hicstuff/tags`: https://quay.io/repository/biocontainers/hicstuff?tab=tags


.. raw:: html

    <script>
        var package = "hicstuff";
        var versions = ["3.1.2","3.1.1","3.1.0","3.0.3","3.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hicstuff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hicstuff/README.html