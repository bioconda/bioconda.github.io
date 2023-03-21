:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nthits'
.. highlight: bash

nthits
======

.. conda:recipe:: nthits
   :replaces_section_title:
   :noindex:

   ntHits is a tool for efficiently counting and filtering k\-mers based on their frequencies

   :homepage: https://github.com/bcgsc/ntHits
   :license: MIT
   :recipe: /`nthits <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nthits>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nthits/meta.yaml>`_

   


.. conda:package:: nthits

   |downloads_nthits| |docker_nthits|

   :versions:
      
      

      ``1.0.1-0``,  ``0.0.1-2``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends btllib: ``>=1.5.0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nthits

   and update with::

      conda update nthits

   or use the docker container::

      docker pull quay.io/biocontainers/nthits:<tag>

   (see `nthits/tags`_ for valid values for ``<tag>``)


.. |downloads_nthits| image:: https://img.shields.io/conda/dn/bioconda/nthits.svg?style=flat
   :target: https://anaconda.org/bioconda/nthits
   :alt:   (downloads)
.. |docker_nthits| image:: https://quay.io/repository/biocontainers/nthits/status
   :target: https://quay.io/repository/biocontainers/nthits
.. _`nthits/tags`: https://quay.io/repository/biocontainers/nthits?tab=tags


.. raw:: html

    <script>
        var package = "nthits";
        var versions = ["1.0.1","0.0.1","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nthits/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nthits/README.html