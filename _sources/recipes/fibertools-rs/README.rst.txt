:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fibertools-rs'
.. highlight: bash

fibertools-rs
=============

.. conda:recipe:: fibertools-rs
   :replaces_section_title:
   :noindex:

   Mitchell Vollger\'s rust tools for fiberseq data.

   :homepage: https://github.com/fiberseq/fibertools-rs
   :license: MIT
   :recipe: /`fibertools-rs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fibertools-rs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fibertools-rs/meta.yaml>`_

   


.. conda:package:: fibertools-rs

   |downloads_fibertools-rs| |docker_fibertools-rs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.3-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.4-1</code>,  <code>0.1.4-0</code>,  <code>0.1.3-0</code>,  <code>0.1.2-0</code>,  <code>0.1.1-1</code>,  </span></summary>
      

      ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fibertools-rs

   and update with::

      conda update fibertools-rs

   or use the docker container::

      docker pull quay.io/biocontainers/fibertools-rs:<tag>

   (see `fibertools-rs/tags`_ for valid values for ``<tag>``)


.. |downloads_fibertools-rs| image:: https://img.shields.io/conda/dn/bioconda/fibertools-rs.svg?style=flat
   :target: https://anaconda.org/bioconda/fibertools-rs
   :alt:   (downloads)
.. |docker_fibertools-rs| image:: https://quay.io/repository/biocontainers/fibertools-rs/status
   :target: https://quay.io/repository/biocontainers/fibertools-rs
.. _`fibertools-rs/tags`: https://quay.io/repository/biocontainers/fibertools-rs?tab=tags


.. raw:: html

    <script>
        var package = "fibertools-rs";
        var versions = ["0.2.3","0.2.2","0.2.1","0.2.0","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fibertools-rs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fibertools-rs/README.html