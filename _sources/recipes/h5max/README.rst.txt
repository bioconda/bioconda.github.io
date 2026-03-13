:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'h5max'
.. highlight: bash

h5max
=====

.. conda:recipe:: h5max
   :replaces_section_title:
   :noindex:

   scipy.sparse support on h5py

   :homepage: https://github.com/jdcla/h5max
   :license: MIT
   :recipe: /`h5max <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/h5max>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/h5max/meta.yaml>`_

   


.. conda:package:: h5max

   |downloads_h5max| |docker_h5max|

   :versions:
      
      

      ``0.3.4-0``

      

   
   :depends on h5py: ``>=3.15.1``
   :depends on numpy: ``>=1.21.0``
   :depends on python: ``>=3.9``
   :depends on scipy: ``>=1.7.3``

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

    pixi global install h5max

to add into an existing workspace instead, run::

    pixi add h5max

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install h5max

Alternatively, to install into a new environment, run::

    conda create -n envname h5max

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/h5max:<tag>

(see `h5max/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_h5max| image:: https://img.shields.io/conda/dn/bioconda/h5max.svg?style=flat
   :target: https://anaconda.org/bioconda/h5max
   :alt:   (downloads)
.. |docker_h5max| image:: https://quay.io/repository/biocontainers/h5max/status
   :target: https://quay.io/repository/biocontainers/h5max
.. _`h5max/tags`: https://quay.io/repository/biocontainers/h5max?tab=tags


.. raw:: html

    <script>
        var package = "h5max";
        var versions = ["0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/h5max/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/h5max/README.html