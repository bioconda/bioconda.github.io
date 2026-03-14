:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'logomaker'
.. highlight: bash

logomaker
=========

.. conda:recipe:: logomaker
   :replaces_section_title:
   :noindex:

   Package for making Sequence Logos

   :homepage: http://logomaker.readthedocs.io
   :license: MIT / MIT
   :recipe: /`logomaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/logomaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/logomaker/meta.yaml>`_

   


.. conda:package:: logomaker

   |downloads_logomaker| |docker_logomaker|

   :versions:
      
      

      ``0.8-1``,  ``0.8-0``

      

   
   :depends on matplotlib: 
   :depends on numpy: 
   :depends on pandas: 
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

    pixi global install logomaker

to add into an existing workspace instead, run::

    pixi add logomaker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install logomaker

Alternatively, to install into a new environment, run::

    conda create -n envname logomaker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/logomaker:<tag>

(see `logomaker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_logomaker| image:: https://img.shields.io/conda/dn/bioconda/logomaker.svg?style=flat
   :target: https://anaconda.org/bioconda/logomaker
   :alt:   (downloads)
.. |docker_logomaker| image:: https://quay.io/repository/biocontainers/logomaker/status
   :target: https://quay.io/repository/biocontainers/logomaker
.. _`logomaker/tags`: https://quay.io/repository/biocontainers/logomaker?tab=tags


.. raw:: html

    <script>
        var package = "logomaker";
        var versions = ["0.8","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/logomaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/logomaker/README.html