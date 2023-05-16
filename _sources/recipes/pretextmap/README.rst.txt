:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pretextmap'
.. highlight: bash

pretextmap
==========

.. conda:recipe:: pretextmap
   :replaces_section_title:
   :noindex:

   Paired REad TEXTure Mapper. Converts SAM formatted read pairs into genome contact maps.

   :homepage: https://github.com/wtsi-hpag/PretextMap
   :license: MIT / MIT
   :recipe: /`pretextmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextmap/meta.yaml>`_

   


.. conda:package:: pretextmap

   |downloads_pretextmap| |docker_pretextmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.9-3</code>,  <code>0.1.9-2</code>,  <code>0.1.9-1</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  <code>0.1.7-0</code>,  <code>0.1.6-0</code>,  <code>0.1.5-0</code>,  <code>0.1.4-0</code>,  </span></summary>
      

      ``0.1.9-3``,  ``0.1.9-2``,  ``0.1.9-1``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pretextmap

   and update with::

      conda update pretextmap

   or use the docker container::

      docker pull quay.io/biocontainers/pretextmap:<tag>

   (see `pretextmap/tags`_ for valid values for ``<tag>``)


.. |downloads_pretextmap| image:: https://img.shields.io/conda/dn/bioconda/pretextmap.svg?style=flat
   :target: https://anaconda.org/bioconda/pretextmap
   :alt:   (downloads)
.. |docker_pretextmap| image:: https://quay.io/repository/biocontainers/pretextmap/status
   :target: https://quay.io/repository/biocontainers/pretextmap
.. _`pretextmap/tags`: https://quay.io/repository/biocontainers/pretextmap?tab=tags


.. raw:: html

    <script>
        var package = "pretextmap";
        var versions = ["0.1.9","0.1.9","0.1.9","0.1.9","0.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pretextmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pretextmap/README.html