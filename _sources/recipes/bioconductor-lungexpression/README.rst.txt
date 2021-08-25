:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lungexpression'
.. highlight: bash

bioconductor-lungexpression
===========================

.. conda:recipe:: bioconductor-lungexpression
   :replaces_section_title:
   :noindex:

   ExpressionSets for Parmigiani et al.\, 2004 Clinical Cancer Research paper

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/lungExpression.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-lungexpression <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lungexpression>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lungexpression/meta.yaml>`_

   Data from three large lung cancer studies provided as ExpressionSets


.. conda:package:: bioconductor-lungexpression

   |downloads_bioconductor-lungexpression| |docker_bioconductor-lungexpression|

   :versions:
      
      

      ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.20.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lungexpression

   and update with::

      conda update bioconductor-lungexpression

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lungexpression:<tag>

   (see `bioconductor-lungexpression/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lungexpression| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lungexpression.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lungexpression
   :alt:   (downloads)
.. |docker_bioconductor-lungexpression| image:: https://quay.io/repository/biocontainers/bioconductor-lungexpression/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lungexpression
.. _`bioconductor-lungexpression/tags`: https://quay.io/repository/biocontainers/bioconductor-lungexpression?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lungexpression";
        var versions = ["0.30.0","0.28.0","0.28.0","0.26.0","0.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lungexpression/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lungexpression/README.html