:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangwes'
.. highlight: bash

pangwes
=======

.. conda:recipe:: pangwes
   :replaces_section_title:
   :noindex:

   Performing pangenome\-spanning epistasis and co\-selection analysis via de Bruijn graphs

   :homepage: https://github.com/jurikuronen/PANGWES
   :license: MIT
   :recipe: /`pangwes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangwes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangwes/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.09.07.556769`

   


.. conda:package:: pangwes

   |downloads_pangwes| |docker_pangwes|

   :versions:
      
      

      ``0.3.0_alpha-1``,  ``0.3.0_alpha-0``,  ``0.2.0_alpha-0``

      

   
   :depends on cuttlefish: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: 
   :depends on spydrpick: 

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

    pixi global install pangwes

to add into an existing workspace instead, run::

    pixi add pangwes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pangwes

Alternatively, to install into a new environment, run::

    conda create -n envname pangwes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pangwes:<tag>

(see `pangwes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pangwes| image:: https://img.shields.io/conda/dn/bioconda/pangwes.svg?style=flat
   :target: https://anaconda.org/bioconda/pangwes
   :alt:   (downloads)
.. |docker_pangwes| image:: https://quay.io/repository/biocontainers/pangwes/status
   :target: https://quay.io/repository/biocontainers/pangwes
.. _`pangwes/tags`: https://quay.io/repository/biocontainers/pangwes?tab=tags


.. raw:: html

    <script>
        var package = "pangwes";
        var versions = ["0.3.0_alpha","0.3.0_alpha","0.2.0_alpha"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangwes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangwes/README.html