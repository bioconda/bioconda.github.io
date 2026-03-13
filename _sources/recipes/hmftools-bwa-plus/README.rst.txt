:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-bwa-plus'
.. highlight: bash

hmftools-bwa-plus
=================

.. conda:recipe:: hmftools-bwa-plus
   :replaces_section_title:
   :noindex:

   bwa\-mem with extensions for WiGiTS

   :homepage: https://github.com/hartwigmedical/bwa-plus
   :license: MIT
   :recipe: /`hmftools-bwa-plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-bwa-plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-bwa-plus/meta.yaml>`_

   


.. conda:package:: hmftools-bwa-plus

   |downloads_hmftools-bwa-plus| |docker_hmftools-bwa-plus|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on sambamba: ``>=1.0.1``

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

    pixi global install hmftools-bwa-plus

to add into an existing workspace instead, run::

    pixi add hmftools-bwa-plus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-bwa-plus

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-bwa-plus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-bwa-plus:<tag>

(see `hmftools-bwa-plus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-bwa-plus| image:: https://img.shields.io/conda/dn/bioconda/hmftools-bwa-plus.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-bwa-plus
   :alt:   (downloads)
.. |docker_hmftools-bwa-plus| image:: https://quay.io/repository/biocontainers/hmftools-bwa-plus/status
   :target: https://quay.io/repository/biocontainers/hmftools-bwa-plus
.. _`hmftools-bwa-plus/tags`: https://quay.io/repository/biocontainers/hmftools-bwa-plus?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-bwa-plus";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-bwa-plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-bwa-plus/README.html