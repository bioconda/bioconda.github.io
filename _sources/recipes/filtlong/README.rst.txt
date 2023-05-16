:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'filtlong'
.. highlight: bash

filtlong
========

.. conda:recipe:: filtlong
   :replaces_section_title:
   :noindex:

   Filtlong is a tool for filtering long reads. It can take a set of long reads and produce a smaller\, better subset. It uses both read length \(longer is better\) and read identity \(higher is better\) when choosing which reads pass the filter.

   :homepage: https://github.com/rrwick/Filtlong
   :license: GPL-3.0
   :recipe: /`filtlong <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/filtlong>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/filtlong/meta.yaml>`_

   


.. conda:package:: filtlong

   |downloads_filtlong| |docker_filtlong|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.1-2</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  <code>0.2.0-4</code>,  <code>0.2.0-3</code>,  <code>0.2.0-2</code>,  <code>0.2.0-1</code>,  <code>0.2.0-0</code>,  <code>0.1.1-0</code>,  </span></summary>
      

      ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-4``,  ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install filtlong

   and update with::

      conda update filtlong

   or use the docker container::

      docker pull quay.io/biocontainers/filtlong:<tag>

   (see `filtlong/tags`_ for valid values for ``<tag>``)


.. |downloads_filtlong| image:: https://img.shields.io/conda/dn/bioconda/filtlong.svg?style=flat
   :target: https://anaconda.org/bioconda/filtlong
   :alt:   (downloads)
.. |docker_filtlong| image:: https://quay.io/repository/biocontainers/filtlong/status
   :target: https://quay.io/repository/biocontainers/filtlong
.. _`filtlong/tags`: https://quay.io/repository/biocontainers/filtlong?tab=tags


.. raw:: html

    <script>
        var package = "filtlong";
        var versions = ["0.2.1","0.2.1","0.2.1","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/filtlong/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/filtlong/README.html