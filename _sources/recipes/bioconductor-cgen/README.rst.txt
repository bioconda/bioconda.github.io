:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cgen'
.. highlight: bash

bioconductor-cgen
=================

.. conda:recipe:: bioconductor-cgen
   :replaces_section_title:
   :noindex:

   An R package for analysis of case\-control studies in genetic epidemiology

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/CGEN.html
   :license: GPL-2 + file LICENSE
   :recipe: /`bioconductor-cgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cgen/meta.yaml>`_

   This is a package for analysis of case\-control data in genetic epidemiology. It provides a set of statistical methods for evaluating gene\-environment \(or gene\-genes\) interactions under multiplicative and additive risk models\, with or without assuming gene\-environment \(or gene\-gene\) independence in the underlying population.


.. conda:package:: bioconductor-cgen

   |downloads_bioconductor-cgen| |docker_bioconductor-cgen|

   :versions:
      
      

      ``3.30.0-0``,  ``3.28.0-0``,  ``3.23.0-0``,  ``3.22.0-0``,  ``3.20.0-1``,  ``3.20.0-0``,  ``3.18.0-0``

      

   
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-mvtnorm: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cgen

   and update with::

      conda update bioconductor-cgen

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cgen:<tag>

   (see `bioconductor-cgen/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cgen| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cgen.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cgen
   :alt:   (downloads)
.. |docker_bioconductor-cgen| image:: https://quay.io/repository/biocontainers/bioconductor-cgen/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cgen
.. _`bioconductor-cgen/tags`: https://quay.io/repository/biocontainers/bioconductor-cgen?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cgen";
        var versions = ["3.30.0","3.28.0","3.23.0","3.22.0","3.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cgen/README.html