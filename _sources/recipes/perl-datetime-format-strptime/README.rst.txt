:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-datetime-format-strptime'
.. highlight: bash

perl-datetime-format-strptime
=============================

.. conda:recipe:: perl-datetime-format-strptime
   :replaces_section_title:
   :noindex:

   Parse and format strp and strf time patterns.

   :homepage: https://metacpan.org/dist/DateTime-Format-Strptime
   :license: Artistic_2
   :recipe: /`perl-datetime-format-strptime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-format-strptime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-datetime-format-strptime/meta.yaml>`_

   


.. conda:package:: perl-datetime-format-strptime

   |downloads_perl-datetime-format-strptime| |docker_perl-datetime-format-strptime|

   :versions:
      
      

      ``1.80-0``,  ``1.79-0``,  ``1.75-1``,  ``1.75-0``,  ``1.73-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on perl-constant: 
   :depends on perl-datetime: 
   :depends on perl-datetime-locale: ``>=1.30``
   :depends on perl-datetime-timezone: 
   :depends on perl-exporter: 
   :depends on perl-package-deprecationmanager: 
   :depends on perl-params-validationcompiler: 
   :depends on perl-parent: 
   :depends on perl-specio: 
   :depends on perl-try-tiny: 

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

    pixi global install perl-datetime-format-strptime

to add into an existing workspace instead, run::

    pixi add perl-datetime-format-strptime

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-datetime-format-strptime

Alternatively, to install into a new environment, run::

    conda create -n envname perl-datetime-format-strptime

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-datetime-format-strptime:<tag>

(see `perl-datetime-format-strptime/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-datetime-format-strptime| image:: https://img.shields.io/conda/dn/bioconda/perl-datetime-format-strptime.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-datetime-format-strptime
   :alt:   (downloads)
.. |docker_perl-datetime-format-strptime| image:: https://quay.io/repository/biocontainers/perl-datetime-format-strptime/status
   :target: https://quay.io/repository/biocontainers/perl-datetime-format-strptime
.. _`perl-datetime-format-strptime/tags`: https://quay.io/repository/biocontainers/perl-datetime-format-strptime?tab=tags


.. raw:: html

    <script>
        var package = "perl-datetime-format-strptime";
        var versions = ["1.80","1.79","1.75","1.75","1.73"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-datetime-format-strptime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-datetime-format-strptime/README.html