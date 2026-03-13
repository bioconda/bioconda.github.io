:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-version-next'
.. highlight: bash

perl-version-next
=================

.. conda:recipe:: perl-version-next
   :replaces_section_title:
   :noindex:

   increment module version numbers simply and correctly

   :homepage: https://github.com/dagolden/Version-Next
   :license: apache_2_0
   :recipe: /`perl-version-next <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-version-next>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-version-next/meta.yaml>`_

   


.. conda:package:: perl-version-next

   |downloads_perl-version-next| |docker_perl-version-next|

   :versions:
      
      

      ``1.000-3``,  ``1.000-2``,  ``1.000-1``,  ``1.000-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-apache-test: 
   :depends on perl-perl-version: 
   :depends on perl-sub-exporter: 

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

    pixi global install perl-version-next

to add into an existing workspace instead, run::

    pixi add perl-version-next

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-version-next

Alternatively, to install into a new environment, run::

    conda create -n envname perl-version-next

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-version-next:<tag>

(see `perl-version-next/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-version-next| image:: https://img.shields.io/conda/dn/bioconda/perl-version-next.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-version-next
   :alt:   (downloads)
.. |docker_perl-version-next| image:: https://quay.io/repository/biocontainers/perl-version-next/status
   :target: https://quay.io/repository/biocontainers/perl-version-next
.. _`perl-version-next/tags`: https://quay.io/repository/biocontainers/perl-version-next?tab=tags


.. raw:: html

    <script>
        var package = "perl-version-next";
        var versions = ["1.000","1.000","1.000","1.000"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-version-next/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-version-next/README.html