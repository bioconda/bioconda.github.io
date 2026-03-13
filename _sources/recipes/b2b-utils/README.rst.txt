:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'b2b-utils'
.. highlight: bash

b2b-utils
=========

.. conda:recipe:: b2b-utils
   :replaces_section_title:
   :noindex:

   Genomics tools from BASE2BIO

   :homepage: https://github.com/jvolkening/b2b-utils
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`b2b-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/b2b-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/b2b-utils/meta.yaml>`_

   This package contains a set of programs and utilities for working with
   genomic data. Please see the in\-program documentation \(\`\-\-help\`\) of each
   individual tool for usage and details. Please note that some tools in this
   suite utilize dependencies that are not explicity stated in the Conda
   package. This keeps the install footprint smaller since all users will not
   use all utilities\, but if you receive error messages about missing
   programs you will need to install those as well. All possible
   dependencies should be available as Conda packages.



.. conda:package:: b2b-utils

   |downloads_b2b-utils| |docker_b2b-utils|

   :versions:
      
      

      ``0.020-0``,  ``0.019-0``,  ``0.018-0``,  ``0.017-0``

      

   
   :depends on bwa: ``>=0.7.18,<0.8.0a0``
   :depends on mafft: ``>=7.526,<8.0a0``
   :depends on medaka: ``>=2.0.1,<3.0a0``
   :depends on miniasm: ``>=0.3,<0.4.0a0``
   :depends on minimap2: ``>=2.28,<3.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-bioperl: 
   :depends on perl-biox-seq: ``>=0.008006``
   :depends on perl-biox-seq: ``>=0.8009,<1.0a0``
   :depends on perl-dbi: 
   :depends on perl-list-moreutils: 
   :depends on perl-module-build: ``0.4234.*``
   :depends on perl-perlio-gzip: ``>=0.20,<0.21.0a0``
   :depends on samtools: ``>=1.21,<2.0a0``

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

    pixi global install b2b-utils

to add into an existing workspace instead, run::

    pixi add b2b-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install b2b-utils

Alternatively, to install into a new environment, run::

    conda create -n envname b2b-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/b2b-utils:<tag>

(see `b2b-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_b2b-utils| image:: https://img.shields.io/conda/dn/bioconda/b2b-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/b2b-utils
   :alt:   (downloads)
.. |docker_b2b-utils| image:: https://quay.io/repository/biocontainers/b2b-utils/status
   :target: https://quay.io/repository/biocontainers/b2b-utils
.. _`b2b-utils/tags`: https://quay.io/repository/biocontainers/b2b-utils?tab=tags


.. raw:: html

    <script>
        var package = "b2b-utils";
        var versions = ["0.020","0.019","0.018","0.017"];
    </script>





Notes
-----
- Can\'t be noarch or mulled testing fails because perl\-dbi dependency is
not pulled in


- Extra packages \(bwa\, samtools\, etc\) are included in host deps so that
the full testing suite will be run during building\, but they are not
added to run\-time deps since not all users may need the corresponding
utilities. This decision may be revisited in the future.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/b2b-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/b2b-utils/README.html