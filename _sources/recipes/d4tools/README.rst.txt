:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'd4tools'
.. highlight: bash

d4tools
=======

.. conda:recipe:: d4tools
   :replaces_section_title:
   :noindex:

   The D4 command line utility program


   :homepage: https://github.com/38/d4-format
   :license: MIT
   :recipe: /`d4tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/d4tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/d4tools/meta.yaml>`_

   


.. conda:package:: d4tools

   |downloads_d4tools| |docker_d4tools|

   :versions:
      
      

      ``0.3.4-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends starcode: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install d4tools

   and update with::

      conda update d4tools

   or use the docker container::

      docker pull quay.io/biocontainers/d4tools:<tag>

   (see `d4tools/tags`_ for valid values for ``<tag>``)


.. |downloads_d4tools| image:: https://img.shields.io/conda/dn/bioconda/d4tools.svg?style=flat
   :target: https://anaconda.org/bioconda/d4tools
   :alt:   (downloads)
.. |docker_d4tools| image:: https://quay.io/repository/biocontainers/d4tools/status
   :target: https://quay.io/repository/biocontainers/d4tools
.. _`d4tools/tags`: https://quay.io/repository/biocontainers/d4tools?tab=tags


.. raw:: html

    <script>
        var package = "d4tools";
        var versions = ["0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/d4tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/d4tools/README.html