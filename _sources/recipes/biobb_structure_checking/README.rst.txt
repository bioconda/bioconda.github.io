:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_structure_checking'
.. highlight: bash

biobb_structure_checking
========================

.. conda:recipe:: biobb_structure_checking
   :replaces_section_title:
   :noindex:

   BioBB\_structure\_checking performs MDWeb structure checking set as a command line utility.

   :homepage: https://github.com/bioexcel/biobb_structure_checking
   :license: APACHE / Apache Software License
   :recipe: /`biobb_structure_checking <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_structure_checking>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_structure_checking/meta.yaml>`_

   Biobb\_structure\_checking performs a checking of the quality of a 3D structure intended to facilitate the setup of molecular dynamics simulation of protein or nucleic acids systems. Biobb\_structure\_checking package allows to configure the system \(selection of model\/chains\,alternative location\, addition of disulfide bonds and hydrogen atoms\, side chain mutations\)\, to detect and fix structure errors \(missing side chain atoms\, backbone breaks\, amide assignments\, incorrect chirality\). It works with structures obtained from the Protein Data Bank or user provided. The Biobb\_structure\_checking package provides a command line utility \(https\:\/\/biobb\-structure\-checking.readthedocs.io\/en\/latest\/command\_line\_usage.html\) and a python API \(https\:\/\/biobb\-structure\-checking.readthedocs.io\/en\/latest\/biobb\_structure\_checking.html\). The latest documentation of this package can be found in our readthedocs site\: http\:\/\/biobb\_structure\_checking.readthedocs.io\/en\/latest\/


.. conda:package:: biobb_structure_checking

   |downloads_biobb_structure_checking| |docker_biobb_structure_checking|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.9.11-1</code>,  <code>3.9.11-0</code>,  <code>3.9.10-0</code>,  <code>3.9.9-0</code>,  <code>3.9.7-0</code>,  <code>3.9.6-0</code>,  <code>3.9.2-0</code>,  <code>3.9.1-0</code>,  <code>3.8.5-0</code>,  </span></summary>
      

      ``3.9.11-1``,  ``3.9.11-0``,  ``3.9.10-0``,  ``3.9.9-0``,  ``3.9.7-0``,  ``3.9.6-0``,  ``3.9.2-0``,  ``3.9.1-0``,  ``3.8.5-0``,  ``3.7.3-0``,  ``3.7.2-0``,  ``3.7.1-0``,  ``3.5.3-0``,  ``3.5.0-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``1.79``
   :depends numpy: 
   :depends pip: 
   :depends python: ``3.7.*``
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_structure_checking

   and update with::

      conda update biobb_structure_checking

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_structure_checking:<tag>

   (see `biobb_structure_checking/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_structure_checking| image:: https://img.shields.io/conda/dn/bioconda/biobb_structure_checking.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_structure_checking
   :alt:   (downloads)
.. |docker_biobb_structure_checking| image:: https://quay.io/repository/biocontainers/biobb_structure_checking/status
   :target: https://quay.io/repository/biocontainers/biobb_structure_checking
.. _`biobb_structure_checking/tags`: https://quay.io/repository/biocontainers/biobb_structure_checking?tab=tags


.. raw:: html

    <script>
        var package = "biobb_structure_checking";
        var versions = ["3.9.11","3.9.11","3.9.10","3.9.9","3.9.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_structure_checking/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_structure_checking/README.html