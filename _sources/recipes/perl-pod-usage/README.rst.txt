:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-usage'
.. highlight: bash

perl-pod-usage
==============

.. conda:recipe:: perl-pod-usage
   :replaces_section_title:
   :noindex:

   Print a usage message from embedded pod documentation.

   :homepage: https://metacpan.org/pod/Pod::Usage
   :license: perl_5
   :recipe: /`perl-pod-usage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-usage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-usage/meta.yaml>`_

   


.. conda:package:: perl-pod-usage

   |downloads_perl-pod-usage| |docker_perl-pod-usage|

   :versions:
      
      

      ``2.05-0``,  ``2.03-0``,  ``2.01-0``,  ``1.69-2``,  ``1.69-1``,  ``1.69-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-getopt-long: 
   :depends on perl-pod-escapes: 
   :depends on perl-test: 

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

    pixi global install perl-pod-usage

to add into an existing workspace instead, run::

    pixi add perl-pod-usage

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-pod-usage

Alternatively, to install into a new environment, run::

    conda create -n envname perl-pod-usage

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-pod-usage:<tag>

(see `perl-pod-usage/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-pod-usage| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-usage.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-usage
   :alt:   (downloads)
.. |docker_perl-pod-usage| image:: https://quay.io/repository/biocontainers/perl-pod-usage/status
   :target: https://quay.io/repository/biocontainers/perl-pod-usage
.. _`perl-pod-usage/tags`: https://quay.io/repository/biocontainers/perl-pod-usage?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-usage";
        var versions = ["2.05","2.03","2.01","1.69","1.69"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-usage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-usage/README.html