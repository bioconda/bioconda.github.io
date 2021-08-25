:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_vs'
.. highlight: bash

biobb_vs
========

.. conda:recipe:: biobb_vs
   :replaces_section_title:
   :noindex:

   Biobb\_vs is the Biobb module collection to perform virtual screening studies.

   :homepage: https://github.com/bioexcel/biobb_vs
   :license: APACHE / Apache Software License
   :recipe: /`biobb_vs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_vs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_vs/meta.yaml>`_

   Biobb\_vs is the Biobb module collection to perform virtual screening studies.
   Biobb \(BioExcel building blocks\) packages are Python building blocks that
   create new layer of compatibility and interoperability over popular
     bioinformatics tools.
   The latest documentation of this package can be found in our readthedocs site\: http\:\/\/biobb\_vs.readthedocs.io\/en\/latest\/\).



.. conda:package:: biobb_vs

   |downloads_biobb_vs| |docker_biobb_vs|

   :versions:
      
      

      ``3.6.0-0``,  ``3.5.1-0``,  ``3.5.0-0``

      

   
   :depends autodock-vina: ``1.1.2``
   :depends biobb_common: ``3.6.0``
   :depends biopython: 
   :depends fpocket: ``3.1.4.2``
   :depends python: ``3.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_vs

   and update with::

      conda update biobb_vs

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_vs:<tag>

   (see `biobb_vs/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_vs| image:: https://img.shields.io/conda/dn/bioconda/biobb_vs.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_vs
   :alt:   (downloads)
.. |docker_biobb_vs| image:: https://quay.io/repository/biocontainers/biobb_vs/status
   :target: https://quay.io/repository/biocontainers/biobb_vs
.. _`biobb_vs/tags`: https://quay.io/repository/biocontainers/biobb_vs?tab=tags


.. raw:: html

    <script>
        var package = "biobb_vs";
        var versions = ["3.6.0","3.5.1","3.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_vs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_vs/README.html