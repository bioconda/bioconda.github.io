:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mcroni'
.. highlight: bash

mcroni
======

.. conda:recipe:: mcroni
   :replaces_section_title:
   :noindex:

   mcr\-1 analysis

   :homepage: https://github.com/liampshaw/mcroni
   :license: MIT
   :recipe: /`mcroni <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcroni>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mcroni/meta.yaml>`_

   


.. conda:package:: mcroni

   |downloads_mcroni| |docker_mcroni|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mcroni

   and update with::

      conda update mcroni

   or use the docker container::

      docker pull quay.io/biocontainers/mcroni:<tag>

   (see `mcroni/tags`_ for valid values for ``<tag>``)


.. |downloads_mcroni| image:: https://img.shields.io/conda/dn/bioconda/mcroni.svg?style=flat
   :target: https://anaconda.org/bioconda/mcroni
   :alt:   (downloads)
.. |docker_mcroni| image:: https://quay.io/repository/biocontainers/mcroni/status
   :target: https://quay.io/repository/biocontainers/mcroni
.. _`mcroni/tags`: https://quay.io/repository/biocontainers/mcroni?tab=tags


.. raw:: html

    <script>
        var package = "mcroni";
        var versions = ["1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mcroni/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mcroni/README.html