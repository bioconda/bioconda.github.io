:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pcasuite'
.. highlight: bash

pcasuite
========

.. conda:recipe:: pcasuite
   :replaces_section_title:
   :noindex:

   PCAzip compresses a trajectory\, recentering the snapshots using a standard RMS or a gaussian version.

   :homepage: https://mmb.irbbarcelona.org/gitlab/andrio/pcasuite
   :license: APACHE / Apache Software License
   :recipe: /`pcasuite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcasuite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pcasuite/meta.yaml>`_

   PCAunzip recreates the original trajectory from the projection data. PCZdump analyzes the compressed trajectory and gives coefficients and values computed from the stored trajectory.


.. conda:package:: pcasuite

   |downloads_pcasuite| |docker_pcasuite|

   :versions:
      
      

      ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bison: 
   :depends lapack: 
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.4.0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libnetcdf: ``>=4.8.1,<4.8.2.0a0``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pcasuite

   and update with::

      conda update pcasuite

   or use the docker container::

      docker pull quay.io/biocontainers/pcasuite:<tag>

   (see `pcasuite/tags`_ for valid values for ``<tag>``)


.. |downloads_pcasuite| image:: https://img.shields.io/conda/dn/bioconda/pcasuite.svg?style=flat
   :target: https://anaconda.org/bioconda/pcasuite
   :alt:   (downloads)
.. |docker_pcasuite| image:: https://quay.io/repository/biocontainers/pcasuite/status
   :target: https://quay.io/repository/biocontainers/pcasuite
.. _`pcasuite/tags`: https://quay.io/repository/biocontainers/pcasuite?tab=tags


.. raw:: html

    <script>
        var package = "pcasuite";
        var versions = ["1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pcasuite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pcasuite/README.html