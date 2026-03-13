:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pfam_scan'
.. highlight: bash

pfam_scan
=========

.. conda:recipe:: pfam_scan
   :replaces_section_title:
   :noindex:

   pfam\_scan.pl is a Perl script calling HMMER v3 to search a FASTA file against a library of Pfam HMMs.

   :homepage: http://ftp.ebi.ac.uk/pub/databases/Pfam/Tools/
   :license: GPL (>= 2)
   :recipe: /`pfam_scan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pfam_scan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pfam_scan/meta.yaml>`_

   


.. conda:package:: pfam_scan

   |downloads_pfam_scan| |docker_pfam_scan|

   :versions:
      
      

      ``1.6-5``,  ``1.6-4``,  ``1.6-3``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      

   
   :depends on hmmer: ``>=3.0``
   :depends on perl: 
   :depends on perl-bioperl: ``>=1.4``
   :depends on perl-ipc-run: 
   :depends on perl-moose: 

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

    pixi global install pfam_scan

to add into an existing workspace instead, run::

    pixi add pfam_scan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pfam_scan

Alternatively, to install into a new environment, run::

    conda create -n envname pfam_scan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pfam_scan:<tag>

(see `pfam_scan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pfam_scan| image:: https://img.shields.io/conda/dn/bioconda/pfam_scan.svg?style=flat
   :target: https://anaconda.org/bioconda/pfam_scan
   :alt:   (downloads)
.. |docker_pfam_scan| image:: https://quay.io/repository/biocontainers/pfam_scan/status
   :target: https://quay.io/repository/biocontainers/pfam_scan
.. _`pfam_scan/tags`: https://quay.io/repository/biocontainers/pfam_scan?tab=tags


.. raw:: html

    <script>
        var package = "pfam_scan";
        var versions = ["1.6","1.6","1.6","1.6","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pfam_scan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pfam_scan/README.html