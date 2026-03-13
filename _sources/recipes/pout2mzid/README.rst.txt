:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pout2mzid'
.. highlight: bash

pout2mzid
=========

.. conda:recipe:: pout2mzid
   :replaces_section_title:
   :noindex:

   Adds percolator statistics to mzIdentML files that were used as input to percolator

   :homepage: https://github.com/percolator/pout2mzid
   :license: Apache License, Version 2.0
   :recipe: /`pout2mzid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pout2mzid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pout2mzid/meta.yaml>`_

   


.. conda:package:: pout2mzid

   |downloads_pout2mzid| |docker_pout2mzid|

   :versions:
      
      

      ``0.3.03-2``

      

   
   :depends on boost: ``==1.62``
   :depends on libgcc: 
   :depends on xerces-c: 
   :depends on xsd: 

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

    pixi global install pout2mzid

to add into an existing workspace instead, run::

    pixi add pout2mzid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pout2mzid

Alternatively, to install into a new environment, run::

    conda create -n envname pout2mzid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pout2mzid:<tag>

(see `pout2mzid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pout2mzid| image:: https://img.shields.io/conda/dn/bioconda/pout2mzid.svg?style=flat
   :target: https://anaconda.org/bioconda/pout2mzid
   :alt:   (downloads)
.. |docker_pout2mzid| image:: https://quay.io/repository/biocontainers/pout2mzid/status
   :target: https://quay.io/repository/biocontainers/pout2mzid
.. _`pout2mzid/tags`: https://quay.io/repository/biocontainers/pout2mzid?tab=tags


.. raw:: html

    <script>
        var package = "pout2mzid";
        var versions = ["0.3.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pout2mzid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pout2mzid/README.html