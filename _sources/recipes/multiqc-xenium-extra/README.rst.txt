:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multiqc-xenium-extra'
.. highlight: bash

multiqc-xenium-extra
====================

.. conda:recipe:: multiqc-xenium-extra
   :replaces_section_title:
   :noindex:

   MultiQC plugin for extra Xenium spatial transcriptomics analysis

   :homepage: https://seqera.io/multiqc
   :documentation: https://docs.seqera.io/multiqc/modules/xenium
   
   :developer docs: https://github.com/MultiQC/xenium-extra
   :license: MIT
   :recipe: /`multiqc-xenium-extra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc-xenium-extra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc-xenium-extra/meta.yaml>`_

   


.. conda:package:: multiqc-xenium-extra

   |downloads_multiqc-xenium-extra| |docker_multiqc-xenium-extra|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on multiqc: ``>=1.32``
   :depends on polars-lts-cpu: 
   :depends on python: ``>=3.9``
   :depends on scanpy: ``>=1.9.0``
   :depends on scipy: ``>=1.8.0``

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

    pixi global install multiqc-xenium-extra

to add into an existing workspace instead, run::

    pixi add multiqc-xenium-extra

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install multiqc-xenium-extra

Alternatively, to install into a new environment, run::

    conda create -n envname multiqc-xenium-extra

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/multiqc-xenium-extra:<tag>

(see `multiqc-xenium-extra/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_multiqc-xenium-extra| image:: https://img.shields.io/conda/dn/bioconda/multiqc-xenium-extra.svg?style=flat
   :target: https://anaconda.org/bioconda/multiqc-xenium-extra
   :alt:   (downloads)
.. |docker_multiqc-xenium-extra| image:: https://quay.io/repository/biocontainers/multiqc-xenium-extra/status
   :target: https://quay.io/repository/biocontainers/multiqc-xenium-extra
.. _`multiqc-xenium-extra/tags`: https://quay.io/repository/biocontainers/multiqc-xenium-extra?tab=tags


.. raw:: html

    <script>
        var package = "multiqc-xenium-extra";
        var versions = ["1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multiqc-xenium-extra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multiqc-xenium-extra/README.html