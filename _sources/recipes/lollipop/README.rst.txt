:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lollipop'
.. highlight: bash

lollipop
========

.. conda:recipe:: lollipop
   :replaces_section_title:
   :noindex:

   A tool for Deconvolution for Wastewater Genomics

   :homepage: https://github.com/cbg-ethz/LolliPop
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`lollipop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lollipop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lollipop/meta.yaml>`_

   


.. conda:package:: lollipop

   |downloads_lollipop| |docker_lollipop|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends click: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3``
   :depends ruamel_yaml: 
   :depends scipy: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lollipop

   and update with::

      conda update lollipop

   or use the docker container::

      docker pull quay.io/biocontainers/lollipop:<tag>

   (see `lollipop/tags`_ for valid values for ``<tag>``)


.. |downloads_lollipop| image:: https://img.shields.io/conda/dn/bioconda/lollipop.svg?style=flat
   :target: https://anaconda.org/bioconda/lollipop
   :alt:   (downloads)
.. |docker_lollipop| image:: https://quay.io/repository/biocontainers/lollipop/status
   :target: https://quay.io/repository/biocontainers/lollipop
.. _`lollipop/tags`: https://quay.io/repository/biocontainers/lollipop?tab=tags


.. raw:: html

    <script>
        var package = "lollipop";
        var versions = ["0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lollipop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lollipop/README.html