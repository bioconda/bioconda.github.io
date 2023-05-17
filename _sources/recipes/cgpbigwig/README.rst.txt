:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgpbigwig'
.. highlight: bash

cgpbigwig
=========

.. conda:recipe:: cgpbigwig
   :replaces_section_title:
   :noindex:

   BigWig manpulation tools using libBigWig and htslib

   :homepage: https://github.com/cancerit/cgpBigWig
   :license: GPLv3
   :recipe: /`cgpbigwig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgpbigwig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgpbigwig/meta.yaml>`_

   


.. conda:package:: cgpbigwig

   |downloads_cgpbigwig| |docker_cgpbigwig|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.0-7</code>,  <code>1.6.0-6</code>,  <code>1.6.0-5</code>,  <code>1.6.0-4</code>,  <code>1.6.0-3</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.5.2-0</code>,  </span></summary>
      

      ``1.6.0-7``,  ``1.6.0-6``,  ``1.6.0-5``,  ``1.6.0-4``,  ``1.6.0-3``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gmp: ``>=6.2.1,<7.0a0``
   :depends gnutls: ``>=3.7.8,<3.8.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libbigwig: ``>=0.4.7,<0.5.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libtasn1: ``>=4.19.0,<5.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends nettle: ``>=3.8.1,<3.9.0a0``
   :depends p11-kit: ``>=0.24.1,<0.25.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgpbigwig

   and update with::

      conda update cgpbigwig

   or use the docker container::

      docker pull quay.io/biocontainers/cgpbigwig:<tag>

   (see `cgpbigwig/tags`_ for valid values for ``<tag>``)


.. |downloads_cgpbigwig| image:: https://img.shields.io/conda/dn/bioconda/cgpbigwig.svg?style=flat
   :target: https://anaconda.org/bioconda/cgpbigwig
   :alt:   (downloads)
.. |docker_cgpbigwig| image:: https://quay.io/repository/biocontainers/cgpbigwig/status
   :target: https://quay.io/repository/biocontainers/cgpbigwig
.. _`cgpbigwig/tags`: https://quay.io/repository/biocontainers/cgpbigwig?tab=tags


.. raw:: html

    <script>
        var package = "cgpbigwig";
        var versions = ["1.6.0","1.6.0","1.6.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgpbigwig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgpbigwig/README.html