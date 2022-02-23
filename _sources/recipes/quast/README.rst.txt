:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quast'
.. highlight: bash

quast
=====

.. conda:recipe:: quast
   :replaces_section_title:
   :noindex:

   Quality Assessment Tool for Genome Assemblies

   :homepage: http://quast.sourceforge.net/
   :license: Custom
   :recipe: /`quast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quast/meta.yaml>`_
   :links: biotools: :biotools:`quast`, doi: :doi:`10.1093/bioinformatics/btt086`

   


.. conda:package:: quast

   |downloads_quast| |docker_quast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.0.2-7</code>,  <code>5.0.2-6</code>,  <code>5.0.2-5</code>,  <code>5.0.2-4</code>,  <code>5.0.2-3</code>,  <code>5.0.2-2</code>,  <code>5.0.2-1</code>,  <code>5.0.2-0</code>,  <code>5.0.1-0</code>,  </span></summary>
      

      ``5.0.2-7``,  ``5.0.2-6``,  ``5.0.2-5``,  ``5.0.2-4``,  ``5.0.2-3``,  ``5.0.2-2``,  ``5.0.2-1``,  ``5.0.2-0``,  ``5.0.1-0``,  ``5.0.0-1``,  ``5.0.0-0``,  ``4.6.3-2``,  ``4.6.3-1``,  ``4.6.3-0``,  ``4.6.1-0``,  ``4.5-1``,  ``4.4-1``,  ``4.4-0``,  ``4.3-2``,  ``4.3-1``,  ``4.1-1``,  ``4.1-0``,  ``3.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends circos: 
   :depends glimmerhmm: 
   :depends joblib: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends matplotlib-base: 
   :depends minimap2: ``>=2.10``
   :depends openjdk: ``>=8``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends simplejson: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quast

   and update with::

      conda update quast

   or use the docker container::

      docker pull quay.io/biocontainers/quast:<tag>

   (see `quast/tags`_ for valid values for ``<tag>``)


.. |downloads_quast| image:: https://img.shields.io/conda/dn/bioconda/quast.svg?style=flat
   :target: https://anaconda.org/bioconda/quast
   :alt:   (downloads)
.. |docker_quast| image:: https://quay.io/repository/biocontainers/quast/status
   :target: https://quay.io/repository/biocontainers/quast
.. _`quast/tags`: https://quay.io/repository/biocontainers/quast?tab=tags


.. raw:: html

    <script>
        var package = "quast";
        var versions = ["5.0.2","5.0.2","5.0.2","5.0.2","5.0.2"];
    </script>





Notes
-----
\- GeneMark gene prediction software is disabled due to licensing issues



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quast/README.html