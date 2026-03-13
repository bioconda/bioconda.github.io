:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ebcsgen'
.. highlight: bash

ebcsgen
=======

.. conda:recipe:: ebcsgen
   :replaces_section_title:
   :noindex:

   eBSCgen is a tool for development and analysis of models written in Biochemical Space Language \(BCSL\).

   :homepage: https://github.com/sybila/eBCSgen
   :documentation: https://ebcsgen.readthedocs.io/
   
   :license: MIT
   :recipe: /`ebcsgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebcsgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebcsgen/meta.yaml>`_

   


.. conda:package:: ebcsgen

   |downloads_ebcsgen| |docker_ebcsgen|

   :versions:
      
      

      ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.3-0``,  ``1.2-0``

      

   
   :depends on lark: 
   :depends on lark-parser: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pymodelchecking: 
   :depends on pyparsing: 
   :depends on python: ``>=3.9``
   :depends on python-libsbml: 
   :depends on regex: 
   :depends on requests: 
   :depends on scipy: 
   :depends on sortedcontainers: 
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

    pixi global install ebcsgen

to add into an existing workspace instead, run::

    pixi add ebcsgen

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ebcsgen

Alternatively, to install into a new environment, run::

    conda create -n envname ebcsgen

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ebcsgen:<tag>

(see `ebcsgen/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ebcsgen| image:: https://img.shields.io/conda/dn/bioconda/ebcsgen.svg?style=flat
   :target: https://anaconda.org/bioconda/ebcsgen
   :alt:   (downloads)
.. |docker_ebcsgen| image:: https://quay.io/repository/biocontainers/ebcsgen/status
   :target: https://quay.io/repository/biocontainers/ebcsgen
.. _`ebcsgen/tags`: https://quay.io/repository/biocontainers/ebcsgen?tab=tags


.. raw:: html

    <script>
        var package = "ebcsgen";
        var versions = ["2.2.0","2.1.0","2.0.4","2.0.3","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ebcsgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ebcsgen/README.html