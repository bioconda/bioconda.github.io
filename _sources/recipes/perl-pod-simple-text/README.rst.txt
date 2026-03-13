:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-simple-text'
.. highlight: bash

perl-pod-simple-text
====================

.. conda:recipe:: perl-pod-simple-text/3.28
   :replaces_section_title:
   :noindex:

   format Pod as plaintext

   :homepage: http://metacpan.org/pod/Pod::Simple::Text
   :license: perl_5
   :recipe: /`perl-pod-simple-text <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-simple-text>`_/`3.28 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-simple-text/3.28>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-simple-text/3.28/meta.yaml>`_

   


.. conda:package:: perl-pod-simple-text

   |downloads_perl-pod-simple-text| |docker_perl-pod-simple-text|

   :versions:
      
      

      ``3.28-2``,  ``3.28-1``,  ``3.28-0``

      

   
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

    pixi global install perl-pod-simple-text

to add into an existing workspace instead, run::

    pixi add perl-pod-simple-text

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-pod-simple-text

Alternatively, to install into a new environment, run::

    conda create -n envname perl-pod-simple-text

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-pod-simple-text:<tag>

(see `perl-pod-simple-text/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-pod-simple-text| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-simple-text.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-simple-text
   :alt:   (downloads)
.. |docker_perl-pod-simple-text| image:: https://quay.io/repository/biocontainers/perl-pod-simple-text/status
   :target: https://quay.io/repository/biocontainers/perl-pod-simple-text
.. _`perl-pod-simple-text/tags`: https://quay.io/repository/biocontainers/perl-pod-simple-text?tab=tags


.. raw:: html

    <script>
        var package = "perl-pod-simple-text";
        var versions = ["3.28","3.28","3.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-simple-text/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-simple-text/README.html