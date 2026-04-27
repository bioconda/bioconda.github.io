:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isonclust2'
.. highlight: bash

isonclust2
==========

.. conda:recipe:: isonclust2
   :replaces_section_title:
   :noindex:

   De novo clustering of long transcriptomic reads

   :homepage: https://github.com/nanoporetech/isonclust2
   :license: MPL2
   :recipe: /`isonclust2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isonclust2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isonclust2/meta.yaml>`_

   


.. conda:package:: isonclust2

   |downloads_isonclust2| |docker_isonclust2|

   :versions:
      
      

      ``2.3-0``

      

   
   :depends on libgcc-ng: ``>=7.5.0``
   :depends on libstdcxx-ng: ``>=7.5.0``

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

    pixi global install isonclust2

to add into an existing workspace instead, run::

    pixi add isonclust2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install isonclust2

Alternatively, to install into a new environment, run::

    conda create -n envname isonclust2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/isonclust2:<tag>

(see `isonclust2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_isonclust2| image:: https://img.shields.io/conda/dn/bioconda/isonclust2.svg?style=flat
   :target: https://anaconda.org/bioconda/isonclust2
   :alt:   (downloads)
.. |docker_isonclust2| image:: https://quay.io/repository/biocontainers/isonclust2/status
   :target: https://quay.io/repository/biocontainers/isonclust2
.. _`isonclust2/tags`: https://quay.io/repository/biocontainers/isonclust2?tab=tags


.. raw:: html

    <script>
        var package = "isonclust2";
        var versions = ["2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isonclust2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isonclust2/README.html