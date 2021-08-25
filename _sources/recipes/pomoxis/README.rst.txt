:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pomoxis'
.. highlight: bash

pomoxis
=======

.. conda:recipe:: pomoxis
   :replaces_section_title:
   :noindex:

   Assembly\, consensensus\, and analysis tools by ONT research

   :homepage: https://github.com/nanoporetech/pomoxis
   :documentation: https://nanoporetech.github.io/pomoxis/index.html
   
   :license: OTHER / Mozilla Public License 2.0
   :recipe: /`pomoxis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pomoxis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pomoxis/meta.yaml>`_

   


.. conda:package:: pomoxis

   |downloads_pomoxis| |docker_pomoxis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.9-0</code>,  <code>0.3.8-0</code>,  <code>0.3.7-0</code>,  <code>0.3.6-0</code>,  <code>0.3.5-1</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  <code>0.3.2-1</code>,  <code>0.3.2-0</code>,  </span></summary>
      

      ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: ``>=1.9``
   :depends bedtools: ``>=2.29.0``
   :depends biopython: ``>=1.63``
   :depends intervaltree: ``>=3``
   :depends matplotlib-base: ``>=3.2.1``
   :depends miniasm: ``>=0.3_r179``
   :depends minimap2: ``>=2.17``
   :depends numpy: ``>=1.16.1``
   :depends pandas: ``>=0.24.2``
   :depends porechop: 
   :depends pysam: ``>=0.15.2``
   :depends python: ``>=3.6``
   :depends racon: ``>=1.3.1``
   :depends samtools: ``>=1.9``
   :depends seqkit: ``>=0.8.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pomoxis

   and update with::

      conda update pomoxis

   or use the docker container::

      docker pull quay.io/biocontainers/pomoxis:<tag>

   (see `pomoxis/tags`_ for valid values for ``<tag>``)


.. |downloads_pomoxis| image:: https://img.shields.io/conda/dn/bioconda/pomoxis.svg?style=flat
   :target: https://anaconda.org/bioconda/pomoxis
   :alt:   (downloads)
.. |docker_pomoxis| image:: https://quay.io/repository/biocontainers/pomoxis/status
   :target: https://quay.io/repository/biocontainers/pomoxis
.. _`pomoxis/tags`: https://quay.io/repository/biocontainers/pomoxis?tab=tags


.. raw:: html

    <script>
        var package = "pomoxis";
        var versions = ["0.3.9","0.3.8","0.3.7","0.3.6","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pomoxis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pomoxis/README.html