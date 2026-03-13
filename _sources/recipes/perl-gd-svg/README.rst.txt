:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gd-svg'
.. highlight: bash

perl-gd-svg
===========

.. conda:recipe:: perl-gd-svg
   :replaces_section_title:
   :noindex:

   Seamlessly enable SVG output from scripts written using GD

   :homepage: http://metacpan.org/pod/GD::SVG
   :license: perl_5
   :recipe: /`perl-gd-svg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd-svg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gd-svg/meta.yaml>`_

   


.. conda:package:: perl-gd-svg

   |downloads_perl-gd-svg| |docker_perl-gd-svg|

   :versions:
      
      

      ``0.33-2``,  ``0.33-1``,  ``0.33-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-gd: 
   :depends on perl-svg: 

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

    pixi global install perl-gd-svg

to add into an existing workspace instead, run::

    pixi add perl-gd-svg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-gd-svg

Alternatively, to install into a new environment, run::

    conda create -n envname perl-gd-svg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-gd-svg:<tag>

(see `perl-gd-svg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-gd-svg| image:: https://img.shields.io/conda/dn/bioconda/perl-gd-svg.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-gd-svg
   :alt:   (downloads)
.. |docker_perl-gd-svg| image:: https://quay.io/repository/biocontainers/perl-gd-svg/status
   :target: https://quay.io/repository/biocontainers/perl-gd-svg
.. _`perl-gd-svg/tags`: https://quay.io/repository/biocontainers/perl-gd-svg?tab=tags


.. raw:: html

    <script>
        var package = "perl-gd-svg";
        var versions = ["0.33","0.33","0.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gd-svg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gd-svg/README.html