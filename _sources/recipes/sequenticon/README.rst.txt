:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequenticon'
.. highlight: bash

sequenticon
===========

.. conda:recipe:: sequenticon
   :replaces_section_title:
   :noindex:

   Generate human\-friendly icons from DNA sequences.

   :homepage: https://github.com/Edinburgh-Genome-Foundry/sequenticon
   :documentation: https://github.com/Edinburgh-Genome-Foundry/sequenticon/blob/v0.1.8/README.rst
   
   :license: MIT / MIT
   :recipe: /`sequenticon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenticon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequenticon/meta.yaml>`_

   


.. conda:package:: sequenticon

   |downloads_sequenticon| |docker_sequenticon|

   :versions:
      
      

      ``0.1.8-0``,  ``0.1.7-0``,  ``0.1.6-0``

      

   
   :depends on biopython: 
   :depends on flametree: 
   :depends on pdf-reports: 
   :depends on pydenticon: 
   :depends on python: ``>=3.9``
   :depends on snapgene-reader: 

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

    pixi global install sequenticon

to add into an existing workspace instead, run::

    pixi add sequenticon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sequenticon

Alternatively, to install into a new environment, run::

    conda create -n envname sequenticon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sequenticon:<tag>

(see `sequenticon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sequenticon| image:: https://img.shields.io/conda/dn/bioconda/sequenticon.svg?style=flat
   :target: https://anaconda.org/bioconda/sequenticon
   :alt:   (downloads)
.. |docker_sequenticon| image:: https://quay.io/repository/biocontainers/sequenticon/status
   :target: https://quay.io/repository/biocontainers/sequenticon
.. _`sequenticon/tags`: https://quay.io/repository/biocontainers/sequenticon?tab=tags


.. raw:: html

    <script>
        var package = "sequenticon";
        var versions = ["0.1.8","0.1.7","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequenticon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequenticon/README.html