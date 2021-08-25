:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vt'
.. highlight: bash

vt
==

.. conda:recipe:: vt
   :replaces_section_title:
   :noindex:

   A tool set for manipulating and generating VCF files

   :homepage: https://genome.sph.umich.edu/wiki/Vt
   :license: MIT
   :recipe: /`vt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vt/meta.yaml>`_

   


.. conda:package:: vt

   |downloads_vt| |docker_vt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2015.11.10-4</code>,  <code>2015.11.10-3</code>,  <code>2015.11.10-2</code>,  <code>2015.11.10-1</code>,  <code>2015.11.10-0</code>,  <code>0.57721-4</code>,  <code>0.57721-3</code>,  <code>0.57721-2</code>,  <code>0.57721-1</code>,  </span></summary>
      

      ``2015.11.10-4``,  ``2015.11.10-3``,  ``2015.11.10-2``,  ``2015.11.10-1``,  ``2015.11.10-0``,  ``0.57721-4``,  ``0.57721-3``,  ``0.57721-2``,  ``0.57721-1``,  ``0.57721-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends pcre2: ``>=10.35,<10.36.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vt

   and update with::

      conda update vt

   or use the docker container::

      docker pull quay.io/biocontainers/vt:<tag>

   (see `vt/tags`_ for valid values for ``<tag>``)


.. |downloads_vt| image:: https://img.shields.io/conda/dn/bioconda/vt.svg?style=flat
   :target: https://anaconda.org/bioconda/vt
   :alt:   (downloads)
.. |docker_vt| image:: https://quay.io/repository/biocontainers/vt/status
   :target: https://quay.io/repository/biocontainers/vt
.. _`vt/tags`: https://quay.io/repository/biocontainers/vt?tab=tags


.. raw:: html

    <script>
        var package = "vt";
        var versions = ["2015.11.10","2015.11.10","2015.11.10","2015.11.10","2015.11.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vt/README.html