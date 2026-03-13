:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyjaspar'
.. highlight: bash

pyjaspar
========

.. conda:recipe:: pyjaspar
   :replaces_section_title:
   :noindex:

   pyJASPAR\: a serverless interface to Biopython to access different versions of JASPAR database.

   :homepage: https://github.com/asntech/pyjaspar
   :documentation: https://pyjaspar.rtfd.io
   
   :license: MIT / MIT
   :recipe: /`pyjaspar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyjaspar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyjaspar/meta.yaml>`_

   A serverless interface to Biopython to query and access JASPAR motifs from different releases of JASPAR database using sqlite3.


.. conda:package:: pyjaspar

   |downloads_pyjaspar| |docker_pyjaspar|

   :versions:
      
      

      ``4.0.0-0``,  ``3.0.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.6.0-0``,  ``1.5.5-0``,  ``1.5.0-0``,  ``1.0.0-0``

      

   
   :depends on biopython: 
   :depends on python: ``>=3.8``

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

    pixi global install pyjaspar

to add into an existing workspace instead, run::

    pixi add pyjaspar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyjaspar

Alternatively, to install into a new environment, run::

    conda create -n envname pyjaspar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyjaspar:<tag>

(see `pyjaspar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyjaspar| image:: https://img.shields.io/conda/dn/bioconda/pyjaspar.svg?style=flat
   :target: https://anaconda.org/bioconda/pyjaspar
   :alt:   (downloads)
.. |docker_pyjaspar| image:: https://quay.io/repository/biocontainers/pyjaspar/status
   :target: https://quay.io/repository/biocontainers/pyjaspar
.. _`pyjaspar/tags`: https://quay.io/repository/biocontainers/pyjaspar?tab=tags


.. raw:: html

    <script>
        var package = "pyjaspar";
        var versions = ["4.0.0","3.0.0","2.1.1","2.1.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyjaspar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyjaspar/README.html