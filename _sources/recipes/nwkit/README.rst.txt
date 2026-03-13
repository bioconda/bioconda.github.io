:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nwkit'
.. highlight: bash

nwkit
=====

.. conda:recipe:: nwkit
   :replaces_section_title:
   :noindex:

   Tools for processing newick trees

   :homepage: https://github.com/kfuku52/nwkit
   :license: BSD-3-Clause
   :recipe: /`nwkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nwkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nwkit/meta.yaml>`_

   


.. conda:package:: nwkit

   |downloads_nwkit| |docker_nwkit|

   :versions:
      
      

      ``0.21.1-0``,  ``0.19.2-0``,  ``0.18.2-1``,  ``0.18.2-0``,  ``0.18.1-0``,  ``0.18.0-0``,  ``0.17.2-0``

      

   
   :depends on biopython: 
   :depends on ete4: ``>=4.3.0``
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.9``
   :depends on requests: 

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

    pixi global install nwkit

to add into an existing workspace instead, run::

    pixi add nwkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nwkit

Alternatively, to install into a new environment, run::

    conda create -n envname nwkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nwkit:<tag>

(see `nwkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nwkit| image:: https://img.shields.io/conda/dn/bioconda/nwkit.svg?style=flat
   :target: https://anaconda.org/bioconda/nwkit
   :alt:   (downloads)
.. |docker_nwkit| image:: https://quay.io/repository/biocontainers/nwkit/status
   :target: https://quay.io/repository/biocontainers/nwkit
.. _`nwkit/tags`: https://quay.io/repository/biocontainers/nwkit?tab=tags


.. raw:: html

    <script>
        var package = "nwkit";
        var versions = ["0.21.1","0.19.2","0.18.2","0.18.2","0.18.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nwkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nwkit/README.html