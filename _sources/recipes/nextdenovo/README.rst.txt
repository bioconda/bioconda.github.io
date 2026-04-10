:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextdenovo'
.. highlight: bash

nextdenovo
==========

.. conda:recipe:: nextdenovo
   :replaces_section_title:
   :noindex:

   String graph\-based de novo assembler for long reads \(CLR\, HiFi and ONT\)

   :homepage: https://github.com/Nextomics/NextDenovo
   :documentation: https://nextdenovo.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`nextdenovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextdenovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextdenovo/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.03.09.531669`, biotools: :biotools:`nextdenovo`, usegalaxy-eu: :usegalaxy-eu:`nextdenovo`

   


.. conda:package:: nextdenovo

   |downloads_nextdenovo| |docker_nextdenovo|

   :versions:
      
      

      ``2.5.2-6``,  ``2.5.2-5``,  ``2.5.2-4``,  ``2.5.2-3``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on paralleltask: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install nextdenovo

to add into an existing workspace instead, run::

    pixi add nextdenovo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nextdenovo

Alternatively, to install into a new environment, run::

    conda create -n envname nextdenovo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nextdenovo:<tag>

(see `nextdenovo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nextdenovo| image:: https://img.shields.io/conda/dn/bioconda/nextdenovo.svg?style=flat
   :target: https://anaconda.org/bioconda/nextdenovo
   :alt:   (downloads)
.. |docker_nextdenovo| image:: https://quay.io/repository/biocontainers/nextdenovo/status
   :target: https://quay.io/repository/biocontainers/nextdenovo
.. _`nextdenovo/tags`: https://quay.io/repository/biocontainers/nextdenovo?tab=tags


.. raw:: html

    <script>
        var package = "nextdenovo";
        var versions = ["2.5.2","2.5.2","2.5.2","2.5.2","2.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextdenovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextdenovo/README.html