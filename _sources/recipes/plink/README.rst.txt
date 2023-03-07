:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plink'
.. highlight: bash

plink
=====

.. conda:recipe:: plink
   :replaces_section_title:
   :noindex:

   Whole genome association analysis toolset\, designed to perform a range of basic\, large\-scale analyses in a computationally efficient manner.

   :homepage: https://www.cog-genomics.org/plink2
   :license: GPL
   :recipe: /`plink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plink/meta.yaml>`_

   


.. conda:package:: plink

   |downloads_plink| |docker_plink|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.90b6.21-3</code>,  <code>1.90b6.21-2</code>,  <code>1.90b6.21-1</code>,  <code>1.90b6.21-0</code>,  <code>1.90b6.18-1</code>,  <code>1.90b6.18-0</code>,  <code>1.90b6.12-2</code>,  <code>1.90b6.12-1</code>,  <code>1.90b6.12-0</code>,  </span></summary>
      

      ``1.90b6.21-3``,  ``1.90b6.21-2``,  ``1.90b6.21-1``,  ``1.90b6.21-0``,  ``1.90b6.18-1``,  ``1.90b6.18-0``,  ``1.90b6.12-2``,  ``1.90b6.12-1``,  ``1.90b6.12-0``,  ``1.90b5-1``,  ``1.90b5-0``,  ``1.90b4-3``,  ``1.90b4-2``,  ``1.90b4-1``,  ``1.90b4-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plink

   and update with::

      conda update plink

   or use the docker container::

      docker pull quay.io/biocontainers/plink:<tag>

   (see `plink/tags`_ for valid values for ``<tag>``)


.. |downloads_plink| image:: https://img.shields.io/conda/dn/bioconda/plink.svg?style=flat
   :target: https://anaconda.org/bioconda/plink
   :alt:   (downloads)
.. |docker_plink| image:: https://quay.io/repository/biocontainers/plink/status
   :target: https://quay.io/repository/biocontainers/plink
.. _`plink/tags`: https://quay.io/repository/biocontainers/plink?tab=tags


.. raw:: html

    <script>
        var package = "plink";
        var versions = ["1.90b6.21","1.90b6.21","1.90b6.21","1.90b6.21","1.90b6.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plink/README.html