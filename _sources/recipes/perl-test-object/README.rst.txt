:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-object'
.. highlight: bash

perl-test-object
================

.. conda:recipe:: perl-test-object/0.08
   :replaces_section_title:
   :noindex:

   Thoroughly testing objects via registered handlers

   :homepage: https://github.com/karenetheridge/Test-Object
   :license: perl_5
   :recipe: /`perl-test-object <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-object>`_/`0.08 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-object/0.08>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-object/0.08/meta.yaml>`_

   


.. conda:package:: perl-test-object

   |downloads_perl-test-object| |docker_perl-test-object|

   :versions:
      
      

      ``0.08-3``,  ``0.08-2``,  ``0.08-1``,  ``0.08-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-exporter: 

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

    pixi global install perl-test-object

to add into an existing workspace instead, run::

    pixi add perl-test-object

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-test-object

Alternatively, to install into a new environment, run::

    conda create -n envname perl-test-object

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-test-object:<tag>

(see `perl-test-object/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-test-object| image:: https://img.shields.io/conda/dn/bioconda/perl-test-object.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-object
   :alt:   (downloads)
.. |docker_perl-test-object| image:: https://quay.io/repository/biocontainers/perl-test-object/status
   :target: https://quay.io/repository/biocontainers/perl-test-object
.. _`perl-test-object/tags`: https://quay.io/repository/biocontainers/perl-test-object?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-object";
        var versions = ["0.08","0.08","0.08","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-object/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-object/README.html