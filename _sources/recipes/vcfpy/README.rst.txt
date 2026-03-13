:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfpy'
.. highlight: bash

vcfpy
=====

.. conda:recipe:: vcfpy
   :replaces_section_title:
   :noindex:

   Python 3 VCF library with good support for both reading and writing.

   :homepage: https://github.com/bihealth/vcfpy
   :documentation: https://vcfpy.readthedocs.io/en/stable
   
   :license: MIT / MIT
   :recipe: /`vcfpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfpy/meta.yaml>`_

   


.. conda:package:: vcfpy

   |downloads_vcfpy| |docker_vcfpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.2-0</code>,  <code>0.13.8-0</code>,  <code>0.13.6-0</code>,  <code>0.13.5-0</code>,  <code>0.13.4-0</code>,  <code>0.13.3-0</code>,  <code>0.13.2-0</code>,  <code>0.13.0-0</code>,  <code>0.12.2-0</code>,  </span></summary>
      

      ``0.14.2-0``,  ``0.13.8-0``,  ``0.13.6-0``,  ``0.13.5-0``,  ``0.13.4-0``,  ``0.13.3-0``,  ``0.13.2-0``,  ``0.13.0-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-3``,  ``0.11.2-3``,  ``0.11.2-2``,  ``0.11.2-0``,  ``0.11.1-0``,  ``0.11.0-1``,  ``0.11.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on python: ``>=3.10,<3.14``

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

    pixi global install vcfpy

to add into an existing workspace instead, run::

    pixi add vcfpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcfpy

Alternatively, to install into a new environment, run::

    conda create -n envname vcfpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcfpy:<tag>

(see `vcfpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcfpy| image:: https://img.shields.io/conda/dn/bioconda/vcfpy.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfpy
   :alt:   (downloads)
.. |docker_vcfpy| image:: https://quay.io/repository/biocontainers/vcfpy/status
   :target: https://quay.io/repository/biocontainers/vcfpy
.. _`vcfpy/tags`: https://quay.io/repository/biocontainers/vcfpy?tab=tags


.. raw:: html

    <script>
        var package = "vcfpy";
        var versions = ["0.14.2","0.13.8","0.13.6","0.13.5","0.13.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfpy/README.html