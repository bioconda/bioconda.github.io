:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'suppa'
.. highlight: bash

suppa
=====

.. conda:recipe:: suppa
   :replaces_section_title:
   :noindex:

   A tool to study splicing across multiple conditions at high speed and accuracy.

   :homepage: https://github.com/comprna/SUPPA
   :license: MIT / MIT
   :recipe: /`suppa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suppa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/suppa/meta.yaml>`_

   


.. conda:package:: suppa

   |downloads_suppa| |docker_suppa|

   :versions:
      
      

      ``2.4-0``,  ``2.3-2``,  ``2.3-1``,  ``2.3-0``

      

   
   :depends on numpy: ``>=1.11.0``
   :depends on pandas: ``>=0.18.0``
   :depends on python: ``>=3``
   :depends on scikit-learn: ``>=0.16.1``
   :depends on scipy: ``>=0.15.1``
   :depends on statsmodels: ``>=0.6.1``

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

    pixi global install suppa

to add into an existing workspace instead, run::

    pixi add suppa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install suppa

Alternatively, to install into a new environment, run::

    conda create -n envname suppa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/suppa:<tag>

(see `suppa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_suppa| image:: https://img.shields.io/conda/dn/bioconda/suppa.svg?style=flat
   :target: https://anaconda.org/bioconda/suppa
   :alt:   (downloads)
.. |docker_suppa| image:: https://quay.io/repository/biocontainers/suppa/status
   :target: https://quay.io/repository/biocontainers/suppa
.. _`suppa/tags`: https://quay.io/repository/biocontainers/suppa?tab=tags


.. raw:: html

    <script>
        var package = "suppa";
        var versions = ["2.4","2.3","2.3","2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/suppa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/suppa/README.html