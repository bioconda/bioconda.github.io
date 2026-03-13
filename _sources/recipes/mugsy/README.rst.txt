:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mugsy'
.. highlight: bash

mugsy
=====

.. conda:recipe:: mugsy
   :replaces_section_title:
   :noindex:

   Mugsy is a multiple whole genome aligner.

   :homepage: http://mugsy.sourceforge.net
   :license: Artistic License 2.0
   :recipe: /`mugsy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mugsy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mugsy/meta.yaml>`_

   


.. conda:package:: mugsy

   |downloads_mugsy| |docker_mugsy|

   :versions:
      
      

      ``1.2.3-5``,  ``1.2.3-4``,  ``1.2.3-3``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``

      

   
   :depends on perl: 
   :depends on sed: 

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

    pixi global install mugsy

to add into an existing workspace instead, run::

    pixi add mugsy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mugsy

Alternatively, to install into a new environment, run::

    conda create -n envname mugsy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mugsy:<tag>

(see `mugsy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mugsy| image:: https://img.shields.io/conda/dn/bioconda/mugsy.svg?style=flat
   :target: https://anaconda.org/bioconda/mugsy
   :alt:   (downloads)
.. |docker_mugsy| image:: https://quay.io/repository/biocontainers/mugsy/status
   :target: https://quay.io/repository/biocontainers/mugsy
.. _`mugsy/tags`: https://quay.io/repository/biocontainers/mugsy?tab=tags


.. raw:: html

    <script>
        var package = "mugsy";
        var versions = ["1.2.3","1.2.3","1.2.3","1.2.3","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mugsy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mugsy/README.html