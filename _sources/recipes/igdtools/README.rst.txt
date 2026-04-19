:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igdtools'
.. highlight: bash

igdtools
========

.. conda:recipe:: igdtools
   :replaces_section_title:
   :noindex:

   Tools for converting VCF to IGD files and processing them.

   :homepage: https://aprilweilab.github.io/
   :documentation: https://picovcf.readthedocs.io/en/latest/igdtools.html
   
   :developer docs: https://github.com/aprilweilab/picovcf
   :license: MIT / MIT
   :recipe: /`igdtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igdtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igdtools/meta.yaml>`_

   


.. conda:package:: igdtools

   |downloads_igdtools| |docker_igdtools|

   :versions:
      
      

      ``2.6-0``,  ``2.5-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
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

    pixi global install igdtools

to add into an existing workspace instead, run::

    pixi add igdtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install igdtools

Alternatively, to install into a new environment, run::

    conda create -n envname igdtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/igdtools:<tag>

(see `igdtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_igdtools| image:: https://img.shields.io/conda/dn/bioconda/igdtools.svg?style=flat
   :target: https://anaconda.org/bioconda/igdtools
   :alt:   (downloads)
.. |docker_igdtools| image:: https://quay.io/repository/biocontainers/igdtools/status
   :target: https://quay.io/repository/biocontainers/igdtools
.. _`igdtools/tags`: https://quay.io/repository/biocontainers/igdtools?tab=tags


.. raw:: html

    <script>
        var package = "igdtools";
        var versions = ["2.6","2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igdtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igdtools/README.html