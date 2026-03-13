:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-disprose'
.. highlight: bash

r-disprose
==========

.. conda:recipe:: r-disprose
   :replaces_section_title:
   :noindex:

   Set of tools for molecular probes selection and design of a microarray\, e.g. the assessment of physical and chemical properties\, blast performance\, selection according to sensitivity and selectivity. Methods used in package are described in\: Lorenz R.\, Stephan H.B.\, Höner zu Siederdissen C. et al. \(2011\) \<doi\:10.1186\/1748\-7188\-6\-26\>\; Camacho C.\, Coulouris G.\, Avagyan V. et al. \(2009\) \<doi\:10.1186\/1471\-2105\-10\-421\>.

   :homepage: https://CRAN.R-project.org/package=disprose
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-disprose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-disprose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-disprose/meta.yaml>`_

   


.. conda:package:: r-disprose

   |downloads_r-disprose| |docker_r-disprose|

   :versions:
      
      

      ``0.1.6-3``,  ``0.1.6-2``,  ``0.1.6-1``,  ``0.1.6-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install r-disprose

to add into an existing workspace instead, run::

    pixi add r-disprose

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-disprose

Alternatively, to install into a new environment, run::

    conda create -n envname r-disprose

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-disprose:<tag>

(see `r-disprose/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-disprose| image:: https://img.shields.io/conda/dn/bioconda/r-disprose.svg?style=flat
   :target: https://anaconda.org/bioconda/r-disprose
   :alt:   (downloads)
.. |docker_r-disprose| image:: https://quay.io/repository/biocontainers/r-disprose/status
   :target: https://quay.io/repository/biocontainers/r-disprose
.. _`r-disprose/tags`: https://quay.io/repository/biocontainers/r-disprose?tab=tags


.. raw:: html

    <script>
        var package = "r-disprose";
        var versions = ["0.1.6","0.1.6","0.1.6","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-disprose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-disprose/README.html