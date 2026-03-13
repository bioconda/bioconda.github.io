:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tqdist'
.. highlight: bash

tqdist
======

.. conda:recipe:: tqdist/1.0.0
   :replaces_section_title:
   :noindex:

   computes the triplet distance between rooted trees in O\(n log n\) time and the quartet distance between unrooted trees in O\(dn log n\) time\, where d degree of the tree with the smallest degree.

   :homepage: http://users-cs.au.dk/cstorm/software/tqdist/
   :license: GPL / GPL
   :recipe: /`tqdist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tqdist>`_/`1.0.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tqdist/1.0.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tqdist/1.0.0/meta.yaml>`_

   


.. conda:package:: tqdist

   |downloads_tqdist| |docker_tqdist|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on libgcc-ng: ``>=9.3.0``
   :depends on libstdcxx-ng: ``>=9.3.0``

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

    pixi global install tqdist

to add into an existing workspace instead, run::

    pixi add tqdist

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tqdist

Alternatively, to install into a new environment, run::

    conda create -n envname tqdist

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tqdist:<tag>

(see `tqdist/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tqdist| image:: https://img.shields.io/conda/dn/bioconda/tqdist.svg?style=flat
   :target: https://anaconda.org/bioconda/tqdist
   :alt:   (downloads)
.. |docker_tqdist| image:: https://quay.io/repository/biocontainers/tqdist/status
   :target: https://quay.io/repository/biocontainers/tqdist
.. _`tqdist/tags`: https://quay.io/repository/biocontainers/tqdist?tab=tags


.. raw:: html

    <script>
        var package = "tqdist";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tqdist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tqdist/README.html