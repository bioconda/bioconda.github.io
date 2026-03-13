:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'renet2'
.. highlight: bash

renet2
======

.. conda:recipe:: renet2
   :replaces_section_title:
   :noindex:

   RENET2\: High\-Performance Full\-text Gene\-Disease Relation Extraction with Iterative Training Data Expansion

   :homepage: https://github.com/sujunhao/RENET2
   :license: BSD / BSD-3-Clause
   :recipe: /`renet2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/renet2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/renet2/meta.yaml>`_

   


.. conda:package:: renet2

   |downloads_renet2| |docker_renet2|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends on cudatoolkit: ``10.0.*``
   :depends on numpy: ``1.18.1.*``
   :depends on pandas: ``1.0.1.*``
   :depends on python: ``>=3.7``
   :depends on pytorch: ``1.2.0``
   :depends on ruby: 
   :depends on scikit-learn: ``0.22.2.post1.*``
   :depends on tqdm: ``4.42.1.*``

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

    pixi global install renet2

to add into an existing workspace instead, run::

    pixi add renet2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install renet2

Alternatively, to install into a new environment, run::

    conda create -n envname renet2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/renet2:<tag>

(see `renet2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_renet2| image:: https://img.shields.io/conda/dn/bioconda/renet2.svg?style=flat
   :target: https://anaconda.org/bioconda/renet2
   :alt:   (downloads)
.. |docker_renet2| image:: https://quay.io/repository/biocontainers/renet2/status
   :target: https://quay.io/repository/biocontainers/renet2
.. _`renet2/tags`: https://quay.io/repository/biocontainers/renet2?tab=tags


.. raw:: html

    <script>
        var package = "renet2";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/renet2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/renet2/README.html