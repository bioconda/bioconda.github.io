:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromimpute'
.. highlight: bash

chromimpute
===========

.. conda:recipe:: chromimpute
   :replaces_section_title:
   :noindex:

   ChromImpute is software for large\-scale systematic epigenome imputation.

   :homepage: https://github.com/jernst98/ChromImpute
   :license: GPLv2
   :recipe: /`chromimpute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromimpute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromimpute/meta.yaml>`_

   


.. conda:package:: chromimpute

   |downloads_chromimpute| |docker_chromimpute|

   :versions:
      
      

      ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends openjdk: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chromimpute

   and update with::

      conda update chromimpute

   or use the docker container::

      docker pull quay.io/biocontainers/chromimpute:<tag>

   (see `chromimpute/tags`_ for valid values for ``<tag>``)


.. |downloads_chromimpute| image:: https://img.shields.io/conda/dn/bioconda/chromimpute.svg?style=flat
   :target: https://anaconda.org/bioconda/chromimpute
   :alt:   (downloads)
.. |docker_chromimpute| image:: https://quay.io/repository/biocontainers/chromimpute/status
   :target: https://quay.io/repository/biocontainers/chromimpute
.. _`chromimpute/tags`: https://quay.io/repository/biocontainers/chromimpute?tab=tags


.. raw:: html

    <script>
        var package = "chromimpute";
        var versions = ["1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromimpute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromimpute/README.html