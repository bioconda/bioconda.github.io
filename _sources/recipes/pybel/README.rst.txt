:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybel'
.. highlight: bash

pybel
=====

.. conda:recipe:: pybel
   :replaces_section_title:
   :noindex:

   PyBEL is a Python package for parsing and handling biological networks encoded in the Biological Expression Language \(BEL\).

   :homepage: https://pybel.readthedocs.io
   :documentation: https://pybel.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/pybel/pybel
   :license: APACHE / Apache-2.0
   :recipe: /`pybel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybel/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx660`

   


.. conda:package:: pybel

   |downloads_pybel| |docker_pybel|

   :versions:
      
      

      ``0.13.2-0``,  ``0.9.3-1``,  ``0.9.3-0``,  ``0.5.4-0``,  ``0.4.0-0``

      

   
   :depends on bel-resources: 
   :depends on click: 
   :depends on click-plugins: 
   :depends on networkx: ``>=2.1``
   :depends on pyparsing: 
   :depends on python: ``>=3.5``
   :depends on requests: 
   :depends on requests-file: 
   :depends on sqlalchemy: 
   :depends on tqdm: 

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

    pixi global install pybel

to add into an existing workspace instead, run::

    pixi add pybel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pybel

Alternatively, to install into a new environment, run::

    conda create -n envname pybel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pybel:<tag>

(see `pybel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pybel| image:: https://img.shields.io/conda/dn/bioconda/pybel.svg?style=flat
   :target: https://anaconda.org/bioconda/pybel
   :alt:   (downloads)
.. |docker_pybel| image:: https://quay.io/repository/biocontainers/pybel/status
   :target: https://quay.io/repository/biocontainers/pybel
.. _`pybel/tags`: https://quay.io/repository/biocontainers/pybel?tab=tags


.. raw:: html

    <script>
        var package = "pybel";
        var versions = ["0.13.2","0.9.3","0.9.3","0.5.4","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybel/README.html