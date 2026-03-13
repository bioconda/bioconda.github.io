:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minys'
.. highlight: bash

minys
=====

.. conda:recipe:: minys
   :replaces_section_title:
   :noindex:

   MinYS allows targeted assembly of bacterial genomes using a reference\-guided pipeline.

   :homepage: https://github.com/cguyomar/MinYS
   :license: file
   :recipe: /`minys <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minys>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minys/meta.yaml>`_

   


.. conda:package:: minys

   |downloads_minys| |docker_minys|

   :versions:
      
      

      ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends on bwa: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on mindthegap: 
   :depends on minia: 
   :depends on numpy: 
   :depends on pyani: 
   :depends on python: ``>=3``
   :depends on samtools: 

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

    pixi global install minys

to add into an existing workspace instead, run::

    pixi add minys

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install minys

Alternatively, to install into a new environment, run::

    conda create -n envname minys

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/minys:<tag>

(see `minys/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_minys| image:: https://img.shields.io/conda/dn/bioconda/minys.svg?style=flat
   :target: https://anaconda.org/bioconda/minys
   :alt:   (downloads)
.. |docker_minys| image:: https://quay.io/repository/biocontainers/minys/status
   :target: https://quay.io/repository/biocontainers/minys
.. _`minys/tags`: https://quay.io/repository/biocontainers/minys?tab=tags


.. raw:: html

    <script>
        var package = "minys";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minys/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minys/README.html