:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakefmt'
.. highlight: bash

snakefmt
========

.. conda:recipe:: snakefmt
   :replaces_section_title:
   :noindex:

   The uncompromising Snakemake code formatter

   :homepage: https://github.com/snakemake/snakefmt
   :license: MIT / MIT
   :recipe: /`snakefmt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakefmt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakefmt/meta.yaml>`_

   


.. conda:package:: snakefmt

   |downloads_snakefmt| |docker_snakefmt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.1-0</code>,  <code>0.2.6-0</code>,  <code>0.2.5-0</code>,  </span></summary>
      

      ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.5-0``,  ``0.1.3-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends black: ``>=21.7.b0,<22.0``
   :depends click: ``>=7.1.2,<8.0.0``
   :depends importlib_metadata: ``>=1.7,<2.0.0``
   :depends python: ``>=3.6``
   :depends toml: ``>=0.10.2,<0.11.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snakefmt

   and update with::

      conda update snakefmt

   or use the docker container::

      docker pull quay.io/biocontainers/snakefmt:<tag>

   (see `snakefmt/tags`_ for valid values for ``<tag>``)


.. |downloads_snakefmt| image:: https://img.shields.io/conda/dn/bioconda/snakefmt.svg?style=flat
   :target: https://anaconda.org/bioconda/snakefmt
   :alt:   (downloads)
.. |docker_snakefmt| image:: https://quay.io/repository/biocontainers/snakefmt/status
   :target: https://quay.io/repository/biocontainers/snakefmt
.. _`snakefmt/tags`: https://quay.io/repository/biocontainers/snakefmt?tab=tags


.. raw:: html

    <script>
        var package = "snakefmt";
        var versions = ["0.5.0","0.4.4","0.4.3","0.4.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakefmt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakefmt/README.html