:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'somalier'
.. highlight: bash

somalier
========

.. conda:recipe:: somalier
   :replaces_section_title:
   :noindex:

   Fast sample\-swap and relatedness checks on BAMs\/CRAMs\/VCFs\/GVCFs.

   :homepage: https://github.com/brentp/somalier
   :documentation: https://github.com/brentp/somalier/blob/v0.3.1/README.md
   
   :license: MIT / MIT
   :recipe: /`somalier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somalier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somalier/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13073-020-00761-2`, biotools: :biotools:`somalier`

   


.. conda:package:: somalier

   |downloads_somalier| |docker_somalier|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.15-1``,  ``0.2.15-0``

      

   
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on openblas: 

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

    pixi global install somalier

to add into an existing workspace instead, run::

    pixi add somalier

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install somalier

Alternatively, to install into a new environment, run::

    conda create -n envname somalier

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/somalier:<tag>

(see `somalier/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_somalier| image:: https://img.shields.io/conda/dn/bioconda/somalier.svg?style=flat
   :target: https://anaconda.org/bioconda/somalier
   :alt:   (downloads)
.. |docker_somalier| image:: https://quay.io/repository/biocontainers/somalier/status
   :target: https://quay.io/repository/biocontainers/somalier
.. _`somalier/tags`: https://quay.io/repository/biocontainers/somalier?tab=tags


.. raw:: html

    <script>
        var package = "somalier";
        var versions = ["0.3.1","0.3.0","0.2.19","0.2.18","0.2.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/somalier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/somalier/README.html