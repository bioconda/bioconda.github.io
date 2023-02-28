:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chira'
.. highlight: bash

chira
=====

.. conda:recipe:: chira
   :replaces_section_title:
   :noindex:

   An integrated framework for annotation and visualization of chimeric reads.

   :homepage: https://github.com/pavanvidem/chira/
   :license: GNU GENERAL PUBLIC LICENSE Version 3
   :recipe: /`chira <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chira>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chira/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`chira_quantify`

   


.. conda:package:: chira

   |downloads_chira| |docker_chira|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.3-2</code>,  <code>1.4.3-1</code>,  <code>1.4.3-0</code>,  <code>1.4.2-0</code>,  <code>1.4.0-0</code>,  <code>1.3.7-1</code>,  <code>1.3.7-0</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  </span></summary>
      

      ``1.4.3-2``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.3.7-1``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.2.0-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: ``>=0.6.6``
   :depends bedtools: ``>=2.29.2``
   :depends biopython: ``>=1.76``
   :depends blockbuster: ``>=0.0.1.1``
   :depends bwa: ``>=0.7.17``
   :depends clan: ``>=0.05``
   :depends coreutils: ``>=8.31``
   :depends intarna: ``>=3.2.0``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>3``
   :depends samtools: ``>=1.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chira

   and update with::

      conda update chira

   or use the docker container::

      docker pull quay.io/biocontainers/chira:<tag>

   (see `chira/tags`_ for valid values for ``<tag>``)


.. |downloads_chira| image:: https://img.shields.io/conda/dn/bioconda/chira.svg?style=flat
   :target: https://anaconda.org/bioconda/chira
   :alt:   (downloads)
.. |docker_chira| image:: https://quay.io/repository/biocontainers/chira/status
   :target: https://quay.io/repository/biocontainers/chira
.. _`chira/tags`: https://quay.io/repository/biocontainers/chira?tab=tags


.. raw:: html

    <script>
        var package = "chira";
        var versions = ["1.4.3","1.4.3","1.4.3","1.4.2","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chira/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chira/README.html