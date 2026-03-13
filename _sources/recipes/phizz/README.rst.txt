:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phizz'
.. highlight: bash

phizz
=====

.. conda:recipe:: phizz
   :replaces_section_title:
   :noindex:

   Tool to query hpo database and some other sources

   :homepage: https://github.com/moonso/phizz
   :license: MIT License
   :recipe: /`phizz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phizz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phizz/meta.yaml>`_

   


.. conda:package:: phizz

   |downloads_phizz| |docker_phizz|

   :versions:
      
      

      ``0.2.3-0``,  ``0.0.1-2``,  ``0.0.1-0``

      

   
   :depends on click: 
   :depends on configobj: 
   :depends on interval_tree: 
   :depends on python: 

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

    pixi global install phizz

to add into an existing workspace instead, run::

    pixi add phizz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phizz

Alternatively, to install into a new environment, run::

    conda create -n envname phizz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phizz:<tag>

(see `phizz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phizz| image:: https://img.shields.io/conda/dn/bioconda/phizz.svg?style=flat
   :target: https://anaconda.org/bioconda/phizz
   :alt:   (downloads)
.. |docker_phizz| image:: https://quay.io/repository/biocontainers/phizz/status
   :target: https://quay.io/repository/biocontainers/phizz
.. _`phizz/tags`: https://quay.io/repository/biocontainers/phizz?tab=tags


.. raw:: html

    <script>
        var package = "phizz";
        var versions = ["0.2.3","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phizz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phizz/README.html