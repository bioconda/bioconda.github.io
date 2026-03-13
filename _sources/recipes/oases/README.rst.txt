:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oases'
.. highlight: bash

oases
=====

.. conda:recipe:: oases
   :replaces_section_title:
   :noindex:

   De novo transcriptome assembler for short reads

   :homepage: http://www.ebi.ac.uk/~zerbino/oases/
   :license: GPL-3.0-or-later
   :recipe: /`oases <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oases>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oases/meta.yaml>`_
   :links: biotools: :biotools:`oases`

   


.. conda:package:: oases

   |downloads_oases| |docker_oases|

   :versions:
      
      

      ``0.2.09-2``,  ``0.2.09-1``,  ``0.2.09-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on velvet: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install oases

to add into an existing workspace instead, run::

    pixi add oases

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install oases

Alternatively, to install into a new environment, run::

    conda create -n envname oases

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/oases:<tag>

(see `oases/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_oases| image:: https://img.shields.io/conda/dn/bioconda/oases.svg?style=flat
   :target: https://anaconda.org/bioconda/oases
   :alt:   (downloads)
.. |docker_oases| image:: https://quay.io/repository/biocontainers/oases/status
   :target: https://quay.io/repository/biocontainers/oases
.. _`oases/tags`: https://quay.io/repository/biocontainers/oases?tab=tags


.. raw:: html

    <script>
        var package = "oases";
        var versions = ["0.2.09","0.2.09","0.2.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oases/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oases/README.html