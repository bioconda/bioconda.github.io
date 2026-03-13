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

         <details><summary><span class="truncated-version-list"><code>3.15.6-0</code>,  <code>3.13.5-0</code>,  <code>3.13.4-0</code>,  <code>3.13.3-0</code>,  <code>3.13.2-0</code>,  <code>3.13.0-0</code>,  <code>3.12.1-0</code>,  <code>3.12.0-0</code>,  <code>3.10.1-0</code>,  </span></summary>
      

      ``3.15.6-0``,  ``3.13.5-0``,  ``3.13.4-0``,  ``3.13.3-0``,  ``3.13.2-0``,  ``3.13.0-0``,  ``3.12.1-0``,  ``3.12.0-0``,  ``3.10.1-0``,  ``3.9.11-1``,  ``3.9.11-0``,  ``3.9.10-0``,  ``3.9.9-0``,  ``3.9.7-0``,  ``3.9.6-0``,  ``3.9.2-0``,  ``3.9.1-0``,  ``3.8.5-0``,  ``3.7.3-0``,  ``3.7.2-0``,  ``3.7.1-0``,  ``3.5.3-0``,  ``3.5.0-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: ``>=1.79``
   :depends on numpy: 
   :depends on pip: 
   :depends on psutil: 
   :depends on python: ``>=3.8``
   :depends on setuptools: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install biobb_structure_checking

to add into an existing workspace instead, run::

    pixi add biobb_structure_checking

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biobb_structure_checking

Alternatively, to install into a new environment, run::

    conda create -n envname biobb_structure_checking

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biobb_structure_checking:<tag>

(see `biobb_structure_checking/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biobb_structure_checking| image:: https://img.shields.io/conda/dn/bioconda/biobb_structure_checking.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_structure_checking
   :alt:   (downloads)
.. |docker_biobb_structure_checking| image:: https://quay.io/repository/biocontainers/biobb_structure_checking/status
   :target: https://quay.io/repository/biocontainers/biobb_structure_checking
.. _`biobb_structure_checking/tags`: https://quay.io/repository/biocontainers/biobb_structure_checking?tab=tags


.. raw:: html

    <script>
        var package = "biobb_structure_checking";
        var versions = ["3.15.6","3.13.5","3.13.4","3.13.3","3.13.2"];
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