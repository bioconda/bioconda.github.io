:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bin2cell'
.. highlight: bash

bin2cell
========

.. conda:recipe:: bin2cell
   :replaces_section_title:
   :noindex:

   Join subcellular Visium HD bins into cells

   :homepage: https://github.com/Teichlab/bin2cell
   :license: MIT
   :recipe: /`bin2cell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bin2cell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bin2cell/meta.yaml>`_

   


.. conda:package:: bin2cell

   |downloads_bin2cell| |docker_bin2cell|

   :versions:
      
      

      ``0.3.4-0``,  ``0.3.3-0``

      

   
   :depends on fastparquet: 
   :depends on opencv: 
   :depends on python: ``>=3.7``
   :depends on scanpy: 
   :depends on scikit-image: 

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

    pixi global install bin2cell

to add into an existing workspace instead, run::

    pixi add bin2cell

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bin2cell

Alternatively, to install into a new environment, run::

    conda create -n envname bin2cell

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bin2cell:<tag>

(see `bin2cell/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bin2cell| image:: https://img.shields.io/conda/dn/bioconda/bin2cell.svg?style=flat
   :target: https://anaconda.org/bioconda/bin2cell
   :alt:   (downloads)
.. |docker_bin2cell| image:: https://quay.io/repository/biocontainers/bin2cell/status
   :target: https://quay.io/repository/biocontainers/bin2cell
.. _`bin2cell/tags`: https://quay.io/repository/biocontainers/bin2cell?tab=tags


.. raw:: html

    <script>
        var package = "bin2cell";
        var versions = ["0.3.4","0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bin2cell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bin2cell/README.html