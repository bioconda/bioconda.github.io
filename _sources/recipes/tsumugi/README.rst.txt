:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tsumugi'
.. highlight: bash

tsumugi
=======

.. conda:recipe:: tsumugi
   :replaces_section_title:
   :noindex:

   TSUMUGI\: Phenotype\-driven gene network identifier

   :homepage: https://github.com/akikuno/TSUMUGI-dev
   :documentation: https://github.com/akikuno/TSUMUGI-dev/blob/1.0.2/README.md
   
   :license: MIT
   :recipe: /`tsumugi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tsumugi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tsumugi/meta.yaml>`_

   


.. conda:package:: tsumugi

   |downloads_tsumugi| |docker_tsumugi|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.5.0-0``

      

   
   :depends on networkx: ``>=3.3``
   :depends on numpy: ``>=1.21.0``
   :depends on python: ``>=3.10``
   :depends on tqdm: ``>=4.64.0``

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

    pixi global install tsumugi

to add into an existing workspace instead, run::

    pixi add tsumugi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tsumugi

Alternatively, to install into a new environment, run::

    conda create -n envname tsumugi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tsumugi:<tag>

(see `tsumugi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tsumugi| image:: https://img.shields.io/conda/dn/bioconda/tsumugi.svg?style=flat
   :target: https://anaconda.org/bioconda/tsumugi
   :alt:   (downloads)
.. |docker_tsumugi| image:: https://quay.io/repository/biocontainers/tsumugi/status
   :target: https://quay.io/repository/biocontainers/tsumugi
.. _`tsumugi/tags`: https://quay.io/repository/biocontainers/tsumugi?tab=tags


.. raw:: html

    <script>
        var package = "tsumugi";
        var versions = ["1.0.2","1.0.1","1.0.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tsumugi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tsumugi/README.html