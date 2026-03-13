:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tpp'
.. highlight: bash

tpp
===

.. conda:recipe:: tpp
   :replaces_section_title:
   :noindex:

   The Trans\-Proteomic Pipeline \(TPP\) is a collection of integrated tools for MS\/MS proteomics developed at the Seattle Proteome Center. The Bioconda package includes the command\-line versions of the TPP toolset. These programs include tools for validation \(PeptideProphet\, iProphet\, ProteinProphet\, Mayu\) and quantification \(XPRESS\, ASAPRatio\, Libra\) as well as a number of parsers and converters \(Out2XML\, Mascot2XML\, Tandem2XML\, etc\).


   :homepage: http://tools.proteomecenter.org/wiki/index.php?title=Software:TPP
   :license: GPL v. 2.0 and LGPL
   :recipe: /`tpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tpp/meta.yaml>`_

   


.. conda:package:: tpp

   |downloads_tpp| |docker_tpp|

   :versions:
      
      

      ``5.0.0-0``

      

   
   :depends on bzip2: ``1.0*``
   :depends on hardklor: 
   :depends on libgcc: ``<=4.9``
   :depends on perl: ``5.22.0*``
   :depends on perl-findbin-libs: 
   :depends on perl-xml-parser: 
   :depends on zlib: ``1.2.11*``

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

    pixi global install tpp

to add into an existing workspace instead, run::

    pixi add tpp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tpp

Alternatively, to install into a new environment, run::

    conda create -n envname tpp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tpp:<tag>

(see `tpp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tpp| image:: https://img.shields.io/conda/dn/bioconda/tpp.svg?style=flat
   :target: https://anaconda.org/bioconda/tpp
   :alt:   (downloads)
.. |docker_tpp| image:: https://quay.io/repository/biocontainers/tpp/status
   :target: https://quay.io/repository/biocontainers/tpp
.. _`tpp/tags`: https://quay.io/repository/biocontainers/tpp?tab=tags


.. raw:: html

    <script>
        var package = "tpp";
        var versions = ["5.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tpp/README.html