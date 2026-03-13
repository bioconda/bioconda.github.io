:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barcode-validator'
.. highlight: bash

barcode-validator
=================

.. conda:recipe:: barcode-validator
   :replaces_section_title:
   :noindex:

   A python package for structural and taxonomic validation of DNA barcode data

   :homepage: https://github.com/naturalis/barcode_validator
   :license: APACHE / Apache-2.0
   :recipe: /`barcode-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barcode-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barcode-validator/meta.yaml>`_

   


.. conda:package:: barcode-validator

   |downloads_barcode-validator| |docker_barcode-validator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.10-0</code>,  <code>2.0.9-0</code>,  <code>2.0.8-0</code>,  <code>2.0.7-0</code>,  <code>2.0.6-0</code>,  <code>2.0.5-0</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-1</code>,  </span></summary>
      

      ``2.0.10-0``,  ``2.0.9-0``,  ``2.0.8-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioblend: 
   :depends on biopython: 
   :depends on ete4: 
   :depends on nbitk: 
   :depends on python: ``>=3.9``
   :depends on pyyaml: 
   :depends on requests: 

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

    pixi global install barcode-validator

to add into an existing workspace instead, run::

    pixi add barcode-validator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install barcode-validator

Alternatively, to install into a new environment, run::

    conda create -n envname barcode-validator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/barcode-validator:<tag>

(see `barcode-validator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_barcode-validator| image:: https://img.shields.io/conda/dn/bioconda/barcode-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/barcode-validator
   :alt:   (downloads)
.. |docker_barcode-validator| image:: https://quay.io/repository/biocontainers/barcode-validator/status
   :target: https://quay.io/repository/biocontainers/barcode-validator
.. _`barcode-validator/tags`: https://quay.io/repository/biocontainers/barcode-validator?tab=tags


.. raw:: html

    <script>
        var package = "barcode-validator";
        var versions = ["2.0.10","2.0.9","2.0.8","2.0.7","2.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barcode-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barcode-validator/README.html