:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-html-entities-numbered'
.. highlight: bash

perl-html-entities-numbered
===========================

.. conda:recipe:: perl-html-entities-numbered
   :replaces_section_title:
   :noindex:

   Conversion of numbered HTML entities

   :homepage: http://metacpan.org/pod/HTML-Entities-Numbered
   :license: unknown
   :recipe: /`perl-html-entities-numbered <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-entities-numbered>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-html-entities-numbered/meta.yaml>`_

   


.. conda:package:: perl-html-entities-numbered

   |downloads_perl-html-entities-numbered| |docker_perl-html-entities-numbered|

   :versions:
      
      

      ``0.04-2``,  ``0.04-1``,  ``0.04-0``

      

   
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

    pixi global install perl-html-entities-numbered

to add into an existing workspace instead, run::

    pixi add perl-html-entities-numbered

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-html-entities-numbered

Alternatively, to install into a new environment, run::

    conda create -n envname perl-html-entities-numbered

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-html-entities-numbered:<tag>

(see `perl-html-entities-numbered/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-html-entities-numbered| image:: https://img.shields.io/conda/dn/bioconda/perl-html-entities-numbered.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-html-entities-numbered
   :alt:   (downloads)
.. |docker_perl-html-entities-numbered| image:: https://quay.io/repository/biocontainers/perl-html-entities-numbered/status
   :target: https://quay.io/repository/biocontainers/perl-html-entities-numbered
.. _`perl-html-entities-numbered/tags`: https://quay.io/repository/biocontainers/perl-html-entities-numbered?tab=tags


.. raw:: html

    <script>
        var package = "perl-html-entities-numbered";
        var versions = ["0.04","0.04","0.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-html-entities-numbered/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-html-entities-numbered/README.html