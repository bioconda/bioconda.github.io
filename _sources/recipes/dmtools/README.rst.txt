:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dmtools'
.. highlight: bash

dmtools
=======

.. conda:recipe:: dmtools
   :replaces_section_title:
   :noindex:

   BS\-seq\, WGBS\, NOMe\-Seq\, RRBS data storage and analysis tool dmtools

   :homepage: https://github.com/ZhouQiangwei/dmtools
   :documentation: https://dmtools-docs.readthedocs.io/en/latest/index.html
   
   :license: MIT
   :recipe: /`dmtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dmtools/meta.yaml>`_

   


.. conda:package:: dmtools

   |downloads_dmtools| |docker_dmtools|

   :versions:
      
      

      ``0.2.6-0``

      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on htslib: ``>=1.19.1,<1.24.0a0``
   :depends on libcurl: ``>=8.7.1,<9.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on perl: 
   :depends on zlib: 

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

    pixi global install dmtools

to add into an existing workspace instead, run::

    pixi add dmtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dmtools

Alternatively, to install into a new environment, run::

    conda create -n envname dmtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dmtools:<tag>

(see `dmtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dmtools| image:: https://img.shields.io/conda/dn/bioconda/dmtools.svg?style=flat
   :target: https://anaconda.org/bioconda/dmtools
   :alt:   (downloads)
.. |docker_dmtools| image:: https://quay.io/repository/biocontainers/dmtools/status
   :target: https://quay.io/repository/biocontainers/dmtools
.. _`dmtools/tags`: https://quay.io/repository/biocontainers/dmtools?tab=tags


.. raw:: html

    <script>
        var package = "dmtools";
        var versions = ["0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dmtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dmtools/README.html