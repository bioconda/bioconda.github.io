:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genome-uploader'
.. highlight: bash

genome-uploader
===============

.. conda:recipe:: genome-uploader
   :replaces_section_title:
   :noindex:

   Python script to upload bins and MAGs in fasta format to ENA \(European Nucleotide Archive\).

   :homepage: https://github.com/EBI-Metagenomics/genome_uploader
   :license: APACHE / Apache-2.0
   :recipe: /`genome-uploader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome-uploader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome-uploader/meta.yaml>`_

   


.. conda:package:: genome-uploader

   |downloads_genome-uploader| |docker_genome-uploader|

   :versions:
      
      

      ``2.5.1-1``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.0-0``,  ``2.3.4-0``

      

   
   :depends on click: ``>=8.1.8,<9``
   :depends on ena-webin-cli: ``>=9.0.1``
   :depends on mgnify-pipelines-toolkit: ``>=1.4.5``
   :depends on numpy: ``1.26.0``
   :depends on pandas: ``2.0.2``
   :depends on python: ``>=3.9``
   :depends on python-dotenv: ``>=1.0``
   :depends on requests: ``>=2.31,<3``

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

    pixi global install genome-uploader

to add into an existing workspace instead, run::

    pixi add genome-uploader

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genome-uploader

Alternatively, to install into a new environment, run::

    conda create -n envname genome-uploader

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genome-uploader:<tag>

(see `genome-uploader/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genome-uploader| image:: https://img.shields.io/conda/dn/bioconda/genome-uploader.svg?style=flat
   :target: https://anaconda.org/bioconda/genome-uploader
   :alt:   (downloads)
.. |docker_genome-uploader| image:: https://quay.io/repository/biocontainers/genome-uploader/status
   :target: https://quay.io/repository/biocontainers/genome-uploader
.. _`genome-uploader/tags`: https://quay.io/repository/biocontainers/genome-uploader?tab=tags


.. raw:: html

    <script>
        var package = "genome-uploader";
        var versions = ["2.5.1","2.5.1","2.5.0","2.4.0","2.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genome-uploader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genome-uploader/README.html