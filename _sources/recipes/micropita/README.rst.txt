:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'micropita'
.. highlight: bash

micropita
=========

.. conda:recipe:: micropita
   :replaces_section_title:
   :noindex:

   microPITA is a computational tool enabling sample selection in two\-stage \(tiered\) studies.

   :homepage: http://huttenhower.sph.harvard.edu/micropita
   :license: MIT / MIT
   :recipe: /`micropita <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micropita>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/micropita/meta.yaml>`_
   :links: biotools: :biotools:`micropita`, doi: :doi:`10.1038/ismej.2013.139`

   


.. conda:package:: micropita

   |downloads_micropita| |docker_micropita|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends on biom-format: 
   :depends on blist: 
   :depends on cogent: 
   :depends on machine-learning-py: 
   :depends on mpi4py: 
   :depends on numpy: 
   :depends on python: ``<3``
   :depends on scipy: 

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

    pixi global install micropita

to add into an existing workspace instead, run::

    pixi add micropita

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install micropita

Alternatively, to install into a new environment, run::

    conda create -n envname micropita

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/micropita:<tag>

(see `micropita/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_micropita| image:: https://img.shields.io/conda/dn/bioconda/micropita.svg?style=flat
   :target: https://anaconda.org/bioconda/micropita
   :alt:   (downloads)
.. |docker_micropita| image:: https://quay.io/repository/biocontainers/micropita/status
   :target: https://quay.io/repository/biocontainers/micropita
.. _`micropita/tags`: https://quay.io/repository/biocontainers/micropita?tab=tags


.. raw:: html

    <script>
        var package = "micropita";
        var versions = ["1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/micropita/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/micropita/README.html