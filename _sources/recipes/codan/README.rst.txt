:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'codan'
.. highlight: bash

codan
=====

.. conda:recipe:: codan
   :replaces_section_title:
   :noindex:

   CDS prediction in eukaryotic transcripts.

   :homepage: https://github.com/pedronachtigall/CodAn
   :license: GPLv3
   :recipe: /`codan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/codan/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1093/bib/bbaa045`

   


.. conda:package:: codan

   |downloads_codan| |docker_codan|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``,  ``1.1-0``

      

   
   :depends on biopython: ``>=1.86``
   :depends on blast: 
   :depends on perl: 
   :depends on perl-bioperl: 
   :depends on perl-mce: 
   :depends on python: ``>=3.6``

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

    pixi global install codan

to add into an existing workspace instead, run::

    pixi add codan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install codan

Alternatively, to install into a new environment, run::

    conda create -n envname codan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/codan:<tag>

(see `codan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_codan| image:: https://img.shields.io/conda/dn/bioconda/codan.svg?style=flat
   :target: https://anaconda.org/bioconda/codan
   :alt:   (downloads)
.. |docker_codan| image:: https://quay.io/repository/biocontainers/codan/status
   :target: https://quay.io/repository/biocontainers/codan
.. _`codan/tags`: https://quay.io/repository/biocontainers/codan?tab=tags


.. raw:: html

    <script>
        var package = "codan";
        var versions = ["1.2","1.2","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/codan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/codan/README.html