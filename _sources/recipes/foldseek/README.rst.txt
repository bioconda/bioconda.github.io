:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'foldseek'
.. highlight: bash

foldseek
========

.. conda:recipe:: foldseek
   :replaces_section_title:
   :noindex:

   Foldseek\: fast and accurate protein structure search

   :homepage: https://github.com/steineggerlab/foldseek
   :license: GPL / GPL-3
   :recipe: /`foldseek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldseek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldseek/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-023-01773-0`, biotools: :biotools:`foldseek`

   


.. conda:package:: foldseek

   |downloads_foldseek| |docker_foldseek|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.29e2557-1</code>,  <code>6.29e2557-0</code>,  <code>5.53465f0-0</code>,  <code>4.645b789-0</code>,  <code>3.915ef7d-1</code>,  <code>3.915ef7d-0</code>,  <code>2.8bd520-1</code>,  <code>2.8bd520-0</code>,  <code>1.3c64211-1</code>,  </span></summary>
      

      ``6.29e2557-1``,  ``6.29e2557-0``,  ``5.53465f0-0``,  ``4.645b789-0``,  ``3.915ef7d-1``,  ``3.915ef7d-0``,  ``2.8bd520-1``,  ``2.8bd520-0``,  ``1.3c64211-1``,  ``1.3c64211-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends aria2: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gawk: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends wget: 
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install foldseek

   and update with::

      conda update foldseek

   or use the docker container::

      docker pull quay.io/biocontainers/foldseek:<tag>

   (see `foldseek/tags`_ for valid values for ``<tag>``)


.. |downloads_foldseek| image:: https://img.shields.io/conda/dn/bioconda/foldseek.svg?style=flat
   :target: https://anaconda.org/bioconda/foldseek
   :alt:   (downloads)
.. |docker_foldseek| image:: https://quay.io/repository/biocontainers/foldseek/status
   :target: https://quay.io/repository/biocontainers/foldseek
.. _`foldseek/tags`: https://quay.io/repository/biocontainers/foldseek?tab=tags


.. raw:: html

    <script>
        var package = "foldseek";
        var versions = ["6.29e2557","6.29e2557","5.53465f0","4.645b789","3.915ef7d"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/foldseek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/foldseek/README.html