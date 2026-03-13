:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-biosails'
.. highlight: bash

perl-biosails
=============

.. conda:recipe:: perl-biosails/0.02
   :replaces_section_title:
   :noindex:

   Standard\(ized\) Analysis Information Layers

   :homepage: https://github.com/biosails/BioSAILs
   :license: perl_5
   :recipe: /`perl-biosails <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biosails>`_/`0.02 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biosails/0.02>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-biosails/0.02/meta.yaml>`_

   


.. conda:package:: perl-biosails

   |downloads_perl-biosails| |docker_perl-biosails|

   :versions:
      
      

      ``0.02-3``,  ``0.02-2``,  ``0.02-1``,  ``0.02-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-capture-tiny: 
   :depends on perl-config-any: 
   :depends on perl-data-dumper: 
   :depends on perl-datetime: 
   :depends on perl-file-homedir: 
   :depends on perl-file-path: 
   :depends on perl-file-slurp: 
   :depends on perl-file-temp: 
   :depends on perl-git-wrapper: 
   :depends on perl-git-wrapper-plus: 
   :depends on perl-hash-merge: 
   :depends on perl-ipc-cmd: 
   :depends on perl-moosex-app: 
   :depends on perl-moosex-object-pluggable: 
   :depends on perl-moosex-types: 
   :depends on perl-moosex-types-path-tiny: 
   :depends on perl-namespace-autoclean: 
   :depends on perl-path-tiny: 
   :depends on perl-sort-versions: 
   :depends on perl-try-tiny: 
   :depends on perl-version-next: 
   :depends on perl-yaml: 

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

    pixi global install perl-biosails

to add into an existing workspace instead, run::

    pixi add perl-biosails

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-biosails

Alternatively, to install into a new environment, run::

    conda create -n envname perl-biosails

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-biosails:<tag>

(see `perl-biosails/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-biosails| image:: https://img.shields.io/conda/dn/bioconda/perl-biosails.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-biosails
   :alt:   (downloads)
.. |docker_perl-biosails| image:: https://quay.io/repository/biocontainers/perl-biosails/status
   :target: https://quay.io/repository/biocontainers/perl-biosails
.. _`perl-biosails/tags`: https://quay.io/repository/biocontainers/perl-biosails?tab=tags


.. raw:: html

    <script>
        var package = "perl-biosails";
        var versions = ["0.02","0.02","0.02","0.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-biosails/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-biosails/README.html