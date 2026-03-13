:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tmb'
.. highlight: bash

tmb
===

.. conda:recipe:: tmb
   :replaces_section_title:
   :noindex:

   This tool was designed to calculate a Tumor Mutational Burden \(TMB\) score from a VCF file.

   :homepage: https://github.com/bioinfo-pf-curie/TMB
   :documentation: https://github.com/bioinfo-pf-curie/TMB/blob/v1.5.0/README.md
   
   :license: CeCILL FREE SOFTWARE LICENSE AGREEMENT
   :recipe: /`tmb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmb/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12915-024-01839-8`

   


.. conda:package:: tmb

   |downloads_tmb| |docker_tmb|

   :versions:
      
      

      ``1.5.0-1``,  ``1.5.0-0``,  ``1.3.0-0``

      

   
   :depends on cyvcf2: 
   :depends on mosdepth: 
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on python: ``>=3``
   :depends on pyyaml: 

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

    pixi global install tmb

to add into an existing workspace instead, run::

    pixi add tmb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tmb

Alternatively, to install into a new environment, run::

    conda create -n envname tmb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tmb:<tag>

(see `tmb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tmb| image:: https://img.shields.io/conda/dn/bioconda/tmb.svg?style=flat
   :target: https://anaconda.org/bioconda/tmb
   :alt:   (downloads)
.. |docker_tmb| image:: https://quay.io/repository/biocontainers/tmb/status
   :target: https://quay.io/repository/biocontainers/tmb
.. _`tmb/tags`: https://quay.io/repository/biocontainers/tmb?tab=tags


.. raw:: html

    <script>
        var package = "tmb";
        var versions = ["1.5.0","1.5.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tmb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tmb/README.html