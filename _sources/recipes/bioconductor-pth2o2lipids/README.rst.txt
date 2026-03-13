:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pth2o2lipids'
.. highlight: bash

bioconductor-pth2o2lipids
=========================

.. conda:recipe:: bioconductor-pth2o2lipids
   :replaces_section_title:
   :noindex:

   P. tricornutum HPLC\-ESI\-MS Lipid Data from van Creveld et al. \(2015\)

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/PtH2O2lipids.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pth2o2lipids <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pth2o2lipids>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pth2o2lipids/meta.yaml>`_

   Annotated HPLC\-ESI\-MS lipid data in positive ionization mode from an experiment in which cultures of the marine diatom Phaeodactylum tricornutum were treated with various concentrations of hydrogen peroxide \(H2O2\) to induce oxidative stress. The experiment is described in Graff van Creveld\, et al.\, 2015\, \"Early perturbation in mitochondria redox homeostasis in response to environmental stress predicts cell fate in diatoms\,\" ISME Journal 9\:385\-395. PtH2O2lipids consists of two objects\: A CAMERA xsAnnotate object \(ptH2O2lipids\$xsAnnotate\) and LOBSTAHS LOBSet object \(ptH2O2lipids\$xsAnnotate\$LOBSet\). The LOBSet includes putative compound assignments from the default LOBSTAHS database. Isomer annotation is recorded in three other LOBSet slots.


.. conda:package:: bioconductor-pth2o2lipids

   |downloads_bioconductor-pth2o2lipids| |docker_bioconductor-pth2o2lipids|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-camera: ``>=1.66.0,<1.67.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-lobstahs: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-xcms: ``>=4.8.0,<4.9.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-pth2o2lipids

to add into an existing workspace instead, run::

    pixi add bioconductor-pth2o2lipids

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pth2o2lipids

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pth2o2lipids

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pth2o2lipids:<tag>

(see `bioconductor-pth2o2lipids/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pth2o2lipids| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pth2o2lipids.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pth2o2lipids
   :alt:   (downloads)
.. |docker_bioconductor-pth2o2lipids| image:: https://quay.io/repository/biocontainers/bioconductor-pth2o2lipids/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pth2o2lipids
.. _`bioconductor-pth2o2lipids/tags`: https://quay.io/repository/biocontainers/bioconductor-pth2o2lipids?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pth2o2lipids";
        var versions = ["1.36.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pth2o2lipids/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pth2o2lipids/README.html