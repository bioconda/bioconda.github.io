:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reframed'
.. highlight: bash

reframed
========

.. conda:recipe:: reframed
   :replaces_section_title:
   :noindex:

   Metabolic modeling package.

   :homepage: https://github.com/cdanielmachado/reframed
   :license: APACHE / Apache-2.0
   :recipe: /`reframed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reframed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reframed/meta.yaml>`_
   :links: biotools: :biotools:`reframed`, doi: :doi:`10.5281/zenodo.7955995`

   


.. conda:package:: reframed

   |downloads_reframed| |docker_reframed|

   :versions:
      
      

      ``1.6.0-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``

      

   
   :depends on numpy: 
   :depends on pyscipopt: 
   :depends on python: ``>=3.6``
   :depends on python-libsbml: 
   :depends on scip: 
   :depends on scipy: 
   :depends on sympy: 

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

    pixi global install reframed

to add into an existing workspace instead, run::

    pixi add reframed

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install reframed

Alternatively, to install into a new environment, run::

    conda create -n envname reframed

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/reframed:<tag>

(see `reframed/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_reframed| image:: https://img.shields.io/conda/dn/bioconda/reframed.svg?style=flat
   :target: https://anaconda.org/bioconda/reframed
   :alt:   (downloads)
.. |docker_reframed| image:: https://quay.io/repository/biocontainers/reframed/status
   :target: https://quay.io/repository/biocontainers/reframed
.. _`reframed/tags`: https://quay.io/repository/biocontainers/reframed?tab=tags


.. raw:: html

    <script>
        var package = "reframed";
        var versions = ["1.6.0","1.5.4","1.5.3","1.5.2","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reframed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reframed/README.html