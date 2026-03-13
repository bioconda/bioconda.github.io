:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-glob'
.. highlight: bash

perl-text-glob
==============

.. conda:recipe:: perl-text-glob
   :replaces_section_title:
   :noindex:

   match globbing patterns against text

   :homepage: https://metacpan.org/pod/Text::Glob
   :license: perl_5
   :recipe: /`perl-text-glob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-glob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-glob/meta.yaml>`_

   


.. conda:package:: perl-text-glob

   |downloads_perl-text-glob| |docker_perl-text-glob|

   :versions:
      
      

      ``0.11-2``,  ``0.11-1``,  ``0.11-0``,  ``0.09-0``

      

   
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

    pixi global install perl-text-glob

to add into an existing workspace instead, run::

    pixi add perl-text-glob

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-text-glob

Alternatively, to install into a new environment, run::

    conda create -n envname perl-text-glob

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-text-glob:<tag>

(see `perl-text-glob/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-text-glob| image:: https://img.shields.io/conda/dn/bioconda/perl-text-glob.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-glob
   :alt:   (downloads)
.. |docker_perl-text-glob| image:: https://quay.io/repository/biocontainers/perl-text-glob/status
   :target: https://quay.io/repository/biocontainers/perl-text-glob
.. _`perl-text-glob/tags`: https://quay.io/repository/biocontainers/perl-text-glob?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-glob";
        var versions = ["0.11","0.11","0.11","0.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-glob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-glob/README.html