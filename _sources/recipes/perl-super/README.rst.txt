:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-super'
.. highlight: bash

perl-super
==========

.. conda:recipe:: perl-super
   :replaces_section_title:
   :noindex:

   control superclass method dispatch

   :homepage: http://metacpan.org/pod/SUPER
   :license: perl_5
   :recipe: /`perl-super <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-super>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-super/meta.yaml>`_

   


.. conda:package:: perl-super

   |downloads_perl-super| |docker_perl-super|

   :versions:
      
      

      ``1.20190531-1``,  ``1.20190531-0``,  ``1.20141117-1``,  ``1.20141117-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-sub-identify: 

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

    pixi global install perl-super

to add into an existing workspace instead, run::

    pixi add perl-super

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-super

Alternatively, to install into a new environment, run::

    conda create -n envname perl-super

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-super:<tag>

(see `perl-super/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-super| image:: https://img.shields.io/conda/dn/bioconda/perl-super.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-super
   :alt:   (downloads)
.. |docker_perl-super| image:: https://quay.io/repository/biocontainers/perl-super/status
   :target: https://quay.io/repository/biocontainers/perl-super
.. _`perl-super/tags`: https://quay.io/repository/biocontainers/perl-super?tab=tags


.. raw:: html

    <script>
        var package = "perl-super";
        var versions = ["1.20190531","1.20190531","1.20141117","1.20141117"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-super/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-super/README.html