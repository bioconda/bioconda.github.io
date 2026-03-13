:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-goenrichment'
.. highlight: bash

python-goenrichment
===================

.. conda:recipe:: python-goenrichment
   :replaces_section_title:
   :noindex:

   GO enrichment analysis from a list of gene names using a precomputed database

   :homepage: https://pypi.org/project/goenrichment/
   :license: PUBLIC-DOMAIN
   :recipe: /`python-goenrichment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-goenrichment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-goenrichment/meta.yaml>`_

   


.. conda:package:: python-goenrichment

   |downloads_python-goenrichment| |docker_python-goenrichment|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``0.0.10a3-0``

      

   
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on scipy: 
   :depends on statsmodels: 

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

    pixi global install python-goenrichment

to add into an existing workspace instead, run::

    pixi add python-goenrichment

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install python-goenrichment

Alternatively, to install into a new environment, run::

    conda create -n envname python-goenrichment

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/python-goenrichment:<tag>

(see `python-goenrichment/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_python-goenrichment| image:: https://img.shields.io/conda/dn/bioconda/python-goenrichment.svg?style=flat
   :target: https://anaconda.org/bioconda/python-goenrichment
   :alt:   (downloads)
.. |docker_python-goenrichment| image:: https://quay.io/repository/biocontainers/python-goenrichment/status
   :target: https://quay.io/repository/biocontainers/python-goenrichment
.. _`python-goenrichment/tags`: https://quay.io/repository/biocontainers/python-goenrichment?tab=tags


.. raw:: html

    <script>
        var package = "python-goenrichment";
        var versions = ["1.0.3","1.0.2","0.0.10a3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-goenrichment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-goenrichment/README.html