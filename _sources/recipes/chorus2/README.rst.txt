:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chorus2'
.. highlight: bash

chorus2
=======

.. conda:recipe:: chorus2
   :replaces_section_title:
   :noindex:

   A pipeline to select oligonucleotides for fluorescence in situ hbridization \(Oligo\-FISH\).

   :homepage: https://github.com/zhangtaolab/Chorus2
   :documentation: https://chorus2.readthedocs.io/en/dev/
   
   :license: MIT license
   :recipe: /`chorus2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chorus2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chorus2/meta.yaml>`_
   :links: biotools: :biotools:`chorus2`

   


.. conda:package:: chorus2

   |downloads_chorus2| |docker_chorus2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.01-2</code>,  <code>2.01-1</code>,  <code>2.01-0</code>,  <code>2.0.1-0</code>,  <code>2.0-5</code>,  <code>2.0-4</code>,  <code>2.0-3</code>,  <code>2.0-2</code>,  <code>2.0-1</code>,  </span></summary>
      

      ``2.01-2``,  ``2.01-1``,  ``2.01-0``,  ``2.0.1-0``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends bwa: ``>=0.7.3a,<=0.7.8``
   :depends kmer-jellyfish: ``2.*``
   :depends matplotlib-base: ``>=3``
   :depends numpy: 
   :depends pandas: 
   :depends primer3-py: ``>=0.4.2``
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pyfasta: 
   :depends pyqt: ``<5.11``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends samtools: 
   :depends sip: ``>=4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chorus2

   and update with::

      conda update chorus2

   or use the docker container::

      docker pull quay.io/biocontainers/chorus2:<tag>

   (see `chorus2/tags`_ for valid values for ``<tag>``)


.. |downloads_chorus2| image:: https://img.shields.io/conda/dn/bioconda/chorus2.svg?style=flat
   :target: https://anaconda.org/bioconda/chorus2
   :alt:   (downloads)
.. |docker_chorus2| image:: https://quay.io/repository/biocontainers/chorus2/status
   :target: https://quay.io/repository/biocontainers/chorus2
.. _`chorus2/tags`: https://quay.io/repository/biocontainers/chorus2?tab=tags


.. raw:: html

    <script>
        var package = "chorus2";
        var versions = ["2.01","2.01","2.01","2.0.1","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chorus2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chorus2/README.html