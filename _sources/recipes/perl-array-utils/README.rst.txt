:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-array-utils'
.. highlight: bash

perl-array-utils
================

.. conda:recipe:: perl-array-utils
   :replaces_section_title:
   :noindex:

   small utils for array manipulation

   :homepage: http://metacpan.org/pod/Array::Utils
   :license: unknown
   :recipe: /`perl-array-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-array-utils/meta.yaml>`_

   


.. conda:package:: perl-array-utils

   |downloads_perl-array-utils| |docker_perl-array-utils|

   :versions:
      
      

      ``0.5-3``,  ``0.5-2``,  ``0.5-1``,  ``0.5-0``

      

   
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

    pixi global install perl-array-utils

to add into an existing workspace instead, run::

    pixi add perl-array-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-array-utils

Alternatively, to install into a new environment, run::

    conda create -n envname perl-array-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-array-utils:<tag>

(see `perl-array-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-array-utils| image:: https://img.shields.io/conda/dn/bioconda/perl-array-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-array-utils
   :alt:   (downloads)
.. |docker_perl-array-utils| image:: https://quay.io/repository/biocontainers/perl-array-utils/status
   :target: https://quay.io/repository/biocontainers/perl-array-utils
.. _`perl-array-utils/tags`: https://quay.io/repository/biocontainers/perl-array-utils?tab=tags


.. raw:: html

    <script>
        var package = "perl-array-utils";
        var versions = ["0.5","0.5","0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-array-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-array-utils/README.html