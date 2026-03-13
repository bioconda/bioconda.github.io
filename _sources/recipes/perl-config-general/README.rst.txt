:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-config-general'
.. highlight: bash

perl-config-general
===================

.. conda:recipe:: perl-config-general
   :replaces_section_title:
   :noindex:

   Generic Config Module

   :homepage: http://metacpan.org/pod/Config-General
   :license: perl_5
   :recipe: /`perl-config-general <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-general>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-config-general/meta.yaml>`_

   


.. conda:package:: perl-config-general

   |downloads_perl-config-general| |docker_perl-config-general|

   :versions:
      
      

      ``2.67-0``,  ``2.65-0``,  ``2.63-1``,  ``2.63-0``,  ``2.61-1``,  ``2.61-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-pathtools: 

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

    pixi global install perl-config-general

to add into an existing workspace instead, run::

    pixi add perl-config-general

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-config-general

Alternatively, to install into a new environment, run::

    conda create -n envname perl-config-general

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-config-general:<tag>

(see `perl-config-general/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-config-general| image:: https://img.shields.io/conda/dn/bioconda/perl-config-general.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-config-general
   :alt:   (downloads)
.. |docker_perl-config-general| image:: https://quay.io/repository/biocontainers/perl-config-general/status
   :target: https://quay.io/repository/biocontainers/perl-config-general
.. _`perl-config-general/tags`: https://quay.io/repository/biocontainers/perl-config-general?tab=tags


.. raw:: html

    <script>
        var package = "perl-config-general";
        var versions = ["2.67","2.65","2.63","2.63","2.61"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-config-general/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-config-general/README.html