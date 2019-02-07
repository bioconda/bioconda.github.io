.. title:: Package Recipe 'r-xmlrpc'
.. highlight: bash


r-xmlrpc
========

.. conda:recipe:: r-xmlrpc
   :replaces_section_title:

   A simple implementation of XML\-RPC for R.

   :homepage: https://r-forge.r-project.org
   :license: BSD
   :recipe: /`r-xmlrpc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xmlrpc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xmlrpc/meta.yaml>`_

   


.. conda:package:: r-xmlrpc

   |downloads_r-xmlrpc| |docker_r-xmlrpc|

   :versions: 0.2_4

   :depends: :conda:package:`r` 3.2.2* :conda:package:`r-rcurl`  :conda:package:`r-xml`  

   :required~by: |required_by_r-xmlrpc|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-xmlrpc

   and update with::

      conda update r-xmlrpc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-xmlrpc


.. |required_by_r-xmlrpc| conda:required_by:: r-xmlrpc
.. |downloads_r-xmlrpc| image:: https://img.shields.io/conda/dn/bioconda/r-xmlrpc.svg?style=flat
   :alt:   (downloads)
.. |docker_r-xmlrpc| image:: https://quay.io/repository/biocontainers/r-xmlrpc/status
   :target: https://quay.io/repository/biocontainers/r-xmlrpc







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-xmlrpc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-xmlrpc/README.html

