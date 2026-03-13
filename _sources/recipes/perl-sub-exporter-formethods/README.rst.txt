:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sub-exporter-formethods'
.. highlight: bash

perl-sub-exporter-formethods
============================

.. conda:recipe:: perl-sub-exporter-formethods
   :replaces_section_title:
   :noindex:

   helper routines for using Sub\:\:Exporter to build methods

   :homepage: https://github.com/rjbs/Sub-Exporter-ForMethods
   :license: perl_5
   :recipe: /`perl-sub-exporter-formethods <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-exporter-formethods>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-exporter-formethods/meta.yaml>`_

   


.. conda:package:: perl-sub-exporter-formethods

   |downloads_perl-sub-exporter-formethods| |docker_perl-sub-exporter-formethods|

   :versions:
      
      

      ``0.100055-0``,  ``0.100054-0``,  ``0.100052-2``,  ``0.100052-1``,  ``0.100052-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-scalar-list-utils: 
   :depends on perl-sub-exporter: 

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

    pixi global install perl-sub-exporter-formethods

to add into an existing workspace instead, run::

    pixi add perl-sub-exporter-formethods

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-sub-exporter-formethods

Alternatively, to install into a new environment, run::

    conda create -n envname perl-sub-exporter-formethods

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-sub-exporter-formethods:<tag>

(see `perl-sub-exporter-formethods/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-sub-exporter-formethods| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-exporter-formethods.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sub-exporter-formethods
   :alt:   (downloads)
.. |docker_perl-sub-exporter-formethods| image:: https://quay.io/repository/biocontainers/perl-sub-exporter-formethods/status
   :target: https://quay.io/repository/biocontainers/perl-sub-exporter-formethods
.. _`perl-sub-exporter-formethods/tags`: https://quay.io/repository/biocontainers/perl-sub-exporter-formethods?tab=tags


.. raw:: html

    <script>
        var package = "perl-sub-exporter-formethods";
        var versions = ["0.100055","0.100054","0.100052","0.100052","0.100052"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-exporter-formethods/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-exporter-formethods/README.html