:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'angsd'
.. highlight: bash

angsd
=====

.. conda:recipe:: angsd
   :replaces_section_title:
   :noindex:

   ANGSD\: Analysis of next generation Sequencing Data

   :homepage: http://www.popgen.dk/angsd/index.php/ANGSD
   :license: GPLv3, MIT
   :recipe: /`angsd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/angsd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/angsd/meta.yaml>`_
   :links: biotools: :biotools:`angsd`, doi: :doi:`10.1186/s12859-014-0356-4`

   


.. conda:package:: angsd

   |downloads_angsd| |docker_angsd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.935-1</code>,  <code>0.935-0</code>,  <code>0.933-1</code>,  <code>0.933-0</code>,  <code>0.931-1</code>,  <code>0.931-0</code>,  <code>0.923-0</code>,  <code>0.921-2</code>,  <code>0.921-1</code>,  </span></summary>
      

      ``0.935-1``,  ``0.935-0``,  ``0.933-1``,  ``0.933-0``,  ``0.931-1``,  ``0.931-0``,  ``0.923-0``,  ``0.921-2``,  ``0.921-1``,  ``0.921-0``,  ``0.910-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install angsd

   and update with::

      conda update angsd

   or use the docker container::

      docker pull quay.io/biocontainers/angsd:<tag>

   (see `angsd/tags`_ for valid values for ``<tag>``)


.. |downloads_angsd| image:: https://img.shields.io/conda/dn/bioconda/angsd.svg?style=flat
   :target: https://anaconda.org/bioconda/angsd
   :alt:   (downloads)
.. |docker_angsd| image:: https://quay.io/repository/biocontainers/angsd/status
   :target: https://quay.io/repository/biocontainers/angsd
.. _`angsd/tags`: https://quay.io/repository/biocontainers/angsd?tab=tags


.. raw:: html

    <script>
        var package = "angsd";
        var versions = ["0.935","0.935","0.933","0.933","0.931"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/angsd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/angsd/README.html