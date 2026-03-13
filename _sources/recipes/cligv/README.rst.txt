:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cligv'
.. highlight: bash

cligv
=====

.. conda:recipe:: cligv
   :replaces_section_title:
   :noindex:

   command line Interactive Genome Viewer

   :homepage: https://github.com/jonasfreudig/cligv
   :license: MIT / MIT
   :recipe: /`cligv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cligv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cligv/meta.yaml>`_

   clIGV \(command line Interactive Genome Viewer\) is a fast\, interactive 
   genome browser for the terminal. It allows visualization of genomic 
   sequences\, variants from VCF files\, and alignments from BAM files\, 
   all with a simple interface directly in your terminal.



.. conda:package:: cligv

   |downloads_cligv| |docker_cligv|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on pysam: ``>=0.19.0``
   :depends on python: ``>=3.7``
   :depends on rich: ``>=10.0.0``

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

    pixi global install cligv

to add into an existing workspace instead, run::

    pixi add cligv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cligv

Alternatively, to install into a new environment, run::

    conda create -n envname cligv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cligv:<tag>

(see `cligv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cligv| image:: https://img.shields.io/conda/dn/bioconda/cligv.svg?style=flat
   :target: https://anaconda.org/bioconda/cligv
   :alt:   (downloads)
.. |docker_cligv| image:: https://quay.io/repository/biocontainers/cligv/status
   :target: https://quay.io/repository/biocontainers/cligv
.. _`cligv/tags`: https://quay.io/repository/biocontainers/cligv?tab=tags


.. raw:: html

    <script>
        var package = "cligv";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cligv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cligv/README.html