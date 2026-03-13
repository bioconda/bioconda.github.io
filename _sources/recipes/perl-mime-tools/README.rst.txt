:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mime-tools'
.. highlight: bash

perl-mime-tools
===============

.. conda:recipe:: perl-mime-tools
   :replaces_section_title:
   :noindex:

   Tools to manipulate MIME messages.

   :homepage: https://metacpan.org/pod/MIME-tools
   :license: perl_5
   :recipe: /`perl-mime-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mime-tools/meta.yaml>`_

   


.. conda:package:: perl-mime-tools

   |downloads_perl-mime-tools| |docker_perl-mime-tools|

   :versions:
      
      

      ``5.517-0``,  ``5.515-0``,  ``5.508-2``,  ``5.508-1``,  ``5.508-0``,  ``5.507-1``,  ``5.507-0``

      

   
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-convert-binhex: 
   :depends on perl-mailtools: 

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

    pixi global install perl-mime-tools

to add into an existing workspace instead, run::

    pixi add perl-mime-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-mime-tools

Alternatively, to install into a new environment, run::

    conda create -n envname perl-mime-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-mime-tools:<tag>

(see `perl-mime-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-mime-tools| image:: https://img.shields.io/conda/dn/bioconda/perl-mime-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mime-tools
   :alt:   (downloads)
.. |docker_perl-mime-tools| image:: https://quay.io/repository/biocontainers/perl-mime-tools/status
   :target: https://quay.io/repository/biocontainers/perl-mime-tools
.. _`perl-mime-tools/tags`: https://quay.io/repository/biocontainers/perl-mime-tools?tab=tags


.. raw:: html

    <script>
        var package = "perl-mime-tools";
        var versions = ["5.517","5.515","5.508","5.508","5.508"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mime-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mime-tools/README.html