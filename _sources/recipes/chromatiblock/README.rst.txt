:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromatiblock'
.. highlight: bash

chromatiblock
=============

.. conda:recipe:: chromatiblock
   :replaces_section_title:
   :noindex:

   Scalable\, whole\-genome visualisation of structural changes in prokaryotes.

   :homepage: http://github.com/mjsull/chromatiblock/
   :license: GPL-3.0-only
   :recipe: /`chromatiblock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromatiblock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromatiblock/meta.yaml>`_

   


.. conda:package:: chromatiblock

   |downloads_chromatiblock| |docker_chromatiblock|

   :versions:
      
      

      ``1.0.0-0``,  ``0.5.1-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.1-0``,  ``0.3.0-0``

      

   
   :depends on blast: ``>=2.2``
   :depends on cairosvg: 
   :depends on python: ``>=3.6``
   :depends on sibelia: 

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

    pixi global install chromatiblock

to add into an existing workspace instead, run::

    pixi add chromatiblock

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chromatiblock

Alternatively, to install into a new environment, run::

    conda create -n envname chromatiblock

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chromatiblock:<tag>

(see `chromatiblock/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chromatiblock| image:: https://img.shields.io/conda/dn/bioconda/chromatiblock.svg?style=flat
   :target: https://anaconda.org/bioconda/chromatiblock
   :alt:   (downloads)
.. |docker_chromatiblock| image:: https://quay.io/repository/biocontainers/chromatiblock/status
   :target: https://quay.io/repository/biocontainers/chromatiblock
.. _`chromatiblock/tags`: https://quay.io/repository/biocontainers/chromatiblock?tab=tags


.. raw:: html

    <script>
        var package = "chromatiblock";
        var versions = ["1.0.0","0.5.1","0.4.2","0.4.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromatiblock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromatiblock/README.html