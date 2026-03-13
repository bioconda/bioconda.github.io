:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'titan-gc'
.. highlight: bash

titan-gc
========

.. conda:recipe:: titan-gc
   :replaces_section_title:
   :noindex:

   Command\-line version of the Titan genomic characterization workflow for viral pathogens of concern.

   :homepage: https://github.com/theiagen/public_health_viral_genomics
   :license: AGPL / AGPL-3.0
   :recipe: /`titan-gc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/titan-gc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/titan-gc/meta.yaml>`_

   


.. conda:package:: titan-gc

   |downloads_titan-gc| |docker_titan-gc|

   :versions:
      
      

      ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``

      

   
   :depends on cromwell: 
   :depends on python: ``>=3.7``

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

    pixi global install titan-gc

to add into an existing workspace instead, run::

    pixi add titan-gc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install titan-gc

Alternatively, to install into a new environment, run::

    conda create -n envname titan-gc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/titan-gc:<tag>

(see `titan-gc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_titan-gc| image:: https://img.shields.io/conda/dn/bioconda/titan-gc.svg?style=flat
   :target: https://anaconda.org/bioconda/titan-gc
   :alt:   (downloads)
.. |docker_titan-gc| image:: https://quay.io/repository/biocontainers/titan-gc/status
   :target: https://quay.io/repository/biocontainers/titan-gc
.. _`titan-gc/tags`: https://quay.io/repository/biocontainers/titan-gc?tab=tags


.. raw:: html

    <script>
        var package = "titan-gc";
        var versions = ["1.5.3","1.5.3","1.5.2","1.5.1","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/titan-gc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/titan-gc/README.html