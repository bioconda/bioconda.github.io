:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parent-map'
.. highlight: bash

parent-map
==========

.. conda:recipe:: parent-map
   :replaces_section_title:
   :noindex:

   Analyze parental contributions to evolved or engineered protein or DNA sequences

   :homepage: https://github.com/damienmarsic/parent-map
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`parent-map <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parent-map>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parent-map/meta.yaml>`_

   


.. conda:package:: parent-map

   |downloads_parent-map| |docker_parent-map|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.4-0``,  ``1.0.2-0``

      

   
   :depends gooey: 
   :depends pandas: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install parent-map

   and update with::

      conda update parent-map

   or use the docker container::

      docker pull quay.io/biocontainers/parent-map:<tag>

   (see `parent-map/tags`_ for valid values for ``<tag>``)


.. |downloads_parent-map| image:: https://img.shields.io/conda/dn/bioconda/parent-map.svg?style=flat
   :target: https://anaconda.org/bioconda/parent-map
   :alt:   (downloads)
.. |docker_parent-map| image:: https://quay.io/repository/biocontainers/parent-map/status
   :target: https://quay.io/repository/biocontainers/parent-map
.. _`parent-map/tags`: https://quay.io/repository/biocontainers/parent-map?tab=tags


.. raw:: html

    <script>
        var package = "parent-map";
        var versions = ["1.1.2","1.1.1","1.1.0","1.0.4","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parent-map/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parent-map/README.html