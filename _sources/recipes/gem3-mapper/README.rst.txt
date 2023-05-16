:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gem3-mapper'
.. highlight: bash

gem3-mapper
===========

.. conda:recipe:: gem3-mapper
   :replaces_section_title:
   :noindex:

   The GEM read mapper \(v3\).

   :homepage: https://github.com/smarco/gem3-mapper
   :license: GPL-3.0
   :recipe: /`gem3-mapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gem3-mapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gem3-mapper/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.2221`, biotools: :biotools:`GEM_Mapper`

   


.. conda:package:: gem3-mapper

   |downloads_gem3-mapper| |docker_gem3-mapper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.6.1-11</code>,  <code>3.6.1-10</code>,  <code>3.6.1-9</code>,  <code>3.6.1-8</code>,  <code>3.6.1-7</code>,  <code>3.6.1-6</code>,  <code>3.6.1-5</code>,  <code>3.6.1-4</code>,  <code>3.6.1-3</code>,  </span></summary>
      

      ``3.6.1-11``,  ``3.6.1-10``,  ``3.6.1-9``,  ``3.6.1-8``,  ``3.6.1-7``,  ``3.6.1-6``,  ``3.6.1-5``,  ``3.6.1-4``,  ``3.6.1-3``,  ``3.6.1-2``,  ``3.6.1-1``,  ``3.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gem3-mapper

   and update with::

      conda update gem3-mapper

   or use the docker container::

      docker pull quay.io/biocontainers/gem3-mapper:<tag>

   (see `gem3-mapper/tags`_ for valid values for ``<tag>``)


.. |downloads_gem3-mapper| image:: https://img.shields.io/conda/dn/bioconda/gem3-mapper.svg?style=flat
   :target: https://anaconda.org/bioconda/gem3-mapper
   :alt:   (downloads)
.. |docker_gem3-mapper| image:: https://quay.io/repository/biocontainers/gem3-mapper/status
   :target: https://quay.io/repository/biocontainers/gem3-mapper
.. _`gem3-mapper/tags`: https://quay.io/repository/biocontainers/gem3-mapper?tab=tags


.. raw:: html

    <script>
        var package = "gem3-mapper";
        var versions = ["3.6.1","3.6.1","3.6.1","3.6.1","3.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gem3-mapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gem3-mapper/README.html