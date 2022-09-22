:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwrewas.data'
.. highlight: bash

bioconductor-pwrewas.data
=========================

.. conda:recipe:: bioconductor-pwrewas.data
   :replaces_section_title:
   :noindex:

   pwrEWAS.data\: Reference data accompanying pwrEWAS

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/pwrEWAS.data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-pwrewas.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwrewas.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwrewas.data/meta.yaml>`_

   This package provides reference data required for pwrEWAS. pwrEWAS is a user\-friendly tool to estimate power in EWAS as a function of sample and effect size for two\-group comparisons of DNAm \(e.g.\, case vs control\, exposed vs non\-exposed\, etc.\).


.. conda:package:: bioconductor-pwrewas.data

   |downloads_bioconductor-pwrewas.data| |docker_bioconductor-pwrewas.data|

   :versions:
      
      

      ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends curl: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pwrewas.data

   and update with::

      conda update bioconductor-pwrewas.data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pwrewas.data:<tag>

   (see `bioconductor-pwrewas.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pwrewas.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwrewas.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwrewas.data
   :alt:   (downloads)
.. |docker_bioconductor-pwrewas.data| image:: https://quay.io/repository/biocontainers/bioconductor-pwrewas.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwrewas.data
.. _`bioconductor-pwrewas.data/tags`: https://quay.io/repository/biocontainers/bioconductor-pwrewas.data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pwrewas.data";
        var versions = ["1.8.0","1.8.0","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwrewas.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwrewas.data/README.html