:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ksnp'
.. highlight: bash

ksnp
====

.. conda:recipe:: ksnp
   :replaces_section_title:
   :noindex:

   k\-mer based haplotype assembly

   :homepage: https://github.com/zhouqiansolab/KSNP
   :license: GPL3
   :recipe: /`ksnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ksnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ksnp/meta.yaml>`_

   


.. conda:package:: ksnp

   |downloads_ksnp| |docker_ksnp|

   :versions:
      
      

      ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install ksnp

to add into an existing workspace instead, run::

    pixi add ksnp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ksnp

Alternatively, to install into a new environment, run::

    conda create -n envname ksnp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ksnp:<tag>

(see `ksnp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ksnp| image:: https://img.shields.io/conda/dn/bioconda/ksnp.svg?style=flat
   :target: https://anaconda.org/bioconda/ksnp
   :alt:   (downloads)
.. |docker_ksnp| image:: https://quay.io/repository/biocontainers/ksnp/status
   :target: https://quay.io/repository/biocontainers/ksnp
.. _`ksnp/tags`: https://quay.io/repository/biocontainers/ksnp?tab=tags


.. raw:: html

    <script>
        var package = "ksnp";
        var versions = ["1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ksnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ksnp/README.html