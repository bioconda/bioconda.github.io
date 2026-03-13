:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'netsyn'
.. highlight: bash

netsyn
======

.. conda:recipe:: netsyn
   :replaces_section_title:
   :noindex:

   NetSyn is a tool to detect conserved genomic contexts \(i.e. synteny conservation\) among a list of protein targets.

   :homepage: https://github.com/labgem/netsyn
   :license: OTHER / CeCiLL 2.1
   :recipe: /`netsyn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netsyn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netsyn/meta.yaml>`_

   


.. conda:package:: netsyn

   |downloads_netsyn| |docker_netsyn|

   :versions:
      
      

      ``1.0.0-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends on biopython: 
   :depends on jsonschema: 
   :depends on markov_clustering: 
   :depends on mmseqs2: ``>=9.d36de``
   :depends on networkx: ``>=2.8``
   :depends on python: ``>=3.8``
   :depends on python-igraph: 
   :depends on pyyaml: 
   :depends on requests: 
   :depends on urllib3: 

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

    pixi global install netsyn

to add into an existing workspace instead, run::

    pixi add netsyn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install netsyn

Alternatively, to install into a new environment, run::

    conda create -n envname netsyn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/netsyn:<tag>

(see `netsyn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_netsyn| image:: https://img.shields.io/conda/dn/bioconda/netsyn.svg?style=flat
   :target: https://anaconda.org/bioconda/netsyn
   :alt:   (downloads)
.. |docker_netsyn| image:: https://quay.io/repository/biocontainers/netsyn/status
   :target: https://quay.io/repository/biocontainers/netsyn
.. _`netsyn/tags`: https://quay.io/repository/biocontainers/netsyn?tab=tags


.. raw:: html

    <script>
        var package = "netsyn";
        var versions = ["1.0.0","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/netsyn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/netsyn/README.html