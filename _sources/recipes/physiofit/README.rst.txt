:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'physiofit'
.. highlight: bash

physiofit
=========

.. conda:recipe:: physiofit
   :replaces_section_title:
   :noindex:

   Calculate extracellular fluxes from metabolite concentrations and biomass data

   :homepage: https://github.com/MetaSys-LISBP/PhysioFit
   :documentation: https://physiofit.readthedocs.io/en/latest/
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`physiofit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physiofit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/physiofit/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.10.12.561695`

   


.. conda:package:: physiofit

   |downloads_physiofit| |docker_physiofit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.0-0</code>,  <code>3.3.6-0</code>,  <code>3.3.5-0</code>,  <code>3.3.4-0</code>,  <code>3.3.3-0</code>,  <code>3.3.2-0</code>,  <code>3.3.1-0</code>,  <code>3.3.0-0</code>,  <code>3.2.0-0</code>,  </span></summary>
      

      ``3.4.0-0``,  ``3.3.6-0``,  ``3.3.5-0``,  ``3.3.4-0``,  ``3.3.3-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.1-0``,  ``3.1.0-1``,  ``3.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on matplotlib-base: ``>=3.7.1``
   :depends on numpy: ``>=1.24.2``
   :depends on pandas: ``>=2.0.1``
   :depends on pyarrow: ``>=14.0.1,<15.0.0``
   :depends on python: ``>=3.8,<3.9.7|>3.9.7,<3.12``
   :depends on pyyaml: ``>=6.0.0``
   :depends on scipy: ``>=1.10.1``
   :depends on streamlit: ``>=1.20.0``

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

    pixi global install physiofit

to add into an existing workspace instead, run::

    pixi add physiofit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install physiofit

Alternatively, to install into a new environment, run::

    conda create -n envname physiofit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/physiofit:<tag>

(see `physiofit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_physiofit| image:: https://img.shields.io/conda/dn/bioconda/physiofit.svg?style=flat
   :target: https://anaconda.org/bioconda/physiofit
   :alt:   (downloads)
.. |docker_physiofit| image:: https://quay.io/repository/biocontainers/physiofit/status
   :target: https://quay.io/repository/biocontainers/physiofit
.. _`physiofit/tags`: https://quay.io/repository/biocontainers/physiofit?tab=tags


.. raw:: html

    <script>
        var package = "physiofit";
        var versions = ["3.4.0","3.3.6","3.3.5","3.3.4","3.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/physiofit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/physiofit/README.html