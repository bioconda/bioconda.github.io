:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-r0'
.. highlight: bash

r-r0
====

.. conda:recipe:: r-r0
   :replaces_section_title:
   :noindex:

   Estimation of R0 and Real\-Time Reproduction Number from Epidemics.

   :homepage: https://CRAN.R-project.org/package=R0
   :license: GPL2 / GPL-2
   :recipe: /`r-r0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r0/meta.yaml>`_

   


.. conda:package:: r-r0

   |downloads_r-r0| |docker_r-r0|

   :versions:
      
      

      ``1.2_6-1``,  ``1.2_6-0``

      

   
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-mass: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-r0

   and update with::

      conda update r-r0

   or use the docker container::

      docker pull quay.io/biocontainers/r-r0:<tag>

   (see `r-r0/tags`_ for valid values for ``<tag>``)


.. |downloads_r-r0| image:: https://img.shields.io/conda/dn/bioconda/r-r0.svg?style=flat
   :target: https://anaconda.org/bioconda/r-r0
   :alt:   (downloads)
.. |docker_r-r0| image:: https://quay.io/repository/biocontainers/r-r0/status
   :target: https://quay.io/repository/biocontainers/r-r0
.. _`r-r0/tags`: https://quay.io/repository/biocontainers/r-r0?tab=tags


.. raw:: html

    <script>
        var package = "r-r0";
        var versions = ["1.2_6","1.2_6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-r0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-r0/README.html