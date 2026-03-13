:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-most'
.. highlight: bash

perl-test-most
==============

.. conda:recipe:: perl-test-most
   :replaces_section_title:
   :noindex:

   Most commonly needed test functions and features

   :homepage: http://metacpan.org/pod/Test-Most
   :license: unknown
   :recipe: /`perl-test-most <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-most>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-most/meta.yaml>`_

   


.. conda:package:: perl-test-most

   |downloads_perl-test-most| |docker_perl-test-most|

   :versions:
      
      

      ``0.38-0``,  ``0.37-0``,  ``0.35-1``,  ``0.35-0``,  ``0.34-2``,  ``0.34-1``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-exception-class: 
   :depends on perl-test-deep: 
   :depends on perl-test-differences: 
   :depends on perl-test-exception: 
   :depends on perl-test-warn: 

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

    pixi global install perl-test-most

to add into an existing workspace instead, run::

    pixi add perl-test-most

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-test-most

Alternatively, to install into a new environment, run::

    conda create -n envname perl-test-most

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-test-most:<tag>

(see `perl-test-most/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-test-most| image:: https://img.shields.io/conda/dn/bioconda/perl-test-most.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-most
   :alt:   (downloads)
.. |docker_perl-test-most| image:: https://quay.io/repository/biocontainers/perl-test-most/status
   :target: https://quay.io/repository/biocontainers/perl-test-most
.. _`perl-test-most/tags`: https://quay.io/repository/biocontainers/perl-test-most?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-most";
        var versions = ["0.38","0.37","0.35","0.35","0.34"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-most/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-most/README.html