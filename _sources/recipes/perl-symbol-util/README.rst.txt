:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-symbol-util'
.. highlight: bash

perl-symbol-util
================

.. conda:recipe:: perl-symbol-util/0.0203
   :replaces_section_title:
   :noindex:

   Additional utils for Perl symbols manipulation

   :homepage: http://metacpan.org/pod/Symbol::Util
   :license: perl_5
   :recipe: /`perl-symbol-util <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-symbol-util>`_/`0.0203 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-symbol-util/0.0203>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-symbol-util/0.0203/meta.yaml>`_

   


.. conda:package:: perl-symbol-util

   |downloads_perl-symbol-util| |docker_perl-symbol-util|

   :versions:
      
      

      ``0.0203-2``,  ``0.0203-1``,  ``0.0203-0``

      

   
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-app-cpanminus: 

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

    pixi global install perl-symbol-util

to add into an existing workspace instead, run::

    pixi add perl-symbol-util

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-symbol-util

Alternatively, to install into a new environment, run::

    conda create -n envname perl-symbol-util

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-symbol-util:<tag>

(see `perl-symbol-util/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-symbol-util| image:: https://img.shields.io/conda/dn/bioconda/perl-symbol-util.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-symbol-util
   :alt:   (downloads)
.. |docker_perl-symbol-util| image:: https://quay.io/repository/biocontainers/perl-symbol-util/status
   :target: https://quay.io/repository/biocontainers/perl-symbol-util
.. _`perl-symbol-util/tags`: https://quay.io/repository/biocontainers/perl-symbol-util?tab=tags


.. raw:: html

    <script>
        var package = "perl-symbol-util";
        var versions = ["0.0203","0.0203","0.0203"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-symbol-util/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-symbol-util/README.html