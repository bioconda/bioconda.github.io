:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prokaryote'
.. highlight: bash

prokaryote
==========

.. conda:recipe:: prokaryote
   :replaces_section_title:
   :noindex:

   CellProfiler\'s Java dependencies

   :homepage: https://github.com/CellProfiler/prokaryote
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`prokaryote <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokaryote>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prokaryote/meta.yaml>`_

   


.. conda:package:: prokaryote

   |downloads_prokaryote| |docker_prokaryote|

   :versions:
      
      

      ``2.4.4-0``,  ``2.4.2-0``,  ``2.4.1-1``,  ``2.4.1-0``

      

   
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prokaryote

   and update with::

      conda update prokaryote

   or use the docker container::

      docker pull quay.io/biocontainers/prokaryote:<tag>

   (see `prokaryote/tags`_ for valid values for ``<tag>``)


.. |downloads_prokaryote| image:: https://img.shields.io/conda/dn/bioconda/prokaryote.svg?style=flat
   :target: https://anaconda.org/bioconda/prokaryote
   :alt:   (downloads)
.. |docker_prokaryote| image:: https://quay.io/repository/biocontainers/prokaryote/status
   :target: https://quay.io/repository/biocontainers/prokaryote
.. _`prokaryote/tags`: https://quay.io/repository/biocontainers/prokaryote?tab=tags


.. raw:: html

    <script>
        var package = "prokaryote";
        var versions = ["2.4.4","2.4.2","2.4.1","2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prokaryote/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prokaryote/README.html