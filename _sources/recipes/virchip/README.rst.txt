:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virchip'
.. highlight: bash

virchip
=======

.. conda:recipe:: virchip
   :replaces_section_title:
   :noindex:

   Virtual ChIP\-seq predicts transcription factor binding in any cell type with chromatin accessibility and transcriptome data. Manuscript DOI\: https\:\/\/doi.org\/10.1101\/168419

   :homepage: https://virchip.hoffmanlab.org
   :license: General Public License version 3
   :recipe: /`virchip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virchip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virchip/meta.yaml>`_

   


.. conda:package:: virchip

   |downloads_virchip| |docker_virchip|

   :versions:
      
      

      ``1.2.2-0``

      

   
   :depends on numpy: ``>=1.4.15``
   :depends on pandas: ``0.23.*``
   :depends on python: ``<3``
   :depends on r-base: 
   :depends on scikit-learn: ``>=0.18.1``
   :depends on scipy: ``1.1.0.*``

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

    pixi global install virchip

to add into an existing workspace instead, run::

    pixi add virchip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install virchip

Alternatively, to install into a new environment, run::

    conda create -n envname virchip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/virchip:<tag>

(see `virchip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_virchip| image:: https://img.shields.io/conda/dn/bioconda/virchip.svg?style=flat
   :target: https://anaconda.org/bioconda/virchip
   :alt:   (downloads)
.. |docker_virchip| image:: https://quay.io/repository/biocontainers/virchip/status
   :target: https://quay.io/repository/biocontainers/virchip
.. _`virchip/tags`: https://quay.io/repository/biocontainers/virchip?tab=tags


.. raw:: html

    <script>
        var package = "virchip";
        var versions = ["1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virchip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virchip/README.html