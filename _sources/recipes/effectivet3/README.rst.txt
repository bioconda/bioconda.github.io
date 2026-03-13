:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'effectivet3'
.. highlight: bash

effectivet3
===========

.. conda:recipe:: effectivet3
   :replaces_section_title:
   :noindex:

   Command line NoD \(clinod\)\, for  predicting nucleolar localization sequences.

   :homepage: http://www.compbio.dundee.ac.uk/nod
   :license: Apache License, Version 2.0 + others used internally
   :recipe: /`effectivet3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/effectivet3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/effectivet3/meta.yaml>`_
   :links: biotools: :biotools:`effectivet3`

   


.. conda:package:: effectivet3

   |downloads_effectivet3| |docker_effectivet3|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on openjdk: ``>=6``
   :depends on python: ``2.7*``

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

    pixi global install effectivet3

to add into an existing workspace instead, run::

    pixi add effectivet3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install effectivet3

Alternatively, to install into a new environment, run::

    conda create -n envname effectivet3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/effectivet3:<tag>

(see `effectivet3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_effectivet3| image:: https://img.shields.io/conda/dn/bioconda/effectivet3.svg?style=flat
   :target: https://anaconda.org/bioconda/effectivet3
   :alt:   (downloads)
.. |docker_effectivet3| image:: https://quay.io/repository/biocontainers/effectivet3/status
   :target: https://quay.io/repository/biocontainers/effectivet3
.. _`effectivet3/tags`: https://quay.io/repository/biocontainers/effectivet3?tab=tags


.. raw:: html

    <script>
        var package = "effectivet3";
        var versions = ["1.0.1"];
    </script>





Notes
-----
EffectiveT3 is Java program which is packaged with a custom wrapper shell
script. This shell wrapper is called \"effectivet3\" and is on \$PATH by
default. By default \"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want
to overwrite it you can specify these values directly after your binaries.
If you have \_JAVA\_OPTIONS set globally this will take precedence.
For example run it with \"effectivet3 \-Xms512m \-Xmx1g ...\"



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/effectivet3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/effectivet3/README.html