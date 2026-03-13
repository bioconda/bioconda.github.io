:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-balanced'
.. highlight: bash

perl-text-balanced
==================

.. conda:recipe:: perl-text-balanced
   :replaces_section_title:
   :noindex:

   Extract delimited text sequences from strings.

   :homepage: https://metacpan.org/pod/Text::Balanced
   :license: Perl_5
   :recipe: /`perl-text-balanced <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-balanced>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-balanced/meta.yaml>`_

   


.. conda:package:: perl-text-balanced

   |downloads_perl-text-balanced| |docker_perl-text-balanced|

   :versions:
      
      

      ``2.07-0``,  ``2.06-0``,  ``2.05-0``,  ``2.04-0``,  ``2.03-4``,  ``2.03-3``,  ``2.03-2``,  ``2.03-1``,  ``2.03-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-exporter: 
   :depends on perl-vars: 

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

    pixi global install perl-text-balanced

to add into an existing workspace instead, run::

    pixi add perl-text-balanced

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-text-balanced

Alternatively, to install into a new environment, run::

    conda create -n envname perl-text-balanced

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-text-balanced:<tag>

(see `perl-text-balanced/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-text-balanced| image:: https://img.shields.io/conda/dn/bioconda/perl-text-balanced.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-balanced
   :alt:   (downloads)
.. |docker_perl-text-balanced| image:: https://quay.io/repository/biocontainers/perl-text-balanced/status
   :target: https://quay.io/repository/biocontainers/perl-text-balanced
.. _`perl-text-balanced/tags`: https://quay.io/repository/biocontainers/perl-text-balanced?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-balanced";
        var versions = ["2.07","2.06","2.05","2.04","2.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-balanced/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-balanced/README.html