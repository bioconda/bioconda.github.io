:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmnrandomread'
.. highlight: bash

hmnrandomread
=============

.. conda:recipe:: hmnrandomread
   :replaces_section_title:
   :noindex:

   A sequence\-read simulator program for NGS

   :homepage: https://github.com/guillaume-gricourt/HmnRandomRead
   :license: MIT
   :recipe: /`hmnrandomread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnrandomread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnrandomread/meta.yaml>`_

   A sequence\-read simulator program for NGS


.. conda:package:: hmnrandomread

   |downloads_hmnrandomread| |docker_hmnrandomread|

   :versions:
      
      

      ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.1-0``

      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends pytest: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmnrandomread

   and update with::

      conda update hmnrandomread

   or use the docker container::

      docker pull quay.io/biocontainers/hmnrandomread:<tag>

   (see `hmnrandomread/tags`_ for valid values for ``<tag>``)


.. |downloads_hmnrandomread| image:: https://img.shields.io/conda/dn/bioconda/hmnrandomread.svg?style=flat
   :target: https://anaconda.org/bioconda/hmnrandomread
   :alt:   (downloads)
.. |docker_hmnrandomread| image:: https://quay.io/repository/biocontainers/hmnrandomread/status
   :target: https://quay.io/repository/biocontainers/hmnrandomread
.. _`hmnrandomread/tags`: https://quay.io/repository/biocontainers/hmnrandomread?tab=tags


.. raw:: html

    <script>
        var package = "hmnrandomread";
        var versions = ["0.10.0","0.10.0","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmnrandomread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmnrandomread/README.html