:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mime-lite'
.. highlight: bash

perl-mime-lite
==============

.. conda:recipe:: perl-mime-lite
   :replaces_section_title:
   :noindex:

   Handy\-dandy MIME mailing class

   :homepage: http://metacpan.org/pod/MIME-Lite
   :license: perl_5
   :recipe: /`perl-mime-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-lite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-lite/meta.yaml>`_

   


.. conda:package:: perl-mime-lite

   |downloads_perl-mime-lite| |docker_perl-mime-lite|

   :versions:
      
      

      ``3.030-2``,  ``3.030-1``,  ``3.030-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-email-date-format: 
   :depends on perl-mailtools: 
   :depends on perl-mime-types: 

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

    pixi global install perl-mime-lite

to add into an existing workspace instead, run::

    pixi add perl-mime-lite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-mime-lite

Alternatively, to install into a new environment, run::

    conda create -n envname perl-mime-lite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-mime-lite:<tag>

(see `perl-mime-lite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-mime-lite| image:: https://img.shields.io/conda/dn/bioconda/perl-mime-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mime-lite
   :alt:   (downloads)
.. |docker_perl-mime-lite| image:: https://quay.io/repository/biocontainers/perl-mime-lite/status
   :target: https://quay.io/repository/biocontainers/perl-mime-lite
.. _`perl-mime-lite/tags`: https://quay.io/repository/biocontainers/perl-mime-lite?tab=tags


.. raw:: html

    <script>
        var package = "perl-mime-lite";
        var versions = ["3.030","3.030","3.030"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mime-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mime-lite/README.html