:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-escapes'
.. highlight: bash

perl-pod-escapes
================

.. conda:recipe:: perl-pod-escapes/1.07
   :replaces_section_title:
   :noindex:

   for resolving Pod Elt...gt sequences

   :homepage: http://metacpan.org/pod/Pod::Escapes
   :license: perl_5
   :recipe: /`perl-pod-escapes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-escapes>`_/`1.07 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-escapes/1.07>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-escapes/1.07/meta.yaml>`_

   


.. conda:package:: perl-pod-escapes

   |downloads_perl-pod-escapes| |docker_perl-pod-escapes|

   :versions:
      
      

      ``1.07-2``,  ``1.07-1``,  ``1.07-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
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

    pixi global install perl-pod-escapes

to add into an existing workspace instead, run::

    pixi add perl-pod-escapes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-pod-escapes

Alternatively, to install into a new environment, run::

    conda create -n envname perl-pod-escapes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-pod-escapes:<tag>

(see `perl-pod-escapes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-pod-escapes| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-escapes.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-escapes
   :alt:   (downloads)
.. |docker_perl-pod-escapes| image:: https://quay.io/repository/biocontainers/perl-pod-escapes/status
   :target: https://quay.io/repository/biocontainers/perl-pod-escapes
.. _`perl-pod-escapes/tags`: https://quay.io/repository/biocontainers/perl-pod-escapes?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-escapes";
        var versions = ["1.07","1.07","1.07"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-escapes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-escapes/README.html