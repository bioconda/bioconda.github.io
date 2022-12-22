:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_gromacs'
.. highlight: bash

biobb_gromacs
=============

.. conda:recipe:: biobb_gromacs
   :replaces_section_title:
   :noindex:

   biobb\_gromacs is the Biobb module collection to perform molecular dynamics simulations using the GROMACS MD suite.

   :homepage: https://github.com/bioexcel/biobb_gromacs
   :documentation: http://biobb_gromacs.readthedocs.io/en/latest/
   
   :license: APACHE / Apache Software License
   :recipe: /`biobb_gromacs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_gromacs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_gromacs/meta.yaml>`_

   biobb\_gromacs is the Biobb module collection to perform molecular dynamics simulationsusing the GROMACS MD suite. Biobb \(BioExcel building blocks\) packages are Python building blocks that create new layers of compatibility and interoperability over popular bioinformatics tools.


.. conda:package:: biobb_gromacs

   |downloads_biobb_gromacs| |docker_biobb_gromacs|

   :versions:
      
      

      ``3.9.0-0``,  ``3.8.1-0``,  ``3.8.0-0``

      

   
   :depends biobb_common: ``3.9.0``
   :depends gromacs: ``2022.2``
   :depends python: ``>=3.7,<3.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_gromacs

   and update with::

      conda update biobb_gromacs

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_gromacs:<tag>

   (see `biobb_gromacs/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_gromacs| image:: https://img.shields.io/conda/dn/bioconda/biobb_gromacs.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_gromacs
   :alt:   (downloads)
.. |docker_biobb_gromacs| image:: https://quay.io/repository/biocontainers/biobb_gromacs/status
   :target: https://quay.io/repository/biocontainers/biobb_gromacs
.. _`biobb_gromacs/tags`: https://quay.io/repository/biocontainers/biobb_gromacs?tab=tags


.. raw:: html

    <script>
        var package = "biobb_gromacs";
        var versions = ["3.9.0","3.8.1","3.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_gromacs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_gromacs/README.html