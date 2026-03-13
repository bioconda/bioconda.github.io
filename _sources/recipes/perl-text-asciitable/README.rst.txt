:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-asciitable'
.. highlight: bash

perl-text-asciitable
====================

.. conda:recipe:: perl-text-asciitable/0.22
   :replaces_section_title:
   :noindex:

   Create a nice formatted table using ASCII characters.

   :homepage: http://metacpan.org/pod/Text::ASCIITable
   :license: perl_5
   :recipe: /`perl-text-asciitable <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-asciitable>`_/`0.22 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-asciitable/0.22>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-asciitable/0.22/meta.yaml>`_

   


.. conda:package:: perl-text-asciitable

   |downloads_perl-text-asciitable| |docker_perl-text-asciitable|

   :versions:
      
      

      ``0.22-3``,  ``0.22-2``,  ``0.22-1``,  ``0.22-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-encode: 

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

    pixi global install perl-text-asciitable

to add into an existing workspace instead, run::

    pixi add perl-text-asciitable

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-text-asciitable

Alternatively, to install into a new environment, run::

    conda create -n envname perl-text-asciitable

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-text-asciitable:<tag>

(see `perl-text-asciitable/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-text-asciitable| image:: https://img.shields.io/conda/dn/bioconda/perl-text-asciitable.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-text-asciitable
   :alt:   (downloads)
.. |docker_perl-text-asciitable| image:: https://quay.io/repository/biocontainers/perl-text-asciitable/status
   :target: https://quay.io/repository/biocontainers/perl-text-asciitable
.. _`perl-text-asciitable/tags`: https://quay.io/repository/biocontainers/perl-text-asciitable?tab=tags


.. raw:: html

    <script>
        var package = "perl-text-asciitable";
        var versions = ["0.22","0.22","0.22","0.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-asciitable/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-asciitable/README.html