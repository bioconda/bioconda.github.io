:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_cmip'
.. highlight: bash

biobb_cmip
==========

.. conda:recipe:: biobb_cmip
   :replaces_section_title:
   :noindex:

   Biobb\_cmip is the Biobb module collection to compute classical molecular interaction potentials.

   :homepage: https://github.com/bioexcel/biobb_cmip
   :documentation: http://biobb_cmip.readthedocs.io/en/latest/
   
   :license: APACHE / Apache Software License
   :recipe: /`biobb_cmip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_cmip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_cmip/meta.yaml>`_

   Biobb\_cmip is the Biobb module collection to compute classical molecular interaction potentials. Biobb \(BioExcel building blocks\) packages are Python building blocks that create new layer of compatibility and interoperability over popular bioinformatics tools.


.. conda:package:: biobb_cmip

   |downloads_biobb_cmip| |docker_biobb_cmip|

   :versions:
      
      

      ``3.7.2-0``,  ``3.6.0-0``

      

   
   :depends biobb_common: ``3.7.0``
   :depends cmip: ``2.7.0``
   :depends python: ``3.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_cmip

   and update with::

      conda update biobb_cmip

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_cmip:<tag>

   (see `biobb_cmip/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_cmip| image:: https://img.shields.io/conda/dn/bioconda/biobb_cmip.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_cmip
   :alt:   (downloads)
.. |docker_biobb_cmip| image:: https://quay.io/repository/biocontainers/biobb_cmip/status
   :target: https://quay.io/repository/biocontainers/biobb_cmip
.. _`biobb_cmip/tags`: https://quay.io/repository/biocontainers/biobb_cmip?tab=tags


.. raw:: html

    <script>
        var package = "biobb_cmip";
        var versions = ["3.7.2","3.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_cmip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_cmip/README.html