:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emboss'
.. highlight: bash

emboss
======

.. conda:recipe:: emboss
   :replaces_section_title:
   :noindex:

   The European Molecular Biology Open Software Suite

   :homepage: http://emboss.open-bio.org/
   :license: GPL
   :recipe: /`emboss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emboss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emboss/meta.yaml>`_

   


.. conda:package:: emboss

   |downloads_emboss| |docker_emboss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.6.0-4</code>,  <code>6.6.0-3</code>,  <code>6.6.0-2</code>,  <code>6.6.0-1</code>,  <code>6.6.0-0</code>,  <code>6.5.7-5</code>,  <code>6.5.7-4</code>,  <code>6.5.7-3</code>,  <code>6.5.7-2</code>,  </span></summary>
      

      ``6.6.0-4``,  ``6.6.0-3``,  ``6.6.0-2``,  ``6.6.0-1``,  ``6.6.0-0``,  ``6.5.7-5``,  ``6.5.7-4``,  ``6.5.7-3``,  ``6.5.7-2``,  ``6.5.7-1``,  ``6.5.7-0``,  ``5.0.0-3``,  ``5.0.0-2``,  ``5.0.0-1``,  ``5.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libgd: ``>=2.3.2,<2.4.0a0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install emboss

   and update with::

      conda update emboss

   or use the docker container::

      docker pull quay.io/biocontainers/emboss:<tag>

   (see `emboss/tags`_ for valid values for ``<tag>``)


.. |downloads_emboss| image:: https://img.shields.io/conda/dn/bioconda/emboss.svg?style=flat
   :target: https://anaconda.org/bioconda/emboss
   :alt:   (downloads)
.. |docker_emboss| image:: https://quay.io/repository/biocontainers/emboss/status
   :target: https://quay.io/repository/biocontainers/emboss
.. _`emboss/tags`: https://quay.io/repository/biocontainers/emboss?tab=tags


.. raw:: html

    <script>
        var package = "emboss";
        var versions = ["6.6.0","6.6.0","6.6.0","6.6.0","6.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emboss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emboss/README.html