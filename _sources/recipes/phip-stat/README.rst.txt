:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phip-stat'
.. highlight: bash

phip-stat
=========

.. conda:recipe:: phip-stat
   :replaces_section_title:
   :noindex:

   PhIP\-seq analysis tools

   :homepage: https://github.com/lasersonlab/phip-stat
   :license: Apache-2.0
   :recipe: /`phip-stat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phip-stat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phip-stat/meta.yaml>`_

   


.. conda:package:: phip-stat

   |downloads_phip-stat| |docker_phip-stat|

   :versions:
      
      

      ``0.5.1-0``

      

   
   :depends on click: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on scipy: 
   :depends on tqdm: 

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

    pixi global install phip-stat

to add into an existing workspace instead, run::

    pixi add phip-stat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phip-stat

Alternatively, to install into a new environment, run::

    conda create -n envname phip-stat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phip-stat:<tag>

(see `phip-stat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phip-stat| image:: https://img.shields.io/conda/dn/bioconda/phip-stat.svg?style=flat
   :target: https://anaconda.org/bioconda/phip-stat
   :alt:   (downloads)
.. |docker_phip-stat| image:: https://quay.io/repository/biocontainers/phip-stat/status
   :target: https://quay.io/repository/biocontainers/phip-stat
.. _`phip-stat/tags`: https://quay.io/repository/biocontainers/phip-stat?tab=tags


.. raw:: html

    <script>
        var package = "phip-stat";
        var versions = ["0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phip-stat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phip-stat/README.html