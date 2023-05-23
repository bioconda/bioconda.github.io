:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'auspice'
.. highlight: bash

auspice
=======

.. conda:recipe:: auspice
   :replaces_section_title:
   :noindex:

   Auspice is an open\-source interactive tool for visualising phylogenomic data

   :homepage: https://docs.nextstrain.org/projects/auspice/
   :developer docs: https://github.com/nextstrain/auspice
   :license: AGPL / AGPL-3.0
   :recipe: /`auspice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/auspice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/auspice/meta.yaml>`_

   


.. conda:package:: auspice

   |downloads_auspice| |docker_auspice|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.46.0-0</code>,  <code>2.45.1-2</code>,  <code>2.45.1-1</code>,  <code>2.45.1-0</code>,  <code>2.45.0-0</code>,  <code>2.44.0-0</code>,  <code>2.43.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.1-0</code>,  </span></summary>
      

      ``2.46.0-0``,  ``2.45.1-2``,  ``2.45.1-1``,  ``2.45.1-0``,  ``2.45.0-0``,  ``2.44.0-0``,  ``2.43.0-0``,  ``2.42.0-0``,  ``2.40.1-0``,  ``2.40.0-0``,  ``2.39.0-1``,  ``2.39.0-0``,  ``2.38.0-1``,  ``2.38.0-0``,  ``2.37.3-1``,  ``2.37.3-0``,  ``2.37.1-1``,  ``2.37.1-0``,  ``2.29.1-1``,  ``2.29.1-0``,  ``2.23.0-1``,  ``2.23.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends nodejs: ``14.*|16.*|18.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install auspice

   and update with::

      conda update auspice

   or use the docker container::

      docker pull quay.io/biocontainers/auspice:<tag>

   (see `auspice/tags`_ for valid values for ``<tag>``)


.. |downloads_auspice| image:: https://img.shields.io/conda/dn/bioconda/auspice.svg?style=flat
   :target: https://anaconda.org/bioconda/auspice
   :alt:   (downloads)
.. |docker_auspice| image:: https://quay.io/repository/biocontainers/auspice/status
   :target: https://quay.io/repository/biocontainers/auspice
.. _`auspice/tags`: https://quay.io/repository/biocontainers/auspice?tab=tags


.. raw:: html

    <script>
        var package = "auspice";
        var versions = ["2.46.0","2.45.1","2.45.1","2.45.1","2.45.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/auspice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/auspice/README.html