:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfba'
.. highlight: bash

pyfba
=====

.. conda:recipe:: pyfba
   :replaces_section_title:
   :noindex:

   Python\-based Flux Balance Analysis using the ModelSEED

   :homepage: https://linsalrob.github.io/PyFBA/
   :developer docs: https://github.com/linsalrob/PyFBA/
   :license: MIT / MIT
   :recipe: /`pyfba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfba/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.4972064`

   


.. conda:package:: pyfba

   |downloads_pyfba| |docker_pyfba|

   :versions:
      
      

      ``2.62-5``,  ``2.62-4``,  ``2.62-3``,  ``2.62-2``,  ``2.62-1``,  ``2.62-0``,  ``2.59-0``,  ``2.58-0``,  ``2.55-0``

      

   
   :depends on beautifulsoup4: 
   :depends on glpk: ``>=5.0,<6.0a0``
   :depends on importlib_resources: 
   :depends on jupyter: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on lxml: 
   :depends on pyglpk: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install pyfba

to add into an existing workspace instead, run::

    pixi add pyfba

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyfba

Alternatively, to install into a new environment, run::

    conda create -n envname pyfba

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyfba:<tag>

(see `pyfba/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyfba| image:: https://img.shields.io/conda/dn/bioconda/pyfba.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfba
   :alt:   (downloads)
.. |docker_pyfba| image:: https://quay.io/repository/biocontainers/pyfba/status
   :target: https://quay.io/repository/biocontainers/pyfba
.. _`pyfba/tags`: https://quay.io/repository/biocontainers/pyfba?tab=tags


.. raw:: html

    <script>
        var package = "pyfba";
        var versions = ["2.62","2.62","2.62","2.62","2.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfba/README.html