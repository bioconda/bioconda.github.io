:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segemehl'
.. highlight: bash

segemehl
========

.. conda:recipe:: segemehl
   :replaces_section_title:
   :noindex:

   Short read mapping with gaps

   :homepage: http://www.bioinf.uni-leipzig.de/Software/segemehl/
   :license: GPL3
   :recipe: /`segemehl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segemehl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segemehl/meta.yaml>`_
   :links: biotools: :biotools:`segemehl`, usegalaxy-eu: :usegalaxy-eu:`segemehl`

   


.. conda:package:: segemehl

   |downloads_segemehl| |docker_segemehl|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.4-8</code>,  <code>0.3.4-7</code>,  <code>0.3.4-6</code>,  <code>0.3.4-5</code>,  <code>0.3.4-4</code>,  <code>0.3.4-3</code>,  <code>0.3.4-2</code>,  <code>0.3.4-1</code>,  <code>0.3.4-0</code>,  </span></summary>
      

      ``0.3.4-8``,  ``0.3.4-7``,  ``0.3.4-6``,  ``0.3.4-5``,  ``0.3.4-4``,  ``0.3.4-3``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.1-7``,  ``0.3.1-6``,  ``0.3.1-5``,  ``0.3.1-4``,  ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.0-9``,  ``0.2.0-8``,  ``0.2.0-7``,  ``0.2.0-6``,  ``0.2.0-5``,  ``0.2.0-4``,  ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ncurses: ``>=6.3,<7.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install segemehl

   and update with::

      conda update segemehl

   or use the docker container::

      docker pull quay.io/biocontainers/segemehl:<tag>

   (see `segemehl/tags`_ for valid values for ``<tag>``)


.. |downloads_segemehl| image:: https://img.shields.io/conda/dn/bioconda/segemehl.svg?style=flat
   :target: https://anaconda.org/bioconda/segemehl
   :alt:   (downloads)
.. |docker_segemehl| image:: https://quay.io/repository/biocontainers/segemehl/status
   :target: https://quay.io/repository/biocontainers/segemehl
.. _`segemehl/tags`: https://quay.io/repository/biocontainers/segemehl?tab=tags


.. raw:: html

    <script>
        var package = "segemehl";
        var versions = ["0.3.4","0.3.4","0.3.4","0.3.4","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segemehl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segemehl/README.html