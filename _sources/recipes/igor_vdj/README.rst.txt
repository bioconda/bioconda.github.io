:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igor_vdj'
.. highlight: bash

igor_vdj
========

.. conda:recipe:: igor_vdj
   :replaces_section_title:
   :noindex:

   IGoR is a C\+\+ software designed to infer V\(D\)J recombination related processes from sequencing data.

   :homepage: https://github.com/qmarcou/IGoR
   :license: GPL3
   :recipe: /`igor_vdj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igor_vdj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igor_vdj/meta.yaml>`_

   


.. conda:package:: igor_vdj

   |downloads_igor_vdj| |docker_igor_vdj|

   :versions:
      
      

      ``1.4.0-0``,  ``1.3.0-0``

      

   
   :depends on libgcc-ng: ``>=7.3.0``
   :depends on libstdcxx-ng: ``>=7.3.0``

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

    pixi global install igor_vdj

to add into an existing workspace instead, run::

    pixi add igor_vdj

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install igor_vdj

Alternatively, to install into a new environment, run::

    conda create -n envname igor_vdj

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/igor_vdj:<tag>

(see `igor_vdj/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_igor_vdj| image:: https://img.shields.io/conda/dn/bioconda/igor_vdj.svg?style=flat
   :target: https://anaconda.org/bioconda/igor_vdj
   :alt:   (downloads)
.. |docker_igor_vdj| image:: https://quay.io/repository/biocontainers/igor_vdj/status
   :target: https://quay.io/repository/biocontainers/igor_vdj
.. _`igor_vdj/tags`: https://quay.io/repository/biocontainers/igor_vdj?tab=tags


.. raw:: html

    <script>
        var package = "igor_vdj";
        var versions = ["1.4.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igor_vdj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igor_vdj/README.html