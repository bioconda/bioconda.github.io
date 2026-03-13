:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crispr_studio'
.. highlight: bash

crispr_studio
=============

.. conda:recipe:: crispr_studio
   :replaces_section_title:
   :noindex:

   CRISPRStudio is a program developed to facilitate and accelerate CRISPR array visualization

   :homepage: https://github.com/moineaulab/CRISPRStudio
   :license: GPL-3.0
   :recipe: /`crispr_studio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispr_studio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crispr_studio/meta.yaml>`_

   


.. conda:package:: crispr_studio

   |downloads_crispr_studio| |docker_crispr_studio|

   :versions:
      
      

      ``1-2``,  ``1-1``,  ``1-0``

      

   
   :depends on fasta3: 
   :depends on numpy: ``<=1.16.2``
   :depends on pandas: ``>=0.24.1``
   :depends on python: ``>=3.6,<3.7``
   :depends on scikit-bio: ``>=0.4.2``
   :depends on scipy: ``<=1.2.1``

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

    pixi global install crispr_studio

to add into an existing workspace instead, run::

    pixi add crispr_studio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crispr_studio

Alternatively, to install into a new environment, run::

    conda create -n envname crispr_studio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crispr_studio:<tag>

(see `crispr_studio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crispr_studio| image:: https://img.shields.io/conda/dn/bioconda/crispr_studio.svg?style=flat
   :target: https://anaconda.org/bioconda/crispr_studio
   :alt:   (downloads)
.. |docker_crispr_studio| image:: https://quay.io/repository/biocontainers/crispr_studio/status
   :target: https://quay.io/repository/biocontainers/crispr_studio
.. _`crispr_studio/tags`: https://quay.io/repository/biocontainers/crispr_studio?tab=tags


.. raw:: html

    <script>
        var package = "crispr_studio";
        var versions = ["1","1","1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crispr_studio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crispr_studio/README.html