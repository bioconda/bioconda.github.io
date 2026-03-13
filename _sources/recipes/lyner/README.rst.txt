:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lyner'
.. highlight: bash

lyner
=====

.. conda:recipe:: lyner
   :replaces_section_title:
   :noindex:

   A chaining toolbox for working with dataframes

   :homepage: https://github.com/tedil/lyner
   :license: OTHER / MIT
   :recipe: /`lyner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lyner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lyner/meta.yaml>`_

   


.. conda:package:: lyner

   |downloads_lyner| |docker_lyner|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.2-0``

      

   
   :depends on click: ``>=7.0``
   :depends on click-aliases: ``>=1.0``
   :depends on joblib: ``>=0.14``
   :depends on keras: ``>=2.3``
   :depends on mlxtend: ``>=0.17``
   :depends on natsort: ``>=6.2``
   :depends on networkx: ``>=2.4``
   :depends on numba: ``>=0.46``
   :depends on numpy: ``>=1.17``
   :depends on pandas: ``>=0.25``
   :depends on plotly: ``>=4.3``
   :depends on psutil: ``>=5.6``
   :depends on pybedtools: ``>=0.8``
   :depends on pymc3: ``>=3.7``
   :depends on python: ``>=3.6``
   :depends on scikit-learn: ``>=0.21``
   :depends on scipy: ``>=1.3``
   :depends on tensorflow: ``>=2.0``

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

    pixi global install lyner

to add into an existing workspace instead, run::

    pixi add lyner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lyner

Alternatively, to install into a new environment, run::

    conda create -n envname lyner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lyner:<tag>

(see `lyner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lyner| image:: https://img.shields.io/conda/dn/bioconda/lyner.svg?style=flat
   :target: https://anaconda.org/bioconda/lyner
   :alt:   (downloads)
.. |docker_lyner| image:: https://quay.io/repository/biocontainers/lyner/status
   :target: https://quay.io/repository/biocontainers/lyner
.. _`lyner/tags`: https://quay.io/repository/biocontainers/lyner?tab=tags


.. raw:: html

    <script>
        var package = "lyner";
        var versions = ["0.4.3","0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lyner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lyner/README.html