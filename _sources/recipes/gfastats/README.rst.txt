:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfastats'
.. highlight: bash

gfastats
========

.. conda:recipe:: gfastats
   :replaces_section_title:
   :noindex:

   The swiss army knife for genome assembly

   :homepage: https://github.com/vgl-hub/gfastats
   :license: MIT
   :recipe: /`gfastats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfastats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfastats/meta.yaml>`_
   :links: biotools: :biotools:`gfastats`, usegalaxy-eu: :usegalaxy-eu:`gfastats`

   


.. conda:package:: gfastats

   |downloads_gfastats| |docker_gfastats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.6-2</code>,  <code>1.3.6-1</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.4-0</code>,  <code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  </span></summary>
      

      ``1.3.6-2``,  ``1.3.6-1``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gfastats

   and update with::

      conda update gfastats

   or use the docker container::

      docker pull quay.io/biocontainers/gfastats:<tag>

   (see `gfastats/tags`_ for valid values for ``<tag>``)


.. |downloads_gfastats| image:: https://img.shields.io/conda/dn/bioconda/gfastats.svg?style=flat
   :target: https://anaconda.org/bioconda/gfastats
   :alt:   (downloads)
.. |docker_gfastats| image:: https://quay.io/repository/biocontainers/gfastats/status
   :target: https://quay.io/repository/biocontainers/gfastats
.. _`gfastats/tags`: https://quay.io/repository/biocontainers/gfastats?tab=tags


.. raw:: html

    <script>
        var package = "gfastats";
        var versions = ["1.3.6","1.3.6","1.3.6","1.3.5","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfastats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfastats/README.html