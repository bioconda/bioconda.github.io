:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prostatecancercamcap'
.. highlight: bash

bioconductor-prostatecancercamcap
=================================

.. conda:recipe:: bioconductor-prostatecancercamcap
   :replaces_section_title:
   :noindex:

   Prostate Cancer Data

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/prostateCancerCamcap.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-prostatecancercamcap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancercamcap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prostatecancercamcap/meta.yaml>`_

   A Bioconductor data package for the Ross\-Adams \(2015\) Prostate Cancer dataset.


.. conda:package:: bioconductor-prostatecancercamcap

   |downloads_bioconductor-prostatecancercamcap| |docker_bioconductor-prostatecancercamcap|

   :versions:
      
      

      ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prostatecancercamcap

   and update with::

      conda update bioconductor-prostatecancercamcap

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-prostatecancercamcap:<tag>

   (see `bioconductor-prostatecancercamcap/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-prostatecancercamcap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prostatecancercamcap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prostatecancercamcap
   :alt:   (downloads)
.. |docker_bioconductor-prostatecancercamcap| image:: https://quay.io/repository/biocontainers/bioconductor-prostatecancercamcap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prostatecancercamcap
.. _`bioconductor-prostatecancercamcap/tags`: https://quay.io/repository/biocontainers/bioconductor-prostatecancercamcap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prostatecancercamcap";
        var versions = ["1.22.0","1.22.0","1.20.0","1.18.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prostatecancercamcap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prostatecancercamcap/README.html