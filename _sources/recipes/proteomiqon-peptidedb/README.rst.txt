:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-peptidedb'
.. highlight: bash

proteomiqon-peptidedb
=====================

.. conda:recipe:: proteomiqon-peptidedb
   :replaces_section_title:
   :noindex:

   The tool ProteomIQon.PeptideDB creates a peptide database in the SQLite format.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/PeptideDB.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-peptidedb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-peptidedb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-peptidedb/meta.yaml>`_

   MS\-based shotgun proteomics estimates protein abundances using a proxy\: peptides. 
   An established method to identify acquired MS\/MS spectra is the comparison of each spectrum with peptides in a reference database. 
   The PeptideDB tool helps to create peptide databases by in silico digestion given proteome information in the FASTA format and a set of parameters that 
   allow the user to mimic conditions of their specific experiment. The created database stores peptide protein relationships in a SQLite database which can 
   then be supplied to other ProteomIQon tools.



.. conda:package:: proteomiqon-peptidedb

   |downloads_proteomiqon-peptidedb| |docker_proteomiqon-peptidedb|

   :versions:
      
      

      ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.4-0``,  ``0.0.1-0``

      

   
   :depends on dotnet-runtime: ``5.0.*``
   :depends on openssl: ``1.1.*``

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

    pixi global install proteomiqon-peptidedb

to add into an existing workspace instead, run::

    pixi add proteomiqon-peptidedb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install proteomiqon-peptidedb

Alternatively, to install into a new environment, run::

    conda create -n envname proteomiqon-peptidedb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/proteomiqon-peptidedb:<tag>

(see `proteomiqon-peptidedb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_proteomiqon-peptidedb| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-peptidedb.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-peptidedb
   :alt:   (downloads)
.. |docker_proteomiqon-peptidedb| image:: https://quay.io/repository/biocontainers/proteomiqon-peptidedb/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-peptidedb
.. _`proteomiqon-peptidedb/tags`: https://quay.io/repository/biocontainers/proteomiqon-peptidedb?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-peptidedb";
        var versions = ["0.0.7","0.0.7","0.0.6","0.0.4","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-peptidedb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-peptidedb/README.html