:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sentieon'
.. highlight: bash

sentieon
========

.. conda:recipe:: sentieon
   :replaces_section_title:
   :noindex:

   Accelerated performance bioinformatics tools for mapping and variant calling

   :homepage: https://www.sentieon.com
   :license: Commercial (requires license for use; redistribution allowed)
   :recipe: /`sentieon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sentieon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sentieon/meta.yaml>`_

   


.. conda:package:: sentieon

   |downloads_sentieon| |docker_sentieon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>202112.06-0</code>,  <code>202112.05-1</code>,  <code>202112.05-0</code>,  <code>202112.04-1</code>,  <code>202112.04-0</code>,  <code>202112.02-0</code>,  <code>202112.01-0</code>,  <code>202112-1</code>,  <code>202112-0</code>,  </span></summary>
      

      ``202112.06-0``,  ``202112.05-1``,  ``202112.05-0``,  ``202112.04-1``,  ``202112.04-0``,  ``202112.02-0``,  ``202112.01-0``,  ``202112-1``,  ``202112-0``,  ``202010.04-0``,  ``202010.02-0``,  ``201808.08-1``,  ``201808.08-0``,  ``201808.07-0``,  ``201808.05-0``,  ``201808.03-0``,  ``201808.02-0``,  ``201808.01-0``,  ``201808-0``,  ``201711.04-3``,  ``201711.04-2``,  ``201711.03-1``,  ``201711.03-0``,  ``201711.02-0``,  ``201711.01-2``,  ``201711.01-1``,  ``201711.01-0``,  ``201711-0``,  ``201704.03-0``,  ``201704.02-0``,  ``201704-0``,  ``201611.03-0``,  ``201611-0``,  ``201606-0``,  ``201603.02-1``,  ``201603.02-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=2.7``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sentieon

   and update with::

      conda update sentieon

   or use the docker container::

      docker pull quay.io/biocontainers/sentieon:<tag>

   (see `sentieon/tags`_ for valid values for ``<tag>``)


.. |downloads_sentieon| image:: https://img.shields.io/conda/dn/bioconda/sentieon.svg?style=flat
   :target: https://anaconda.org/bioconda/sentieon
   :alt:   (downloads)
.. |docker_sentieon| image:: https://quay.io/repository/biocontainers/sentieon/status
   :target: https://quay.io/repository/biocontainers/sentieon
.. _`sentieon/tags`: https://quay.io/repository/biocontainers/sentieon?tab=tags


.. raw:: html

    <script>
        var package = "sentieon";
        var versions = ["202112.06","202112.05","202112.05","202112.04","202112.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sentieon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sentieon/README.html