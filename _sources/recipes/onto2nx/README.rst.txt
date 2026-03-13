:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'onto2nx'
.. highlight: bash

onto2nx
=======

.. conda:recipe:: onto2nx
   :replaces_section_title:
   :noindex:

   A package for parsing ontologies in the OWL and OBO format into NetworkX graphs

   :homepage: https://github.com/cthoyt/onto2nx
   :documentation: https://onto2nx.readthedocs.io/en/latest/
   
   :license: GPL / GPL 3.0
   :recipe: /`onto2nx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/onto2nx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/onto2nx/meta.yaml>`_

   


.. conda:package:: onto2nx

   |downloads_onto2nx| |docker_onto2nx|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on click: 
   :depends on networkx: ``1.11``
   :depends on python: 
   :depends on rdflib: ``4.2.1``
   :depends on rdflib-jsonld: 
   :depends on requests: 
   :depends on requests-file: 
   :depends on sparqlwrapper: 

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

    pixi global install onto2nx

to add into an existing workspace instead, run::

    pixi add onto2nx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install onto2nx

Alternatively, to install into a new environment, run::

    conda create -n envname onto2nx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/onto2nx:<tag>

(see `onto2nx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_onto2nx| image:: https://img.shields.io/conda/dn/bioconda/onto2nx.svg?style=flat
   :target: https://anaconda.org/bioconda/onto2nx
   :alt:   (downloads)
.. |docker_onto2nx| image:: https://quay.io/repository/biocontainers/onto2nx/status
   :target: https://quay.io/repository/biocontainers/onto2nx
.. _`onto2nx/tags`: https://quay.io/repository/biocontainers/onto2nx?tab=tags


.. raw:: html

    <script>
        var package = "onto2nx";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/onto2nx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/onto2nx/README.html