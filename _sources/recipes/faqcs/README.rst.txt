:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'faqcs'
.. highlight: bash

faqcs
=====

.. conda:recipe:: faqcs
   :replaces_section_title:
   :noindex:

   Quality Control of Next Generation Sequencing Data.

   :homepage: https://github.com/LANL-Bioinformatics/FaQCs
   :license: BSD 3-Clause
   :recipe: /`faqcs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/faqcs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/faqcs/meta.yaml>`_
   :links: biotools: :biotools:`faqcs`

   


.. conda:package:: faqcs

   |downloads_faqcs| |docker_faqcs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10-4</code>,  <code>2.10-3</code>,  <code>2.10-2</code>,  <code>2.10-1</code>,  <code>2.10-0</code>,  <code>2.09-3</code>,  <code>2.09-2</code>,  <code>2.09-1</code>,  <code>2.09-0</code>,  </span></summary>
      

      ``2.10-4``,  ``2.10-3``,  ``2.10-2``,  ``2.10-1``,  ``2.10-0``,  ``2.09-3``,  ``2.09-2``,  ``2.09-1``,  ``2.09-0``,  ``2.08-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install faqcs

   and update with::

      conda update faqcs

   or use the docker container::

      docker pull quay.io/biocontainers/faqcs:<tag>

   (see `faqcs/tags`_ for valid values for ``<tag>``)


.. |downloads_faqcs| image:: https://img.shields.io/conda/dn/bioconda/faqcs.svg?style=flat
   :target: https://anaconda.org/bioconda/faqcs
   :alt:   (downloads)
.. |docker_faqcs| image:: https://quay.io/repository/biocontainers/faqcs/status
   :target: https://quay.io/repository/biocontainers/faqcs
.. _`faqcs/tags`: https://quay.io/repository/biocontainers/faqcs?tab=tags


.. raw:: html

    <script>
        var package = "faqcs";
        var versions = ["2.10","2.10","2.10","2.10","2.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/faqcs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/faqcs/README.html