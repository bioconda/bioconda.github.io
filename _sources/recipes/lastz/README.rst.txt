:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lastz'
.. highlight: bash

lastz
=====

.. conda:recipe:: lastz
   :replaces_section_title:
   :noindex:

   LASTZ is a program for aligning DNA sequences\, a pairwise aligner.

   :homepage: http://www.bx.psu.edu/~rsharris/lastz/
   :license: MIT
   :recipe: /`lastz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lastz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lastz/meta.yaml>`_
   :links: biotools: :biotools:`lastz`

   


.. conda:package:: lastz

   |downloads_lastz| |docker_lastz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.04.22-0</code>,  <code>1.04.15-3</code>,  <code>1.04.15-2</code>,  <code>1.04.15-1</code>,  <code>1.04.15-0</code>,  <code>1.0.4-5</code>,  <code>1.0.4-4</code>,  <code>1.0.4-3</code>,  <code>1.0.4-2</code>,  </span></summary>
      

      ``1.04.22-0``,  ``1.04.15-3``,  ``1.04.15-2``,  ``1.04.15-1``,  ``1.04.15-0``,  ``1.0.4-5``,  ``1.0.4-4``,  ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lastz

   and update with::

      conda update lastz

   or use the docker container::

      docker pull quay.io/biocontainers/lastz:<tag>

   (see `lastz/tags`_ for valid values for ``<tag>``)


.. |downloads_lastz| image:: https://img.shields.io/conda/dn/bioconda/lastz.svg?style=flat
   :target: https://anaconda.org/bioconda/lastz
   :alt:   (downloads)
.. |docker_lastz| image:: https://quay.io/repository/biocontainers/lastz/status
   :target: https://quay.io/repository/biocontainers/lastz
.. _`lastz/tags`: https://quay.io/repository/biocontainers/lastz?tab=tags


.. raw:: html

    <script>
        var package = "lastz";
        var versions = ["1.04.22","1.04.15","1.04.15","1.04.15","1.04.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lastz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lastz/README.html