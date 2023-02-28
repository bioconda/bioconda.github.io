:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tabview'
.. highlight: bash

tabview
=======

.. conda:recipe:: tabview
   :replaces_section_title:
   :noindex:

   A curses command\-line CSV and list \(tabular data\) viewer

   :homepage: https://github.com/firecat53/tabview
   :license: MIT License
   :recipe: /`tabview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabview/meta.yaml>`_

   


.. conda:package:: tabview

   |downloads_tabview| |docker_tabview|

   :versions:
      
      

      ``1.4.3-0``,  ``1.4.2-2``,  ``1.4.2-1``

      

   
   :depends ncurses: ``>=6.1,<6.2.0a0``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tabview

   and update with::

      conda update tabview

   or use the docker container::

      docker pull quay.io/biocontainers/tabview:<tag>

   (see `tabview/tags`_ for valid values for ``<tag>``)


.. |downloads_tabview| image:: https://img.shields.io/conda/dn/bioconda/tabview.svg?style=flat
   :target: https://anaconda.org/bioconda/tabview
   :alt:   (downloads)
.. |docker_tabview| image:: https://quay.io/repository/biocontainers/tabview/status
   :target: https://quay.io/repository/biocontainers/tabview
.. _`tabview/tags`: https://quay.io/repository/biocontainers/tabview?tab=tags


.. raw:: html

    <script>
        var package = "tabview";
        var versions = ["1.4.3","1.4.2","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tabview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tabview/README.html