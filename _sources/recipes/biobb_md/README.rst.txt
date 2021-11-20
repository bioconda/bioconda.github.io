:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_md'
.. highlight: bash

biobb_md
========

.. conda:recipe:: biobb_md
   :replaces_section_title:
   :noindex:

   Biobb\_md is the Biobb module collection to perform molecular dynamics simulations.

   :homepage: https://github.com/bioexcel/biobb_md
   :documentation: http://biobb_md.readthedocs.io/en/latest/
   
   :license: APACHE / Apache Software License
   :recipe: /`biobb_md <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_md>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_md/meta.yaml>`_

   Biobb\_md is the Biobb module collection to perform molecular dynamics simulations. Biobb \(BioExcel building blocks\) packages are Python building blocks that create new layers of compatibility and interoperability over popular bioinformatics tools.


.. conda:package:: biobb_md

   |downloads_biobb_md| |docker_biobb_md|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.1-0</code>,  <code>3.7.0-0</code>,  <code>3.6.0-0</code>,  <code>3.5.1-0</code>,  <code>3.5.0-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>2.0.0-0</code>,  <code>1.1.7-0</code>,  </span></summary>
      

      ``3.7.1-0``,  ``3.7.0-0``,  ``3.6.0-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.0.0-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biobb_common: ``3.7.0``
   :depends gromacs: ``2019.1``
   :depends python: ``3.7.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_md

   and update with::

      conda update biobb_md

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_md:<tag>

   (see `biobb_md/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_md| image:: https://img.shields.io/conda/dn/bioconda/biobb_md.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_md
   :alt:   (downloads)
.. |docker_biobb_md| image:: https://quay.io/repository/biocontainers/biobb_md/status
   :target: https://quay.io/repository/biocontainers/biobb_md
.. _`biobb_md/tags`: https://quay.io/repository/biocontainers/biobb_md?tab=tags


.. raw:: html

    <script>
        var package = "biobb_md";
        var versions = ["3.7.1","3.7.0","3.6.0","3.5.1","3.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_md/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_md/README.html