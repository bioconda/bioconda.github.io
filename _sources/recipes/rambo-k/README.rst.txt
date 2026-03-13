:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rambo-k'
.. highlight: bash

rambo-k
=======

.. conda:recipe:: rambo-k
   :replaces_section_title:
   :noindex:

   a reference\-based tool for rapid and sensitive extraction of one organism´s reads from a mixed NGS dataset

   :homepage: https://gitlab.com/SimonHTausch/RAMBO-K
   :license: GNU Lesser General Public License v3.0
   :recipe: /`rambo-k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rambo-k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rambo-k/meta.yaml>`_

   


.. conda:package:: rambo-k

   |downloads_rambo-k| |docker_rambo-k|

   :versions:
      
      

      ``1.21-1``,  ``1.21-0``

      

   
   :depends on argparse: 
   :depends on matplotlib: 
   :depends on numpy: 
   :depends on openjdk: 
   :depends on python: 
   :depends on scikit-learn: 

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

    pixi global install rambo-k

to add into an existing workspace instead, run::

    pixi add rambo-k

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rambo-k

Alternatively, to install into a new environment, run::

    conda create -n envname rambo-k

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rambo-k:<tag>

(see `rambo-k/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rambo-k| image:: https://img.shields.io/conda/dn/bioconda/rambo-k.svg?style=flat
   :target: https://anaconda.org/bioconda/rambo-k
   :alt:   (downloads)
.. |docker_rambo-k| image:: https://quay.io/repository/biocontainers/rambo-k/status
   :target: https://quay.io/repository/biocontainers/rambo-k
.. _`rambo-k/tags`: https://quay.io/repository/biocontainers/rambo-k?tab=tags


.. raw:: html

    <script>
        var package = "rambo-k";
        var versions = ["1.21","1.21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rambo-k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rambo-k/README.html