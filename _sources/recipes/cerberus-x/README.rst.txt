:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cerberus-x'
.. highlight: bash

cerberus-x
==========

.. conda:recipe:: cerberus-x
   :replaces_section_title:
   :noindex:

   Versatile Functional Ontology Assignments via Hidden Markov Model \(HMM\) searching with environmental focus of shotgun \'omics data.

   :homepage: https://github.com/raw-lab/cerberus
   :documentation: https://github.com/raw-lab/cerberus/blob/v1.5.0/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`cerberus-x <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cerberus-x>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cerberus-x/meta.yaml>`_

   


.. conda:package:: cerberus-x

   |downloads_cerberus-x| |docker_cerberus-x|

   :versions:
      
      

      ``1.5.0-0``

      

   
   :depends on configargparse: 
   :depends on dominate: 
   :depends on flash2: 
   :depends on hydrampp: 
   :depends on importlib-resources: 
   :depends on metaomestats: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on psutil: 
   :depends on pyhmmer: 
   :depends on pyrodigal: 
   :depends on pyrodigal-gv: 
   :depends on python: ``>=3.8``
   :depends on python-kaleido: 
   :depends on scikit-learn: 
   :depends on setuptools: ``<70.0.0``

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

    pixi global install cerberus-x

to add into an existing workspace instead, run::

    pixi add cerberus-x

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cerberus-x

Alternatively, to install into a new environment, run::

    conda create -n envname cerberus-x

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cerberus-x:<tag>

(see `cerberus-x/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cerberus-x| image:: https://img.shields.io/conda/dn/bioconda/cerberus-x.svg?style=flat
   :target: https://anaconda.org/bioconda/cerberus-x
   :alt:   (downloads)
.. |docker_cerberus-x| image:: https://quay.io/repository/biocontainers/cerberus-x/status
   :target: https://quay.io/repository/biocontainers/cerberus-x
.. _`cerberus-x/tags`: https://quay.io/repository/biocontainers/cerberus-x?tab=tags


.. raw:: html

    <script>
        var package = "cerberus-x";
        var versions = ["1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cerberus-x/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cerberus-x/README.html