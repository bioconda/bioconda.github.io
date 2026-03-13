:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-digest-sha'
.. highlight: bash

perl-digest-sha
===============

.. conda:recipe:: perl-digest-sha/5.88
   :replaces_section_title:
   :noindex:

   Perl extension for SHA\-1\/224\/256\/384\/512

   :homepage: http://metacpan.org/pod/Digest::SHA
   :license: perl_5
   :recipe: /`perl-digest-sha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha>`_/`5.88 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha/5.88>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-sha/5.88/meta.yaml>`_

   


.. conda:package:: perl-digest-sha

   |downloads_perl-digest-sha| |docker_perl-digest-sha|

   :versions:
      
      

      ``5.88-2``,  ``5.88-1``,  ``5.88-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``

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

    pixi global install perl-digest-sha

to add into an existing workspace instead, run::

    pixi add perl-digest-sha

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-digest-sha

Alternatively, to install into a new environment, run::

    conda create -n envname perl-digest-sha

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-digest-sha:<tag>

(see `perl-digest-sha/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-digest-sha| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-sha.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-digest-sha
   :alt:   (downloads)
.. |docker_perl-digest-sha| image:: https://quay.io/repository/biocontainers/perl-digest-sha/status
   :target: https://quay.io/repository/biocontainers/perl-digest-sha
.. _`perl-digest-sha/tags`: https://quay.io/repository/biocontainers/perl-digest-sha?tab=tags


.. raw:: html

    <script>
        var package = "perl-digest-sha";
        var versions = ["5.88","5.88","5.88"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-sha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-sha/README.html