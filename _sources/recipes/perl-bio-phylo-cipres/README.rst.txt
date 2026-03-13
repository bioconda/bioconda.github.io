:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-phylo-cipres'
.. highlight: bash

perl-bio-phylo-cipres
=====================

.. conda:recipe:: perl-bio-phylo-cipres/v0.2.1
   :replaces_section_title:
   :noindex:

   Reusable components for CIPRES REST API access

   :homepage: http://metacpan.org/pod/Bio::Phylo::CIPRES
   :license: perl_5
   :recipe: /`perl-bio-phylo-cipres <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-phylo-cipres>`_/`v0.2.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-phylo-cipres/v0.2.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-phylo-cipres/v0.2.1/meta.yaml>`_

   


.. conda:package:: perl-bio-phylo-cipres

   |downloads_perl-bio-phylo-cipres| |docker_perl-bio-phylo-cipres|

   :versions:
      
      

      ``v0.2.1-2``,  ``v0.2.1-1``,  ``v0.2.1-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bio-phylo: 
   :depends on perl-lwp-simple: ``>=6.39``
   :depends on perl-xml-twig: 
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

    pixi global install perl-bio-phylo-cipres

to add into an existing workspace instead, run::

    pixi add perl-bio-phylo-cipres

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-bio-phylo-cipres

Alternatively, to install into a new environment, run::

    conda create -n envname perl-bio-phylo-cipres

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-bio-phylo-cipres:<tag>

(see `perl-bio-phylo-cipres/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-bio-phylo-cipres| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-phylo-cipres.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-phylo-cipres
   :alt:   (downloads)
.. |docker_perl-bio-phylo-cipres| image:: https://quay.io/repository/biocontainers/perl-bio-phylo-cipres/status
   :target: https://quay.io/repository/biocontainers/perl-bio-phylo-cipres
.. _`perl-bio-phylo-cipres/tags`: https://quay.io/repository/biocontainers/perl-bio-phylo-cipres?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-phylo-cipres";
        var versions = ["v0.2.1","v0.2.1","v0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-phylo-cipres/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-phylo-cipres/README.html