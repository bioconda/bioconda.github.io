:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alevin-fry'
.. highlight: bash

alevin-fry
==========

.. conda:recipe:: alevin-fry
   :replaces_section_title:
   :noindex:

   alevin\-fry is a tool for the efficient processing of single\-cell data based on RAD files produced by alevin

   :homepage: https://github.com/COMBINE-lab/alevin-fry
   :license: BSD 3-Clause
   :recipe: /`alevin-fry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alevin-fry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alevin-fry/meta.yaml>`_

   


.. conda:package:: alevin-fry

   |downloads_alevin-fry| |docker_alevin-fry|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-0</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.0-0</code>,  </span></summary>
      

      ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-1``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install alevin-fry

   and update with::

      conda update alevin-fry

   or use the docker container::

      docker pull quay.io/biocontainers/alevin-fry:<tag>

   (see `alevin-fry/tags`_ for valid values for ``<tag>``)


.. |downloads_alevin-fry| image:: https://img.shields.io/conda/dn/bioconda/alevin-fry.svg?style=flat
   :target: https://anaconda.org/bioconda/alevin-fry
   :alt:   (downloads)
.. |docker_alevin-fry| image:: https://quay.io/repository/biocontainers/alevin-fry/status
   :target: https://quay.io/repository/biocontainers/alevin-fry
.. _`alevin-fry/tags`: https://quay.io/repository/biocontainers/alevin-fry?tab=tags


.. raw:: html

    <script>
        var package = "alevin-fry";
        var versions = ["0.5.1","0.5.0","0.5.0","0.4.3","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alevin-fry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alevin-fry/README.html