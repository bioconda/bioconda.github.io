:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmc'
.. highlight: bash

kmc
===

.. conda:recipe:: kmc
   :replaces_section_title:
   :noindex:

   Tools for efficient k\-mer counting and filtering of reads based on k\-mer content.

   :homepage: https://github.com/refresh-bio/kmc
   :license: GPL / GPL-3
   :recipe: /`kmc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmc/meta.yaml>`_

   KMC is a utility designed for counting k\-mers \(sequences
   of consecutive k symbols\) in a set of DNA sequences. KMC tools allow performing various operations on k\-mers sets.



.. conda:package:: kmc

   |downloads_kmc| |docker_kmc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.1-2</code>,  <code>3.2.1-1</code>,  <code>3.2.1-0</code>,  <code>3.1.2rc1-0</code>,  <code>3.1.1-1</code>,  <code>3.1.1-0</code>,  <code>3.1.1rc1-2</code>,  <code>3.1.1rc1-1</code>,  <code>3.1.1rc1-0</code>,  </span></summary>
      

      ``3.2.1-2``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.1.2rc1-0``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.1.1rc1-2``,  ``3.1.1rc1-1``,  ``3.1.1rc1-0``,  ``3.1.0-0``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-3``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kmc

   and update with::

      conda update kmc

   or use the docker container::

      docker pull quay.io/biocontainers/kmc:<tag>

   (see `kmc/tags`_ for valid values for ``<tag>``)


.. |downloads_kmc| image:: https://img.shields.io/conda/dn/bioconda/kmc.svg?style=flat
   :target: https://anaconda.org/bioconda/kmc
   :alt:   (downloads)
.. |docker_kmc| image:: https://quay.io/repository/biocontainers/kmc/status
   :target: https://quay.io/repository/biocontainers/kmc
.. _`kmc/tags`: https://quay.io/repository/biocontainers/kmc?tab=tags


.. raw:: html

    <script>
        var package = "kmc";
        var versions = ["3.2.1","3.2.1","3.2.1","3.1.2rc1","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmc/README.html