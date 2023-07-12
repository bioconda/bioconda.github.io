:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-xmlrpc'
.. highlight: bash

r-xmlrpc
========

.. conda:recipe:: r-xmlrpc
   :replaces_section_title:
   :noindex:

   A simple implementation of XML\-RPC for R.

   :homepage: https://r-forge.r-project.org
   :license: BSD
   :recipe: /`r-xmlrpc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xmlrpc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xmlrpc/meta.yaml>`_

   


.. conda:package:: r-xmlrpc

   |downloads_r-xmlrpc| |docker_r-xmlrpc|

   :versions:
      
      

      ``0.2_4-7``,  ``0.2_4-6``,  ``0.2_4-5``,  ``0.2_4-4``,  ``0.2_4-3``,  ``0.2_4-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcurl: 
   :depends r-xml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-xmlrpc

   and update with::

      conda update r-xmlrpc

   or use the docker container::

      docker pull quay.io/biocontainers/r-xmlrpc:<tag>

   (see `r-xmlrpc/tags`_ for valid values for ``<tag>``)


.. |downloads_r-xmlrpc| image:: https://img.shields.io/conda/dn/bioconda/r-xmlrpc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-xmlrpc
   :alt:   (downloads)
.. |docker_r-xmlrpc| image:: https://quay.io/repository/biocontainers/r-xmlrpc/status
   :target: https://quay.io/repository/biocontainers/r-xmlrpc
.. _`r-xmlrpc/tags`: https://quay.io/repository/biocontainers/r-xmlrpc?tab=tags


.. raw:: html

    <script>
        var package = "r-xmlrpc";
        var versions = ["0.2_4","0.2_4","0.2_4","0.2_4","0.2_4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-xmlrpc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-xmlrpc/README.html