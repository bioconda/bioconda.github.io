:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanopolishcomp'
.. highlight: bash

nanopolishcomp
==============

.. conda:recipe:: nanopolishcomp
   :replaces_section_title:
   :noindex:

   NanopolishComp is a Python3 package for downstream analyses of Nanopolish output files

   :homepage: https://github.com/a-slide/NanopolishComp
   :license: MIT
   :recipe: /`nanopolishcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolishcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolishcomp/meta.yaml>`_

   


.. conda:package:: nanopolishcomp

   |downloads_nanopolishcomp| |docker_nanopolishcomp|

   :versions:
      
      

      ``0.6.12-0``,  ``0.6.11-0``

      

   
   :depends on numpy: ``>=1.14.0``
   :depends on python: ``>=3.6``
   :depends on tqdm: ``>=4.23.4``

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

    pixi global install nanopolishcomp

to add into an existing workspace instead, run::

    pixi add nanopolishcomp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanopolishcomp

Alternatively, to install into a new environment, run::

    conda create -n envname nanopolishcomp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanopolishcomp:<tag>

(see `nanopolishcomp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanopolishcomp| image:: https://img.shields.io/conda/dn/bioconda/nanopolishcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/nanopolishcomp
   :alt:   (downloads)
.. |docker_nanopolishcomp| image:: https://quay.io/repository/biocontainers/nanopolishcomp/status
   :target: https://quay.io/repository/biocontainers/nanopolishcomp
.. _`nanopolishcomp/tags`: https://quay.io/repository/biocontainers/nanopolishcomp?tab=tags


.. raw:: html

    <script>
        var package = "nanopolishcomp";
        var versions = ["0.6.12","0.6.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanopolishcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanopolishcomp/README.html