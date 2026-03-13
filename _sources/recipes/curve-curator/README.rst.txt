:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'curve-curator'
.. highlight: bash

curve-curator
=============

.. conda:recipe:: curve-curator
   :replaces_section_title:
   :noindex:

   CurveCurator is an open\-source analysis platform for any dose\-dependent data. It fits a classical 4\-parameter  equation to estimate effect potency\, effect size\, and the statistical significance of the observed response.    2D\-thresholding efficiently reduces false positives in high\-throughput experiments and separates relevant from irrelevant   or insignificant hits in an automated and unbiased manner. An interactive dashboard allows users to quickly explore data locally.

   :homepage: https://github.com/kusterlab/curve_curator
   :license: Apache-2.0
   :recipe: /`curve-curator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curve-curator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curve-curator/meta.yaml>`_

   


.. conda:package:: curve-curator

   |downloads_curve-curator| |docker_curve-curator|

   :versions:
      
      

      ``0.6.0-0``

      

   
   :depends on bokeh: ``>=3.4.0,<3.8.0``
   :depends on numpy: ``>=1.25.0,<3.0``
   :depends on pandas: ``>=2.1.0,<3.0.0``
   :depends on pytest: ``>=7.4.3,<8.0.0``
   :depends on python: ``>=3.11,<3.14``
   :depends on scipy: ``>=1.10.1,<2.0.0``
   :depends on statsmodels: ``>=0.14.0,<0.15.0``
   :depends on tqdm: ``>=4.66.1,<5.0.0``

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

    pixi global install curve-curator

to add into an existing workspace instead, run::

    pixi add curve-curator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install curve-curator

Alternatively, to install into a new environment, run::

    conda create -n envname curve-curator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/curve-curator:<tag>

(see `curve-curator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_curve-curator| image:: https://img.shields.io/conda/dn/bioconda/curve-curator.svg?style=flat
   :target: https://anaconda.org/bioconda/curve-curator
   :alt:   (downloads)
.. |docker_curve-curator| image:: https://quay.io/repository/biocontainers/curve-curator/status
   :target: https://quay.io/repository/biocontainers/curve-curator
.. _`curve-curator/tags`: https://quay.io/repository/biocontainers/curve-curator?tab=tags


.. raw:: html

    <script>
        var package = "curve-curator";
        var versions = ["0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/curve-curator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/curve-curator/README.html