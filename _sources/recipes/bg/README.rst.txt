:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bg'
.. highlight: bash

bg
==

.. conda:recipe:: bg
   :replaces_section_title:
   :noindex:

   Implementation of Breakpoint Graph data structure

   :homepage: https://github.com/aganezov/bg
   :license: MIT
   :recipe: /`bg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bg/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.082784.108`

   


.. conda:package:: bg

   |downloads_bg| |docker_bg|

   :versions:
      
      

      ``1.10-0``

      

   
   :depends coverage: 
   :depends decorator: 
   :depends enum-compat: 
   :depends ete3: 
   :depends marshmallow: 
   :depends mock: 
   :depends networkx: ``>=2``
   :depends nose: 
   :depends numpy: 
   :depends pytest: 
   :depends python: 
   :depends scipy: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bg

   and update with::

      conda update bg

   or use the docker container::

      docker pull quay.io/biocontainers/bg:<tag>

   (see `bg/tags`_ for valid values for ``<tag>``)


.. |downloads_bg| image:: https://img.shields.io/conda/dn/bioconda/bg.svg?style=flat
   :target: https://anaconda.org/bioconda/bg
   :alt:   (downloads)
.. |docker_bg| image:: https://quay.io/repository/biocontainers/bg/status
   :target: https://quay.io/repository/biocontainers/bg
.. _`bg/tags`: https://quay.io/repository/biocontainers/bg?tab=tags


.. raw:: html

    <script>
        var package = "bg";
        var versions = ["1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bg/README.html