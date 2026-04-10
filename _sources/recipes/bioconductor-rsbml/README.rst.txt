:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsbml'
.. highlight: bash

bioconductor-rsbml
==================

.. conda:recipe:: bioconductor-rsbml
   :replaces_section_title:
   :noindex:

   R support for SBML\, using libsbml

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rsbml.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rsbml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsbml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsbml/meta.yaml>`_

   Links R to libsbml for SBML parsing\, validating output\, provides an S4 SBML DOM\, converts SBML to R graph objects. Optionally links to the SBML ODE Solver Library \(SOSLib\) for simulating models.


.. conda:package:: bioconductor-rsbml

   |downloads_bioconductor-rsbml| |docker_bioconductor-rsbml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.60.0-0</code>,  <code>2.58.0-0</code>,  <code>2.56.0-1</code>,  <code>2.56.0-0</code>,  <code>2.52.0-2</code>,  <code>2.52.0-1</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.48.0-1</code>,  </span></summary>
      

      ``2.60.0-0``,  ``2.58.0-0``,  ``2.56.0-1``,  ``2.56.0-0``,  ``2.52.0-2``,  ``2.52.0-1``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-1``,  ``2.48.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends on bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends on bioconductor-graph: ``>=1.80.0,<1.81.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libsbml: ``>=5.10.2``
   :depends on libsbml: ``>=5.18.0,<5.19.0a0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on r-base: ``>=4.3,<4.4.0a0``

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

    pixi global install bioconductor-rsbml

to add into an existing workspace instead, run::

    pixi add bioconductor-rsbml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rsbml

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rsbml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rsbml:<tag>

(see `bioconductor-rsbml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rsbml| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsbml.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsbml
   :alt:   (downloads)
.. |docker_bioconductor-rsbml| image:: https://quay.io/repository/biocontainers/bioconductor-rsbml/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsbml
.. _`bioconductor-rsbml/tags`: https://quay.io/repository/biocontainers/bioconductor-rsbml?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rsbml";
        var versions = ["2.60.0","2.58.0","2.56.0","2.56.0","2.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsbml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsbml/README.html